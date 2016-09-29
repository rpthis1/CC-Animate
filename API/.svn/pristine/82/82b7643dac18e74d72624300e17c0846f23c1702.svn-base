using System.Collections.Generic;
using Newtonsoft.Json;

namespace WebApiBia.Dashboard.UiControls
{
    public class UiButton : UiComponent
    {
        private List<UiComponent> _childComponents = new List<UiComponent>();


        [JsonProperty(PropertyName = "map")]
        public string Map { get; set; }

        [JsonProperty(PropertyName = "pressed")]
        public bool Pressed { get; set; }

        [JsonProperty(PropertyName = "glyph")]
        public int Glyph { get; set; }

        [JsonProperty(PropertyName = "text")]
        public string Text { get; set; }

        [JsonProperty(PropertyName = "formFactor")]
        public string FormFactor { get; set; }

        [JsonProperty(PropertyName = "dates")]
        public string Dates { get; set; }

        [JsonProperty(PropertyName = "type")]
        public string Type { get; set; }

        [JsonProperty(PropertyName = "childComponents")]
        public List<UiComponent> ChildComponents
        {
            get
            {
                return _childComponents;
            }

            set
            {
                _childComponents = value;
            }
        }



        public UiButton()
        {
            this.Xtype = "com-ibis-Button";

        }


        public UiButton(string formFactor)
            : base()
        {
            this.FormFactor = formFactor;
        }

        public void ProcessText(string value)
        {
            if (string.IsNullOrEmpty(FormFactor))
            {
                Text = value;
            }
            else if (FormFactor.Equals(UiFormFactorType.Mobile))
            {
                Text = value;
            }
            else if (FormFactor.Equals(UiFormFactorType.Desktop))
            {
                Tooltip = value;
                Glyph = 72;
            }

        }
        public void ProcessDefault(string value)
        {
            if (string.IsNullOrEmpty(FormFactor))
            {
                //text = value;
            }
            else if (FormFactor.Equals(UiFormFactorType.Desktop))
            {
                Text = value;
            }

        }
    }
}