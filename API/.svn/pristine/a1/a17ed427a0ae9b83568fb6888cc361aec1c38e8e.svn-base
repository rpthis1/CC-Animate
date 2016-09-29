using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Newtonsoft.Json;

namespace WebApiBia.Data.Entities.Bia
{
    public class BiaVReportPropertyStringVertex : BiaVBase
    {

        [JsonProperty(PropertyName = "@type")]
        public string Type { get;set;}

        [JsonProperty(PropertyName = "value")]
        public string Value { get;set;}

        [JsonProperty(PropertyName = "override")]
        public BiaVOverrideString Override { get; set; }

        public string GetMergedString()
        {
            if (Override != null)
            {
                if (Override.Value != null)
                {
                    if (Override.Value.Content != null)
                    {
                        if (Override.Value.Content.Value != null && Override.Value.Enabled)
                        {
                            return Override.Value.Content.Value;
                        }
                    }
                }
            }

            if (Value != null && Value != null)
            {
                return Value;
            }

            return null;
        }
    }
}
