using System;
using System.Collections.Generic;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WebApiBia.Dashboard.Core.Dto.Report;
using WebApiBia.Dashboard.UiControls;
using WebApiBia.Dashboard.UiControls.Chart;
using WebApiBia.Data.Entities.Bia;

namespace WebApiBia.Dashboard.Core.Dto.Parent
{
    public class Parent : IParent
    {
        private List<string> _fields;

        [JsonProperty(PropertyName = "errorMessage")]
        public string ErrorMessage { get; set; }

        [JsonProperty(PropertyName = "values")]
        public List<dynamic> Values { get; set; }

        [JsonProperty(PropertyName = "leftFields")]
        public string[] LeftFields { get; set; } 

        [JsonProperty(PropertyName = "rightField")]
        public string[] RightField { get; set; }

         [JsonProperty(PropertyName = "categoryField")]
        public string CategoryField { get; set; }

        [JsonProperty(PropertyName = "formatter")]
        public string Formatter { get; set; }

        [JsonProperty(PropertyName = "dataProcessor")]
        public string DataProcessor { get; set; }

        [JsonProperty(PropertyName = "provider")]
        public string Provider { get; set; }

        [JsonProperty(PropertyName = "metaData")]
        public dynamic MetaData { get; set; }

        [JsonProperty(PropertyName = "decorators")]
        public List<BiaVReportPropertyParameterDecorator> Decorators { get; set; } 

        [JsonProperty(PropertyName = "footerDecorators")]
        public List<UiComponent> FooterDecorators { get; set; }

        [JsonProperty(PropertyName = "mvDecorators")]
        public List<UiComponent> MvDecorators { get; set; }

        [JsonProperty(PropertyName = "parameters")]
        public List<BiaVReportPropertyParameter> Parameters { get; set; }

         [JsonProperty(PropertyName = "chart")]
        public GenericChart Chart { set; get; }


         [JsonProperty(PropertyName = "allFields")]
         public Dictionary<string, string> AllFields { set; get; }


         [JsonProperty(PropertyName = "fields")]
         public List<string> Fields
         {
             set { _fields = value; }
             get { return _fields; }

         }

        [JsonProperty(PropertyName = "continuousCommissioningOptions")]
        public JObject ContinuousCommissioningOptions { get; set; }

        [JsonProperty(PropertyName = "mv")]
        public JObject Mv { get; set; }

        public Parent()
        {
            Chart = null;
            AllFields = null;
            Decorators  = new List<BiaVReportPropertyParameterDecorator>();
        }

        public void Decorate(ReportConfig config)
        {
            throw new NotImplementedException();
        }
    }
}