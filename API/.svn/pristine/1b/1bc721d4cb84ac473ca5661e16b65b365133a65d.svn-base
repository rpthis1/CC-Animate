using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Newtonsoft.Json;

namespace WebApiBia.Data.Entities.Bia
{
    public class BiaVReportPropertyParametersVertex : BiaVBase
    {
        [JsonProperty(PropertyName = "@type")]
        public string Type { get; set; }

        [JsonProperty(PropertyName = "value")]
        public BiaVReportPropertyParameters Value { get; set; }

        [JsonProperty(PropertyName = "override")]
        public BiaVOverrideParameters Override { get; set; }


        public List<BiaVReportPropertyParameter> GetMergedParameters()
        {
            if (Override != null)
            {
                if (Override.Value != null)
                {
                    if (Override.Value.Content != null)
                    {
                        if (Override.Value.Content.Items != null)
                        {
                            foreach (BiaVReportPropertyParameter parameter in Value.Items)
                            {
                                foreach (BiaVReportPropertyParameter overrideParameter in Override.Value.Content.Items)
                                {
                                    if (parameter.Id.Equals(overrideParameter.Id) && overrideParameter.Override)
                                    {
                                        parameter.Value = overrideParameter.Value;
                                        parameter.Override = overrideParameter.Override;
                                    }

                                }

                            }
                        }
                    }
                }
            }

            if (Value != null && Value.Items != null)
            {
                return Value.Items;
            }

            return null;
        }


    }
}
