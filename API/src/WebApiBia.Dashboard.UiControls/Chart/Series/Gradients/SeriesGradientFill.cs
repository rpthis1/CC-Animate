using System.Collections.Generic;
using Newtonsoft.Json;

namespace WebApiBia.Dashboard.UiControls.Chart.Series.Gradients
{
    public class SeriesGradientFill
    {
        public SeriesGradientFill()
        {
            Stops = new List<SeriesGradientStop>();
        }

        [JsonProperty(PropertyName = "type")]
        public string Type = "linear";

        [JsonProperty(PropertyName = "stops")]
        public List<SeriesGradientStop> Stops { get; set; }

        
    }
}