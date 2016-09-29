using System;
using WebApiBia.Dashboard.Core.Dto.Report;
using WebApiBia.Data.BusinessIntelligence.ReportingServices;

namespace WebApiBia.Data.BusinessIntelligence.Core.DataProcessor
{
    public class ReportDataProcessor : IReportDataProcessor
    {
        public string Process(object o)
        {
            ReportConfig config = (ReportConfig) o;
            
            ReportingServices.BISIntelligenceSoapClient client = new BISIntelligenceSoapClient();
            string data = config.GetFormattedParameters();
            string provider = config.Provider;
            string result = client.LoadBaseEntityReportUncompressed(data, provider);

            return result;
        }
    }
}