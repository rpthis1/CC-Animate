using Newtonsoft.Json;

namespace WebApiBia.Dashboard.UiControls.Chart
{
    public class Legend
    {
        [JsonProperty(PropertyName = "docked")]
        public string Docked = "left";

        //[JsonProperty(PropertyName = "preserveScrollOnReload")] 
        //public bool PreserveScrollOnReload = true;

        //[JsonProperty(PropertyName = "preserveScrollOnRefresh")]
        //public bool PreserveScrollOnRefresh = true;


        //[JsonProperty(PropertyName = "height")] 
        //public int Height = 100;


        [JsonProperty(PropertyName = "scrollable")]
        public bool Scrollable = true;
        //[JsonProperty(PropertyName = "resizable")]
        //public bool Resizable = true;

        [JsonProperty(PropertyName = "padding")]
        public string Padding = "0 0 0 0";

    }
}