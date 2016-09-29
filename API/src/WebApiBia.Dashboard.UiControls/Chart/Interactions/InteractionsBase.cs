using System.Collections.Generic;
using Newtonsoft.Json;
using WebApiBia.Dashboard.UiControls.Functions;

namespace WebApiBia.Dashboard.UiControls.Chart.Interactions
{
    public class InteractionsBase
    {
         [JsonProperty(PropertyName = "type")]
        public string Type = null;

         [JsonProperty(PropertyName = "zoomOnPanGesture")]
        public bool ZoomOnPanGesture = false;

         [JsonProperty(PropertyName = "listeners")]
        public List<JavaScriptFunction> Listeners = new List<JavaScriptFunction>();
    }
}