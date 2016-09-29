using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Newtonsoft.Json;

namespace WebApiBia.Data.Entities.Bia
{
    public class BiaVReportPropertyParameterDecoratorItem
    {
        [JsonProperty(PropertyName = "selected")]
        public bool Selected { get; set; }
        [JsonProperty(PropertyName = "label")]
        public string Label { get; set; }
        [JsonProperty(PropertyName = "parameter")]
        public string Parameter { get; set; }
        [JsonProperty(PropertyName = "energyParameter")]
        public string EnergyParameter { get; set; }
        [JsonProperty(PropertyName = "units")]
        public string Units { get; set; }
        [JsonProperty(PropertyName = "precision")]
        public int? Precision { get; set; }

        
        /*
         * DDAxis
         */
        [JsonProperty(PropertyName = "secondarySeriesHidden")]
        public bool? SecondarySeriesHidden { get; set; }
        [JsonProperty(PropertyName = "reconfigureChart")]
        public bool? ReconfigureChart { get; set; }
        [JsonProperty(PropertyName = "secondarySeriesField")]
        public string SecondarySeriesField { get; set; }
        [JsonProperty(PropertyName = "secondarySeriesUnits")]
        public string SecondarySeriesUnits { get; set; }
        [JsonProperty(PropertyName = "secondarySeriesColor")]
        public string SecondarySeriesColor { get; set; }
        [JsonProperty(PropertyName = "secondarySeriesPrecision")]
        public int? SecondarySeriesPrecision { get; set; }

        
    }
}
