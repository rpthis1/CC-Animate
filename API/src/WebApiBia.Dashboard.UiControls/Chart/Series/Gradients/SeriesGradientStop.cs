using Newtonsoft.Json;

namespace WebApiBia.Dashboard.UiControls.Chart.Series.Gradients
{
    public class SeriesGradientStop
    {
     
        [JsonProperty(PropertyName = "offset")]
        public double Offset { get; set; }

        [JsonProperty(PropertyName = "color")]
        public string Color { get; set; }

       // [JsonProperty(PropertyName = "opacity")] public double Opacity = 0;
    }
}