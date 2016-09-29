using System;
using System.Xml.Linq;
using IBIS.Infrastructure.Compression;
using log4net.Core;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WebApiBia.Common.Json;
using WebApiBia.Dashboard.Core.Dto.Report;
using WebApiBia.Data.Reports.FlexService;

namespace WebApiBia.Web.Api.Core.Processors.Controllers.IBIS
{
    public class FcGetAvailableDatesProcessor : IFcGetAvailableDatesProcessor
    {
        private readonly JsonHelper _serializer = new JsonHelper();
        public string Get(string type, string location)
        {
          string  data = GetDates(type,location);

            return data;
        }

        private string GetDates(string type, string location)
        {
            FlexServiceSoapClient client = new FlexServiceSoapClient();
            string result = client.FcGetAvailableDates(Convert.ToInt32(type), Convert.ToInt32(location));

            ProcessDates(result);

            return _serializer.Serialize(ProcessDates(result));
        }

        private JArray ProcessDates(string data)
        {
            JArray dates = new JArray();
            JObject dateObj;
            XElement xml = XElement.Parse(data);
            DateTime date;

            foreach (XElement xmlDate in xml.Nodes())
            {
                date = DateTime.Parse(xmlDate.Attribute("date").Value);
                dateObj = new JObject();
                dateObj["date"] = date.ToString("MM/dd/yyyy");
                dates.Add(dateObj);
            }

            return dates;
        }

    }
}