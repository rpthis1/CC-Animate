using System;
using WebApiBia.Dashboard.Core.Dto.Report;
using WebApiBia.Data.Reports.FlexService;

namespace WebApiBia.Data.Reports.Core.DataProcessor
{
    public class ContinuousCommissioningDataProcessor : IDataProcessor
    {
        public string Process(object o)
        {
            FlexServiceSoapClient client = new FlexServiceSoapClient();
            ReportConfig config = (ReportConfig)o;
            

            try
            {
                int type = Convert.ToInt32(config.Parameters.Find(x => x != null && x.Id != null && x.Id.ToUpper() == "TYPE").Value);
                int location = Convert.ToInt32(config.Parameters.Find(obj => obj.Id.ToUpper() == "LOCATION").Value);
                string result = client.FcGetLatestForecast(type, location);
                return result;
            }
            catch (Exception e)
            {
                string error = String.Format("<data error={0}", e.Message);
                return error;
            }
        }
    }
}
