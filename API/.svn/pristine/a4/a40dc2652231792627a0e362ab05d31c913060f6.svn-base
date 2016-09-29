using System.Collections.Generic;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WebApiBia.Dashboard.UiControls.Chart.Axes;
using WebApiBia.Dashboard.UiControls.Chart.Background;
using WebApiBia.Dashboard.UiControls.Chart.Interactions;
using WebApiBia.Dashboard.UiControls.Chart.Series;
using WebApiBia.Dashboard.UiControls.Chart.Series.Gradients;

namespace WebApiBia.Dashboard.UiControls.Chart
{
    public class GenericChart
    {
        public GenericChart()
        {
            Background = new ImageBackground().Generate();
        }


        [JsonProperty(PropertyName = "gradients")]
        public Dictionary<string, SeriesGradient> Gradients { get; set; }

        [JsonProperty(PropertyName = "animation")]
        public bool Animation = true;

         [JsonProperty(PropertyName = "insetPadding")]
        public int? InsetPadding = 20;

         [JsonProperty(PropertyName = "innerPadding")]
         public int? InnerPadding { get; set; }

         [JsonProperty(PropertyName = "background")]
         public dynamic Background { get; set; }

         [JsonProperty(PropertyName = "width")]
        public string Width = "100%";

         [JsonProperty(PropertyName = "height")]
        public string Height = "100%";

         [JsonProperty(PropertyName = "options")]
        public CartesianChartOptions Options;

         [JsonProperty(PropertyName = "legend")]
         public Legend Legend { get; set; }

         [JsonProperty(PropertyName = "series")]
        public List<ChartSeries> Series = new List<ChartSeries>();

         [JsonProperty(PropertyName = "axes")]
        public List<ChartAxis> Axes = new List<ChartAxis>();

      
         [JsonProperty(PropertyName = "interactions")]
         public JArray Interactions { get; set; }

         [JsonProperty(PropertyName = "overageUnits")]
         public string OverageUnits { get; set; }


         [JsonProperty(PropertyName = "biaChartType")]
         public string BiaChartType { get; set; }


        // [JsonProperty(PropertyName = "interactions")]
        //public List<InteractionsBase> Interactions = new List<InteractionsBase>();

       
    
         
    }
}