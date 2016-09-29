using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace WebApiBia.Data.Entities.Bia
{
    public class BiaVBase
    {
        [JsonProperty(PropertyName = "value")]
        public dynamic Value { get; set; }
        [JsonProperty(PropertyName = "cluster")]
        public int? Cluster { get; set; }
        [JsonProperty(PropertyName = "icon")]
        public string Icon { get; set; }
        [JsonProperty(PropertyName = "@type")]
        public string Type { get; set; }
        [JsonProperty(PropertyName = "@rid")]
        public string Rid { get; set; }
        [JsonProperty(PropertyName = "@class")]
        public string Class { get; set; }
        [JsonProperty(PropertyName = "leaf")]
        public string Leaf { get; set; }
        [JsonProperty(PropertyName = "label")]
        public virtual string Label { get; set; }
        [JsonProperty(PropertyName = "classMenu")]
        public JObject ClassMenu { get; set; }
        [JsonProperty(PropertyName = "menu")]
        public JObject Menu { get; set; }
        [JsonProperty(PropertyName = "hasTemplateOwner")]
        public bool? HasTemplateOwner;
        [JsonProperty(PropertyName = "biaEditable")]
        public bool? BiaEditable;
        [JsonProperty(PropertyName = "widgetCreator")]
        public string WidgetCreator { get; set; }

        public virtual string Serialize()
        {
            return Label;
        }

    }
}
