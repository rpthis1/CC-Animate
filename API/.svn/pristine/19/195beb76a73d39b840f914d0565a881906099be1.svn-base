using System.Dynamic;
using System.Runtime.InteropServices;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WebApiBia.Dashboard.UiControls.Chart.Axes;
using WebApiBia.Dashboard.UiControls.Chart.Series.Style;
using WebApiBia.Dashboard.UiControls.Chart.Series.ToolTip;
using WebApiBia.Dashboard.UiControls.Functions;

namespace WebApiBia.Dashboard.UiControls.Chart.Series
{
    public class ChartSeries
    {


        [JsonProperty(PropertyName = "type")]
        public string Type = SeriesTypes.Bar;

        [JsonProperty(PropertyName = "fill")]
        public bool? Fill { get; set; }

        [JsonProperty(PropertyName = "xAxis")]
        public int? XAxis { get; set; }

        [JsonProperty(PropertyName = "yAxis")]
        public int? YAxis { get; set; }

        [JsonProperty(PropertyName = "axes")]
        public string Axes = AxisPositionType.Left;

        [JsonProperty(PropertyName = "colors")]
        public string[] Colors { get; set; }

        [JsonProperty(PropertyName = "title")]
        public string[] Title;

        [JsonProperty(PropertyName = "xField")]
        public string[] XField = { "cat" };

        [JsonProperty(PropertyName = "yField")]
        public string[] YField;

        [JsonProperty(PropertyName = "stacked")]
        public  bool Stacked = true;

        [JsonProperty(PropertyName = "renderer")]
        public string Renderer = null;

        [JsonProperty(PropertyName = "rendererFunction")]
        public JavaScriptFunction RendererFunction;

        [JsonProperty(PropertyName = "tooltip")]
        public SeriesToolTip Tooltip = new SeriesToolTip();

        [JsonProperty(PropertyName = "style")]
        public JObject Style { get; set; }

        [JsonProperty(PropertyName = "marker")]
        public JObject Marker { get; set; }

        [JsonProperty(PropertyName = "highlightCfg")]
        public dynamic HighlightCfg { get; set; }

        [JsonProperty(PropertyName = "hidden")]
        public bool? Hidden { get; set; }

        [JsonProperty(PropertyName = "showInLegend")]
        public bool? ShowInLegend { get; set; }

        [JsonProperty(PropertyName = "selectionTolerance")]
        public int SelectionTolerance = 5;

        [JsonProperty(PropertyName = "angleField")]
        public string AngleField { get; set; }

        [JsonProperty(PropertyName = "highlight")]
        public bool? Highlight { get; set; }

        [JsonProperty(PropertyName = "label")]
        public JObject Label { get; set; }

        [JsonProperty(PropertyName = "rotation")]
        public int Rotation { get; set; }


    }
}