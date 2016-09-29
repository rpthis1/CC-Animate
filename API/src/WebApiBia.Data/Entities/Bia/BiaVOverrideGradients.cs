using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Newtonsoft.Json;

namespace WebApiBia.Data.Entities.Bia
{
    public class BiaVOverrideGradients : BiaVOverride
    {
         [JsonProperty(PropertyName = "value")]
        public BiaVReportPropertyGradientsOverrideEDocument Value { get; set; }
    }
}
