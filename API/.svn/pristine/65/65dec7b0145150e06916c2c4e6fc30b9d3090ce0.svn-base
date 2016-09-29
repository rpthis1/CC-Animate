using System;
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
    public class FcGetForecastByDateProcessor : IFcGetForecastByDateProcessor
    {
        private readonly JsonHelper _serializer = new JsonHelper();
        public string Get(string type, string location, string date)
        {
          string  data = GetDates(type,location,date);

            return data;
        }

        private string GetDates(string type, string location, string date)
        {
            FlexServiceSoapClient client = new FlexServiceSoapClient();
            
            try
            {
                string result = client.FcGetForecastByDate(Convert.ToInt32(type), Convert.ToInt32(location), date);
                return ProcessForecast(result);
            }
            catch (Exception e)
            {
                string error = String.Format("<data error={0}", e.Message);
                return error;
            }

        }

        private string  ProcessForecast(string data)
        {
            return _serializer.Serialize(new ContinuousCommissioningFormatter().Format(data));
        }

    }
}