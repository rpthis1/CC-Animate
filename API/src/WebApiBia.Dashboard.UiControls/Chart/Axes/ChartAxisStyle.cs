using Newtonsoft.Json;
using WebApiBia.Dashboard.UiControls.Functions;

namespace WebApiBia.Dashboard.UiControls.Chart.Axes
{
    public class ChartAxisStyle
    {
        public ChartAxisStyle()
        {
            StrokeStyle = "#cccccc";
        }

        [JsonProperty(PropertyName = "strokeStyle")]
        public string StrokeStyle { get; set; }

    }
}