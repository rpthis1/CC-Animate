using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Newtonsoft.Json;

namespace WebApiBia.Data.Entities.Bia
{
    public class BiaVReportPropertyParameterDecorator
    {
        [JsonProperty(PropertyName = "parameterName")]
        public string ParameterName { get; set; }
        [JsonProperty(PropertyName = "parameterValue")]
        public string ParameterValue { get; set; }
        [JsonProperty(PropertyName = "decoratorLabel")]
        public string DecoratorLabel { get; set; }
        [JsonProperty(PropertyName = "hidden")]
        public bool Hidden { get; set; }
        [JsonProperty(PropertyName = "biaEditable")]
        public bool? BiaEditable { get; set; }
        [JsonProperty(PropertyName = "decorators")]
        public List<BiaVReportPropertyParameterDecoratorItem> Decorators { get; set; }

    }
}
