using System.Collections.Generic;
using Newtonsoft.Json;

namespace WebApiBia.Dashboard.UiControls.Field
{
    public class UiFieldRadio : UiComponent
    {
        [JsonProperty(PropertyName = "name")]
        public string Name = "parameterNameHere";

        [JsonProperty(PropertyName = "value")]
        public string Value;

        [JsonProperty(PropertyName = "label")]
        public string Label;

        [JsonProperty(PropertyName = "checked")]
        public bool Checked = false;

        [JsonProperty(PropertyName = "childComponents")]
        public List<UiComponent> ChildComponents = new List<UiComponent>();
        public UiFieldRadio()
        {
            this.Xtype = "radiofield";
        }

    }
}