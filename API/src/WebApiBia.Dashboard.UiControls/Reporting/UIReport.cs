using MVC4API.Core.UIControls.Layout.Container;
using Newtonsoft.Json;

namespace WebApiBia.Dashboard.UiControls.Reporting
{
    public class UiReport :UiComponent
    {
        [JsonProperty(PropertyName = "rid")]
        public string Rid { get; set; }

        [JsonProperty(PropertyName = "templateOwnerRid")]
        public string TemplateOwnerRid { get; set; }

        [JsonProperty(PropertyName = "title")]
        public string Title { get; set; }

        [JsonProperty(PropertyName = "biaIndex")]
        public int BiaIndex { get; set; }

        [JsonProperty(PropertyName = "biaContainer")]
        public string BiaContainer { get; set; }

        [JsonProperty(PropertyName = "layout")]
        public UiLayoutFit Layout { get; set; } 

        public UiReport()
        {
          //  Layout = new UiLayoutFit();
            Xtype = "reporting-report-Report";
            Flex =  1;
        }
    }
}