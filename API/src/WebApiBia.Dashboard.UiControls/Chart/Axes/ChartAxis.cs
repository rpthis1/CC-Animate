using Newtonsoft.Json;
using WebApiBia.Dashboard.UiControls.Functions;

namespace WebApiBia.Dashboard.UiControls.Chart.Axes
{
    public class ChartAxis
    {
        public ChartAxis()
        {
            Style = new ChartAxisStyle();
            Label = new ChartAxisLabel();

        }

        [JsonProperty(PropertyName = "type")]
        public string Type = AxisTypes.Category;

        [JsonProperty(PropertyName = "position")]
        public string Position = AxisPositionType.Bottom;

        [JsonProperty(PropertyName = "fields")]
        public string[] Fields { get; set; }

        [JsonProperty(PropertyName = "grid")]
        public bool Grid = false;

        [JsonProperty(PropertyName = "rendererFunction")]
        public JavaScriptFunction RendererFunction;

        [JsonProperty(PropertyName = "style")]
        public ChartAxisStyle Style { get; set; }

        [JsonProperty(PropertyName = "label")]
        public ChartAxisLabel Label { get; set; }

        [JsonProperty(PropertyName = "hidden")]
        public bool? Hidden { get; set; }

        [JsonProperty(PropertyName = "fromDate")]
        public double? FromDate { get; set; }

        [JsonProperty(PropertyName = "toDate")]
        public double? toDate { get; set; }

        [JsonProperty(PropertyName = "title")]
        public string Title { get; set; }

        [JsonProperty(PropertyName = "maximum")]
        public int? Maximum { get; set; }

        [JsonProperty(PropertyName = "minimum")]
        public int? Minimum { get; set; }


        [JsonProperty(PropertyName = "majorTickSteps")]
        public int? MajorTickSteps { get; set; }

        //[JsonProperty(PropertyName = "reconcileRange")]
        //public bool ReconcileRange = true;  //default false

        //[JsonProperty(PropertyName = "adjustByMajorUnit")] 
        //public bool AdjustByMajorUnit = false; //default true

        //[JsonProperty(PropertyName = "increment")]
        //public double Increment = 2;  //default .5






    }
}