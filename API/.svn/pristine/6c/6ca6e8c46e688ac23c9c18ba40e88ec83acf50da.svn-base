using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WebApiBia.Dashboard.Core.Dto.Report;
using WebApiBia.Data.Entities.Bia;
using WebApiBia.Data.Reports.BI;

namespace WebApiBia.Data.Reports.Core.DataProcessor
{
    public class YearlyDeltaConsumptionDataProcessor : IDataProcessor
    {
        public string Process(object o)
        {
            BISIntelligenceSoapClient client = new BISIntelligenceSoapClient();
            ReportConfig config = (ReportConfig)o;

            
            BiaVReportPropertyParameter startDateParameter = config.Parameters.Find(obj => obj.Id.ToUpper() == "STARTDATE");
            BiaVReportPropertyParameter endDateParameter = config.Parameters.Find(obj => obj.Id.ToUpper() == "ENDDATE");
            string oldStartDate = startDateParameter.Value;
            string oldEndDate = endDateParameter.Value;

            
            string startDateString = startDateParameter.Value;
            string endDateString = endDateParameter.Value;

            DateTime startYear = DateTime.Parse(startDateString);
            string updatedStart = String.Format("1/1/{0}", startYear.Year);
            string updatedEnd = String.Format("12/31/{0}", startYear.Year);
            startDateParameter.Value = updatedStart;
            endDateParameter.Value = updatedEnd;
            
            string data = config.GetFormattedParameters();
            string provider = config.Provider;
            string before = client.LoadBaseEntityReportUncompressed(data, provider);

            DateTime endYear = DateTime.Parse(endDateString);
            updatedStart = String.Format("1/1/{0}", endYear.Year);
            updatedEnd = String.Format("12/31/{0}", endYear.Year);
            startDateParameter.Value = updatedStart;
            endDateParameter.Value = updatedEnd;

            data = config.GetFormattedParameters();
            string after = client.LoadBaseEntityReportUncompressed(data, provider);

            StringBuilder sb = new StringBuilder("<result>");

            sb.Append(before);
            sb.Append(after);
            sb.Append("</result>");

       
            startDateParameter.Value = oldStartDate;
            endDateParameter.Value = oldEndDate;

            return sb.ToString();
        }
    }
}
