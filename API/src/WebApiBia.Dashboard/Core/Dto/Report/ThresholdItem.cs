using Newtonsoft.Json;

namespace WebApiBia.Dashboard.Core.Dto.Report
{
    public class ThresholdItem
    {
         [JsonProperty(PropertyName = "bgImage")]
        public string BgImage { get; set; }
         [JsonProperty(PropertyName = "BgColor")]
        public string BgColor { get; set; }
         [JsonProperty(PropertyName = "foregroundColor")]
        public string ForegroundColor { get; set; }
         [JsonProperty(PropertyName = "low")]
        public string Low { get; set; }
         [JsonProperty(PropertyName = "high")]
        public string High { get; set; }

    }
}