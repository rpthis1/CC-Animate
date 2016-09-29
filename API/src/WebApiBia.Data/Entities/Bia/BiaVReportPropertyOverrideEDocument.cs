using System;
using System.CodeDom;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Newtonsoft.Json;

namespace WebApiBia.Data.Entities.Bia
{
    public class BiaVReportPropertyOverrideEDocument : IBiaVReportPropertyOverrideEDocument
    {
        public BiaVReportPropertyOverrideEDocument()
        {
            Type = "d";
            DocumentClass = GetType().Name;
        }
        [JsonProperty(PropertyName = "@type")]
        public string Type { get ; set; }

        [JsonProperty(PropertyName = "enabled")]
        public bool Enabled { get; set; }

        [JsonProperty(PropertyName = "documentClass")]
        public string DocumentClass { get; set; }

        [JsonProperty(PropertyName = "propertyRid")]
        public string PropertyRid { get; set; }


        public virtual string Serialize()
        {
            var settings = new JsonSerializerSettings()
            {
                NullValueHandling = NullValueHandling.Ignore
            };

            return JsonConvert.SerializeObject(this, settings);
        }

        public string GetDbFriendlyPropertyRid()
        {
            string [] temp = PropertyRid.Split('#');
            string result = temp[1];
            return result;

        }
    }
}
