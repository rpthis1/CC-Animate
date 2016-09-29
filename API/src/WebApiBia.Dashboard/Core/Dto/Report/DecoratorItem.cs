using System.Collections.Generic;
using Newtonsoft.Json;

namespace WebApiBia.Dashboard.Core.Dto.Report
{
    public class DecoratorItem
    {
        [JsonProperty(PropertyName = "type")]
        public string Type { get; set; }
        [JsonProperty(PropertyName = "width")]
        public string Width { get; set; }
        [JsonProperty(PropertyName = "label")]
        public string Label { get; set; }
        [JsonProperty(PropertyName = "parameter")]
        public string Parameter { get; set; }
        [JsonProperty(PropertyName = "items")]
        public List<DecoratorSubItem> Items { get; set; }

    }
}