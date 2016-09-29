using System;
using System.Collections.Generic;
using MVC4API.Core.UIControls.Layout.Container;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace WebApiBia.Dashboard.UiControls.Reporting
{
    public class UiTabNavigator :UiComponent
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

        [JsonProperty(PropertyName = "containers")]
        public dynamic Containers;

        public UiTabNavigator()
        {
            Layout = new UiLayoutFit();
            Xtype = "reporting-report-Tab";
            Flex =  1;
        }
    }
}