using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Text;
using Newtonsoft.Json.Linq;

namespace WebApi.Data.MySql.Mapper
{
    class RecordIdMapper
    {
        public JObject Map(int id, JObject obj)
        {
            obj["@rid"] = String.Format("#{0}:{1}", obj["cluster"], id);
            return obj;
        }
    }
}
