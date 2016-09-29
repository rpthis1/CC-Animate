using System;
using System.Collections.Generic;
using System.Text;
using System.Xml.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json.Schema;
using WebApiBia.Data.Entities.Bia;

namespace WebApiBia.Dashboard.Core.Dto.Report
{
    public class ReportConfig : ConfigBase
    {
        [JsonProperty(PropertyName = "title")]
        public string Title { get; set; }
        [JsonProperty(PropertyName = "leftColor")]
        public string LeftColor { get; set; }
        [JsonProperty(PropertyName = "rightColor")]
        public string RightColor { get; set; }
        [JsonProperty(PropertyName = "leftAxisUnits")]
        public string LeftAxisUnits { get; set; }
        [JsonProperty(PropertyName = "rightAxisUnits")]
        public string RightAxisUnits { get; set; }
        [JsonProperty(PropertyName = "categoryDataTipLabelField")]
        public string CategoryDataTipLabelField { get; set; }
        [JsonProperty(PropertyName = "overageUnits")]
        public string OverageUnits { get; set; }
        [JsonProperty(PropertyName = "rightLabel")]
        public string RightLabel { get; set; }
        [JsonProperty(PropertyName = "processor")]
        public string Processor { get; set; }
        [JsonProperty(PropertyName = "titleWidth")]
        public string TitleWidth { get; set; }
        [JsonProperty(PropertyName = "optionImage")]
        public string OptionImage { get; set; }
        [JsonProperty(PropertyName = "provider")]
        public string Provider { get; set; }
        [JsonProperty(PropertyName = "formatter")]
        public string Formatter { get; set; }
        [JsonProperty(PropertyName = "DataProcessor")]
        public string DataProcessor { get; set; }
        [JsonProperty(PropertyName = "dataDecorator")]
        public string DataDecorator { get; set; }
        [JsonProperty(PropertyName = "chartType")]
        public string ChartType { get; set; }
        [JsonProperty(PropertyName = "formFactor")]
        public string FormFactor { get; set; }
        [JsonProperty(PropertyName = "precision")]
        public int? Precision { get; set; }
        [JsonProperty(PropertyName = "mode")] 
        public string Mode = "energy";
        [JsonProperty(PropertyName = "secondaySeriesField")]
        public string[] SecondaySeriesFields { get; set; }
        [JsonProperty(PropertyName = "secondaySeriesTitle")]
        public string[] SecondaySeriesTitle { get; set; }
        [JsonProperty(PropertyName = "secondarySeriesColor")]
        public string SecondarySeriesColor { get; set; }
        [JsonProperty(PropertyName = "secondaySeriesPrecision")]
        public int? SecondaySeriesPrecision { get; set; }
        [JsonProperty(PropertyName = "secondarySeriesUnits")]
        public string SecondarySeriesUnits { get; set; }
        [JsonProperty(PropertyName = "secondarySeriesHidden")]
        public bool? SecondarySeriesHidden { get; set; }
        [JsonProperty(PropertyName = "propertiesProcessor")]
        public string PropertiesProcessor { get; set; }


        [JsonProperty(PropertyName = "parameters")]
        public List<BiaVReportPropertyParameter> Parameters { get; set; }
        [JsonProperty(PropertyName = "decorators")]
        public List<BiaVReportPropertyParameterDecorator> Decorators { get; set; }
        [JsonProperty(PropertyName = "reports")]
        public List<ReportItem> Reports { get; set; }
        [JsonProperty(PropertyName = "thresholds")]
        public List<ThresholdItem> Thresholds { get; set; }
        [JsonProperty(PropertyName = "dates")]
        public List<BiaVReportPropertyDate> Dates { get; set; }
        [JsonProperty(PropertyName = "gradients")]
        public List<BiaVReportPropertyGradient> Gradients { get; set; }


       
        //MV START//
        [JsonProperty(PropertyName = "leftAxisLeftSeriesLabel")]
        public string LeftAxisLeftSeriesLabel { get; set; }
        [JsonProperty(PropertyName = "leftAxisRightSeriesLabel")]
        public string LeftAxisRightSeriesLabel { get; set; }
        [JsonProperty(PropertyName = "leftAxisLeftSeriesColor")]
        public string LeftAxisLeftSeriesColor { get; set; }
        [JsonProperty(PropertyName = "leftAxisRightSeriesColor")]
        public string LeftAxisRightSeriesColor { get; set; }
        [JsonProperty(PropertyName = "mvDates")]
        public List<BiaVReportPropertyDate> MvDates { get; set; }
        [JsonProperty(PropertyName = "rightAxisSeriesLabel")]
        public string RightAxisSeriesLabel { get; set; }

        

        public JObject MvCOptions { get; set; }

        /*  Create JsonSchema.Parse()
         * {
         *      reports: [
         *                 {
         *                     "label": "MV", "type":"mv"
         *                     
         *                 },
         *                 {
         *                     "label": "MV vs Metered", "type":"metered", "meteredEntityId": "10"
         *                 }
         *      
         *               ]
         * }
         */


        //MV END//



        public string RawParameters
        {
            set
            {
                XElement xml = XElement.Parse(value);
                if (Parameters == null)
                {
                    Parameters = new List<BiaVReportPropertyParameter>();
                }
                else
                {
                    Parameters.Clear();
                }
                foreach (XElement xmlParameter in xml.Nodes())
                {
                    BiaVReportPropertyParameter parameter = new BiaVReportPropertyParameter()
                    {
                        Id = xmlParameter.Attribute("id").Value,
                        Value = xmlParameter.Attribute("value").Value,
                    };

                    Parameters.Add(parameter);
                    
                }
            }
        }

        public ReportConfig()
        {
            FormFactor = "Desktop";
            DataProcessor = "ReportDataProcessor";
            PropertiesProcessor = "ReportPropertyValuesProcessor";
        }

        public string GetFormattedParameters()
        {

            StringBuilder parameters = new StringBuilder("<parameters>");

            if (Parameters != null)
            {
                 foreach (BiaVReportPropertyParameter item in Parameters)
                  {
                     parameters.Append(String.Format("<parameter id='{0}' value='{1}'/>", item.Id, item.Value));
                  }

                   parameters.Append("</parameters>");
                   return parameters.ToString();
            }

            return null;

        }

        public string GetLeftUnits()
        {
            return LeftAxisUnits;
        }

        public string GetRightUnits()
        {
            return RightAxisUnits;
        }





    }
}