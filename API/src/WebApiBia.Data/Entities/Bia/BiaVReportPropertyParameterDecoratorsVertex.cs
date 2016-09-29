using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Newtonsoft.Json;

namespace WebApiBia.Data.Entities.Bia
{
    public class BiaVReportPropertyParameterDecoratorsVertex : BiaVBase
    {
        [JsonProperty(PropertyName = "@type")]
        public string Type { get; set; }

        [JsonProperty(PropertyName = "value")]
        public BiaVReportPropertyParameterDecorators Value { get; set; }

        [JsonProperty(PropertyName = "override")]
        public BiaVOverrideParameterDecorators Override { get; set; }


        public List<BiaVReportPropertyParameterDecorator> GetMergedParametersDecorators()
        {
            if (Override != null)
            {
                if (Override.Value != null)
                {
                    if (Override.Value.Content != null && Override.Value.Enabled)
                    {
                        if (Override.Value.Content.Items != null)
                        {
                            return Override.Value.Content.Items;

                        }
                    }
                }
            }

            return Value.Items;
        }


    }
}
