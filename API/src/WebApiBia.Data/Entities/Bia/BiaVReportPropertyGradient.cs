using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using Newtonsoft.Json;

namespace WebApiBia.Data.Entities.Bia
{
    public class BiaVReportPropertyGradient
    {

        [JsonProperty(PropertyName = "color")]
        public string Color { get; set; }
        [JsonProperty(PropertyName = "opacity")]
        public double? Opacity { get; set; }
        [JsonProperty(PropertyName = "radius")]
        public int? Radius { get; set; }
        [JsonProperty(PropertyName = "gradient")]
        public string Gradient { get; set; }
        [JsonProperty(PropertyName = "strokeColor")]
        public string StrokeColor { get; set; }

    }
}
