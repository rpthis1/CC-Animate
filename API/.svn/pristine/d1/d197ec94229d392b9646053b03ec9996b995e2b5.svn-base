using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace WebApiBia.Dashboard.UiControls.Chart
{
    public class CartesianChartOptions
    {

        [JsonProperty(PropertyName = "continuousCommissioning")]
        public JObject ContinuousCommissioning;

        [JsonProperty(PropertyName = "mode")]
        public string Mode;

        [JsonProperty(PropertyName = "leftUnits")]
        public string LeftUnits;

        [JsonProperty(PropertyName = "leftUnitsFixed")]
        public string LeftUnitsFixed { get; set; }

        [JsonProperty(PropertyName = "rightUnits")]
        public string RightUnits;

        [JsonProperty(PropertyName = "categoryUnits")]
        public string CategoryUnits;

        [JsonProperty(PropertyName = "precision")]
        public int? Precision { get; set; }

        [JsonProperty(PropertyName = "overageUnits")]
        public string OverageUnits { get; set; }

        [JsonProperty(PropertyName = "formattedPrecision")]
        public string FormattedPrecision
        {
            get
            {
                StringBuilder format = new StringBuilder("0,000");

                if (Precision != null)
                {

                    for (int i = 0; i < Precision; i++)
                    {
                        if (i == 0)
                        {
                            format.Append(".");
                        }
                        format.Append("0");
                    }
                    return format.ToString();
                }

                return null;
            }
 
        }

        [JsonProperty(PropertyName = "secondarySeriesUnits")]
        public string SecondarySeriesUnits;
        [JsonProperty(PropertyName = "secondarySeriesPrecision")]
        public int? SecondarySeriesPrecision { get; set; }
        [JsonProperty(PropertyName = "showGridView")]
        public bool? ShowGridView { get; set; }
        [JsonProperty(PropertyName = "showBarChartClusteredAndStackedToggle")]
        public bool? ShowBarChartClusteredAndStackedToggle { get; set; }
        [JsonProperty(PropertyName = "showExcelExport")]
        public bool? ShowExcelExport { get; set; }


        /* MV START*/
        [JsonProperty(PropertyName = "leftAxisLeftSeriesLabel")]
        public string LeftAxisLeftSeriesLabel { get; set; }
        [JsonProperty(PropertyName = "leftAxisRightSeriesLabel")]
        public string LeftAxisRightSeriesLabel { get; set; }
        [JsonProperty(PropertyName = "rightAxisSeriesLabel")]
        public string RightAxisSeriesLabel { get; set; }
        [JsonProperty(PropertyName = "leftAxisLeftSeriesColor")]
        public string LeftAxisLeftSeriesColor { get; set; }
        [JsonProperty(PropertyName = "leftAxisRightSeriesColor")]
        public string LeftAxisRightSeriesColor { get; set; }
        /* MV END*/

        [JsonProperty(PropertyName = "formattedSecondarySeriesPrecision")]
        public string FormattedSecondarySeriesPrecision
        {
            get
            {
                StringBuilder format = new StringBuilder("0,000");

                if (SecondarySeriesPrecision != null)
                {

                    for (int i = 0; i < SecondarySeriesPrecision; i++)
                    {
                        if (i == 0)
                        {
                            format.Append(".");
                        }
                        format.Append("0");
                    }
                    return format.ToString();
                }

                return null;
            }

        }

    }
}