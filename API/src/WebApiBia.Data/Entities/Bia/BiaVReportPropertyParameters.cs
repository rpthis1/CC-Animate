﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Newtonsoft.Json;

namespace WebApiBia.Data.Entities.Bia
{
   public class BiaVReportPropertyParameters:BiaVBase
   {
       public BiaVReportPropertyParameters()
       {
          Type = "d";
       }
       [JsonProperty(PropertyName = "@type")]
       public string Type { get; set; }

       [JsonProperty(PropertyName = "@version")]
       public int? Version { get; set; }

       [JsonProperty(PropertyName = "items")]
       public List<BiaVReportPropertyParameter> Items { get; set; }

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
