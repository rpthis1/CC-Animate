using System.Linq;
using System.Xml.Linq;
using IBIS.Infrastructure.Compression;
using Newtonsoft.Json.Linq;
using WebApiBia.Common.Assert;
using WebApiBia.Data.Reports.FlexService;

namespace WebApiBia.Web.Api.Core.Processors.Controllers.IBISRealTime
{
    class CompressedObjectDataProcessor : ICompressedObjectDataProcessor
    {
        private readonly AssertUtil _assertUtil = new AssertUtil();
        public string Get(string path)
        {
            FlexServiceSoapClient client = new FlexServiceSoapClient();
            string rawNodeXml = client.getCompressedObjectData(path);
            rawNodeXml = CompressionUtil.UnCompress(rawNodeXml);
            JArray links = new JArray();


            if (rawNodeXml != "")
            {

                XElement xml = XElement.Parse(rawNodeXml);
                var xElements = xml.Descendants("DataPointValues");

           
                foreach (var link in xElements)
                {
                    XElement linkElment = (XElement) link;
                    if (linkElment.Nodes().Any())
                    {

                        JObject linkObject = new JObject();


                        var xElement = linkElment.Element("relationship_path");
                        if (xElement != null)
                            linkObject["rp"] = xElement.Value;


                        var element = linkElment.Element("data");
                        if (element != null)
                        {
                            linkObject["value"] = element.Value;
                            linkObject["status"] = GetSampleStatus();

                        }
                            


                        links.Add(linkObject);

                    }
                }


          
            }

            return links.ToString();
        }

        private JObject GetSampleStatus()
        {
            JObject jo = new JObject();
            jo["label"] = "alarm";

            return jo;
        }
    }
}