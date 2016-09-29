using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WebApiBia.Dashboard.Core.Dto.Report;
using WebApiBia.Dashboard.UiControls.Chart;

namespace WebApiBia.Dashboard.Core.Dto.Parent
{
    public interface IParent
    {
        [JsonProperty(PropertyName = "chart")]
        GenericChart Chart { set; get; }

        [JsonProperty(PropertyName = "values")]
        List<dynamic> Values { get; set; }

        [JsonProperty(PropertyName = "allFields")]
        Dictionary<string, string> AllFields { set; get; }

        [JsonProperty(PropertyName = "fields")]
        List<string> Fields { set; get; }

        [JsonProperty(PropertyName = "continuousCommissioningOptions")]
        JObject ContinuousCommissioningOptions { get; set; }

        [JsonProperty(PropertyName = "mv")]
        JObject Mv { get; set; }

        void Decorate(ReportConfig config);
    }
}
