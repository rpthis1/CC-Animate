using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Newtonsoft.Json;

namespace WebApiBia.Data.Entities.Bia
{
    public class BiaVOverrideString : BiaVOverride
    {
         [JsonProperty(PropertyName = "value")]
        public BiaVReportPropertyStringOverrideEDocument Value { get; set; }
    }
}
