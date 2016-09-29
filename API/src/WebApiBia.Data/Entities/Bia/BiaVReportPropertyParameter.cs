using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WebApiBia.Data.Attrubutes;

namespace WebApiBia.Data.Entities.Bia
{
    public class BiaVReportPropertyParameter
    {
        [JsonProperty(PropertyName = "id")]
        public string Id { get; set; }
        [JsonProperty(PropertyName = "value")]
        public string Value { get; set; }
        [JsonProperty(PropertyName = "label")]
        public string Label { get; set; }
        [JsonProperty(PropertyName = "biaType")]
        public string BiaType { get; set; }
        [JsonProperty(PropertyName = "biaStore")]
        public string BiaStore { get; set; }
        [JsonProperty(PropertyName = "toolTip")]
        public string ToolTip { get; set; }
        [JsonProperty(PropertyName = "override")]
        public bool Override { get; set; }
        [JsonProperty(PropertyName = "biaEditable")]
        public bool? BiaEditable { get; set; }
        [JsonProperty(PropertyName = "precision")]
        public int? Precision { get; set; }

        [BiaUiReadOnly]
        [JsonProperty(PropertyName = "biaTypeConfigs")]
        public JArray BiaTypeConfigs { get; set; }
    }
}
