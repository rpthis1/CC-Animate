using System.Collections.Generic;
using Newtonsoft.Json;
using WebApiBia.Dashboard.UiControls.Layout.Container;

namespace WebApiBia.Dashboard.UiControls.container
{
    public class UiContainer:UiComponent
    {
         [JsonProperty(PropertyName = "layout")]
        public UiLayoutBox Layout { get; set; }

         [JsonProperty(PropertyName = "items")]
        public List<UiComponent> Items { get; set; } 

        public UiContainer()
        {
            Items = new List<UiComponent>();
            Xtype = "container";
            Flex = 1;
        }
    }
}