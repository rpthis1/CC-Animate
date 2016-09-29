using System;
using System.Linq;
using System.Xml.Linq;
using IBIS.Infrastructure.Compression;
using log4net.Core;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WebApiBia.Common.Json;
using WebApiBia.Dashboard.Core.Dto.Report;
using WebApiBia.Dashboard.Core.FormatterProcessor.DataFormatters;
using WebApiBia.Data.Reports.FlexService;

namespace WebApiBia.Web.Api.Core.Processors.Controllers.IBIS
{
    public class GetCompressedObjectDataProcessor : IGetCompressedObjectDataProcessor
    {
        private readonly JsonHelper _serializer = new JsonHelper();
        public string Get(string rp)
        {
          string  data = GetData(rp);

            return data;
        }

        private string GetData(string rp)
        {
            FlexServiceSoapClient client = new FlexServiceSoapClient();
            string result = client.getCompressedObjectData(rp);


            return ProcessData(result);
        }

        private string  ProcessData(string data)
        {
            string result = CompressionUtil.UnCompress(data);
            XElement element = XElement.Parse(result);
            element = element.Descendants("data").ToArray().ElementAt(0);

            return element.Value;
        }

    }
}