using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace WebApiBia.Data.Entities.Bia
{
    public class BiaVBaseProperty
    {
        [JsonProperty(PropertyName = "itemId")]
        public string ItemId { get; set; }

        [JsonProperty(PropertyName = "label")]
        public string Label { get; set; }

        [JsonProperty(PropertyName = "value")]
        public string Value { get; set; }

        [JsonProperty(PropertyName = "biaType")]
        public string BiaType { get; set; }

        [JsonProperty(PropertyName = "biaTypeConfigs")]
        public JArray BiaTypeConfigs { get; set; }

        [JsonProperty(PropertyName = "biaStore")]
        public string BiaStore { get; set; }



        [JsonProperty(PropertyName = "hidden")]
        public string Hidden { get; set; }

        [JsonProperty(PropertyName = "override")]
        public bool Override { get; set; }


        [JsonProperty(PropertyName = "yearsBack")]
        public int? YearsBack { get; set; }






    }
}
