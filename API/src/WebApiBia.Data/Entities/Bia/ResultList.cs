using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Newtonsoft.Json;

namespace WebApiBia.Data.Entities.Bia
{
    public class ResultList
    {
        public ResultList()
        {
             Result = new List<BiaVBase>();
        }

        [JsonProperty(PropertyName = "result")]
        public List<BiaVBase> Result { get; set; } 
    }
}
