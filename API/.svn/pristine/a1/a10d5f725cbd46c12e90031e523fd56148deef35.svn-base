using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Newtonsoft.Json;

namespace WebApiBia.Data.Entities.Bia
{
    public class BiaVReportPropertyString : BiaVBase
    {

        [JsonProperty(PropertyName = "value")]
        public string Value { get; set; }

        public override string Serialize()
        {
            return "\"" + Value + "\"";
        }
    }
}
