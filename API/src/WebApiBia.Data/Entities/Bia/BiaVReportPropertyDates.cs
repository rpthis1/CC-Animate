using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Newtonsoft.Json;
using WebApiBia.Data.Attrubutes;

namespace WebApiBia.Data.Entities.Bia
{
   public class BiaVReportPropertyDates:BiaVBase
   {
       public BiaVReportPropertyDates()
       {
          Type = "d";
       }
       [JsonProperty(PropertyName = "@type")]
       public string Type { get; set; }

       [JsonProperty(PropertyName = "@version")]
       public int? Version { get; set; }

       [JsonProperty(PropertyName = "items")]
       public List<BiaVReportPropertyDate> Items { get; set; }

       [BiaUiReadOnly]
       [JsonProperty(PropertyName = "biaAddEnabled")]
       public bool? BiaAddEnabled { get; set; }

       [BiaUiReadOnly]
       [JsonProperty(PropertyName = "biaRemoveEnabled")]
       public bool? BiaRemoveEnabled { get; set; }

        public override string Serialize()
       {
           var settings = new JsonSerializerSettings()
           {
               NullValueHandling = NullValueHandling.Ignore
           };

           return JsonConvert.SerializeObject(this, settings);
       }
   }
}
