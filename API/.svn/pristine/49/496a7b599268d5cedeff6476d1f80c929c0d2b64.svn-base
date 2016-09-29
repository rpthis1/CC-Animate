using System;
using System.Xml.Linq;
using IBIS.Infrastructure.Compression;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WebApiBia.Common.Json;
using WebApiBia.Dashboard.Core.Dto.Report;
using WebApiBia.Data.Reports.FlexService;

namespace WebApiBia.Web.Api.Core.Processors.Controllers.IBIS
{
    public class RealTimeTrendsContinuousCommissioningProcessor : IRealTimeTrendsContinuousCommissioningProcessor
    {
        private readonly JsonHelper _serializer = new JsonHelper();
        public string Get(string inputRp, string outputRp, string date, string granularity, string behavior, string offset)
        {
            DateTime start = DateTime.Parse(date + " 12:00:00 AM");
            DateTime end = DateTime.Parse(date + " 11:59:59 PM");
            JArray trends = new JArray();

            int granularityInteger = GetGranularityValue(granularity);
            behavior = GetBehaviorValue(behavior);
            string startDate = ShiftDate(start, Convert.ToInt32(offset));
            string endDate = ShiftDate(end, Convert.ToInt32(offset));

            string data = GetTrendDate(inputRp, startDate, endDate, granularityInteger, behavior);

            trends.Add(FormatTemperatureData(data, Convert.ToInt32(offset)));

            data = GetTrendDate(outputRp, startDate, endDate, granularityInteger, behavior);

            trends.Add(FormatUsageData(data, Convert.ToInt32(offset)));


            return _serializer.Serialize(trends);
        }

        private string GetTrendDate(string rp, string startDate, string endDate, int granularity, string behavior)
        {
            FlexServiceSoapClient client = new FlexServiceSoapClient();
            string result = client.getCompressedPointTrendRangeByFunction(rp, startDate, endDate, Convert.ToInt32(granularity), behavior);
            result = CompressionUtil.UnCompress(result);
            return result;
        }

        private JObject FormatUsageData(string data, int offset)
        {

            JObject trendParentObject = new JObject();
            JArray trendsArray = new JArray();
            trendParentObject["type"] = "temperature";
            trendParentObject["trends"] = trendsArray;

            XElement trends = XElement.Parse(data);
            foreach (var xNode in trends.Nodes())
            {
                var item = (XElement)xNode;

                JObject trendObject = new JObject();
                var date = DateTime.Parse(item.Attribute("date").Value);
                trendObject["actualhour"] = ShiftDateBack(date, offset);
                trendObject["Actual Usage"] = item.Attribute("trend_value").Value;
                trendsArray.Add(trendObject);
            }

            return trendParentObject;
        }

        private JObject FormatTemperatureData(string data, int offset)
        {
            JObject trendParentObject = new JObject();
            JArray trendsArray = new JArray();
            trendParentObject["type"] = "temperature";
            trendParentObject["trends"] = trendsArray;

            XElement trends = XElement.Parse(data);
            foreach (var xNode in trends.Nodes())
            {
                 var item = (XElement) xNode;

                JObject trendObject = new JObject();
                var date = DateTime.Parse(item.Attribute("date").Value);
                trendObject["actualhour"] = ShiftDateBack(date, offset);
                trendObject["Actual Temperature"] = item.Attribute("trend_value").Value;
                trendsArray.Add(trendObject);
            }

            return trendParentObject;
        }

        private int GetGranularityValue(string granulairty)
        {
            switch (granulairty.ToUpper())
            {
                case "MINUTELY":
                    return 5;
                case "HOURLY":
                    return 4;
            }
            return 0;
        }

        private string GetBehaviorValue(string behavior)
        {
            switch (behavior.ToUpper())
            {
                case "AVERAGE":
                    return "";
            }
            return behavior;
        }

        private string ShiftDate(DateTime localDate, int offset)
        {
           offset = offset*-1;
           localDate = localDate.AddHours(offset);
           return localDate.ToString(); 
        }
        private string ShiftDateBack(DateTime localDate, int offset)
        {
            localDate = localDate.AddHours(offset);
            return localDate.ToString();
        }
    }
}