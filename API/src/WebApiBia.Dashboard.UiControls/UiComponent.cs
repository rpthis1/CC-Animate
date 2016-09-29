using Newtonsoft.Json;

namespace WebApiBia.Dashboard.UiControls
{
    public abstract class UiComponent
    {
        [JsonProperty(PropertyName = "xtype")]
        public string Xtype { get; set; }

        [JsonProperty(PropertyName = "controlType")]
        public string ControlType { get; set; }

        [JsonProperty(PropertyName = "parameter")]
        public string Parameter { get; set; }

        [JsonProperty(PropertyName = "width")]
        public string Width { get; set; }

        [JsonProperty(PropertyName = "height")]
        public string Height { get; set; }

        [JsonProperty(PropertyName = "flex")]
        public int? Flex { get; set; }

        [JsonProperty(PropertyName = "reference")]
        public string Reference { get; set; }

        [JsonProperty(PropertyName = "tooltip")]
        public string Tooltip { get; set; }

        [JsonProperty(PropertyName = "padding")]
        public string Padding { get; set; }
    }
}