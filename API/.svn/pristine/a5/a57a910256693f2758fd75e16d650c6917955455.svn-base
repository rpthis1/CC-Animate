using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WebApiBia.Dashboard.Core.Dto.Report;
using WebApiBia.Data.Reports.BI;

namespace WebApiBia.Data.Reports.Core.DataProcessor
{
   public class ReportDataProcessor:IDataProcessor
    {
        public string Process(object o)
        {
            BISIntelligenceSoapClient client = new BISIntelligenceSoapClient();
            ReportConfig config = (ReportConfig)o;
            string data = config.GetFormattedParameters();
            string provider = config.Provider;
            try
            {
                string result = client.LoadBaseEntityReportUncompressed(data, provider);
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
