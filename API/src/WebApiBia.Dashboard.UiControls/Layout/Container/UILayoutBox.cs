using Newtonsoft.Json;

namespace WebApiBia.Dashboard.UiControls.Layout.Container
{
    public abstract class UiLayoutBox:UiComponent
    {
        [JsonProperty(PropertyName = "type")]
        public string Type ;

        [JsonProperty(PropertyName = "align")]
        public string Align;

        [JsonProperty(PropertyName = "pack")]
        public string Pack;
    }
}