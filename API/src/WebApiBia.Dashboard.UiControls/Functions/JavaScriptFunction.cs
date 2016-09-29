using Newtonsoft.Json;

namespace WebApiBia.Dashboard.UiControls.Functions
{
    public abstract class JavaScriptFunction
    {
        [JsonProperty(PropertyName = "fname")]
        public string Fname = "show";

        [JsonProperty(PropertyName = "parameters")]
        public string[] Parameters = { "me", "item", "panel" };

        [JsonProperty(PropertyName = "body")]
        public string Body = " panel.setHtml('And I say....: $' + item.record.get('left'));";
    }
}

