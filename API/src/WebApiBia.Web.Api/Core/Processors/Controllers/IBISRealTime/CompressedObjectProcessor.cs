using System.Linq;
using System.Xml.Linq;
using IBIS.Infrastructure.Compression;
using Newtonsoft.Json.Linq;
using WebApiBia.Common.Assert;
using WebApiBia.Data.Reports.FlexService;

namespace WebApiBia.Web.Api.Core.Processors.Controllers.IBISRealTime
{
    class CompressedObjectProcessor : ICompressedObjectProcessor
    {
        private readonly AssertUtil _assertUtil = new AssertUtil();
        public string Get(string path)
        {
            FlexServiceSoapClient client = new FlexServiceSoapClient();
            string rawNodeXml = client.getCompressedObject(path);
            rawNodeXml = CompressionUtil.UnCompress(rawNodeXml);
            XElement xml = XElement.Parse(rawNodeXml);

            var xElements = xml.Descendants().Where(x => x.Attribute("linkID") != null);

            JArray links  = new JArray();

            foreach (var link in xElements)
            {
                XElement linkElment = (XElement) link;
                if (linkElment.Nodes().Any())
                {
                    XElement point = (XElement) linkElment.Nodes().FirstOrDefault();
                    JObject linkObject = new JObject();



                    if (point != null)
                    {
                        linkObject["rp"] =
                            _assertUtil.AssertAttributeIsNullOrEmptyReturnEmptyString(
                                point.Attribute("relationship_path"));

                        linkObject["linkID"] =
                            _assertUtil.AssertAttributeIsNullOrEmptyReturnEmptyString(
                                link.Attribute("linkID"));

                        JObject obj = JObject.FromObject(point);

                        linkObject["properties"] = obj;
                       
                        links.Add(linkObject);
                    }
                }
            }


            return links.ToString();
        }


    }
}