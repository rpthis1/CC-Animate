using Newtonsoft.Json;
using WebApiBia.Dashboard.UiControls.Functions;

namespace WebApiBia.Dashboard.UiControls.Chart.Axes
{
    public class ChartAxisLabel
    {
        public ChartAxisLabel()
        {
            TextBaseline = "middle";
            TextAlign = "center";
            Font = "14px";
            Color = "#CCCCCC";

        }

        [JsonProperty(PropertyName = "textBaseline")]
        public string TextBaseline { get; set; }

         [JsonProperty(PropertyName = "textAlign")]
        public string TextAlign { get; set; }

         [JsonProperty(PropertyName = "font")]
        public string Font { get; set; }

         [JsonProperty(PropertyName = "color")]
        public string Color { get; set; }
   
            
    }
}