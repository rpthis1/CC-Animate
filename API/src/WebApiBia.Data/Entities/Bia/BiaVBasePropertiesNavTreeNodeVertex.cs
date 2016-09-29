using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Newtonsoft.Json;

namespace WebApiBia.Data.Entities.Bia
{
    public class BiaVBasePropertiesNavTreeNodeVertex : BiaVBasePropertiesVertex
    {
        private string _label;

        [JsonProperty(PropertyName = "template")]    // Add UI only attribute
        public BiaVBasePropertiesVertex Template { get; set; }

        [JsonProperty(PropertyName = "templateOwnerRid")] // Add UI only attribute
        public string TemplateOwnerRid { get; set; }

        [JsonProperty(PropertyName = "label")]
        public new string Label
        {
            get
            {
                if (Value != null)
                {
                    if (Value.Items != null)
                    {

                        foreach (BiaVBaseProperty property in Value.Items)
                        {

                            if (property.Label.ToUpper().Equals("TITLE"))
                            {
                                if (Template != null)
                                {

                                    return String.Format("[ {0} ] - {1}", Template.Label, property.Value);
                                }
                                return String.Format("** NO TEMPLATE ** - {0}", property.Value);

                            }
                        }


                    }
                }

                return _label;
            }

            set { _label = value; }
        }

    }
}
