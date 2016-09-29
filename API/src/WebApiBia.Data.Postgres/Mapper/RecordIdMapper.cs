using System;
using Newtonsoft.Json.Linq;

namespace WebApiBia.Data.Postgres.Mapper
{
    class RecordIdMapper
    {

        public JObject Map(int id, JObject obj)
        {
            obj["@rid"] = String.Format("#{0}:{1}", obj["cluster"], id);
            return obj;
        }

        public void AddObjectToArray(int id, string json, JArray resultJsonArray)
        {
            resultJsonArray.Add(CreateObject(id,json));
        }


        public JObject CreateObject(int id, string json)
        {
            JObject jObject = JObject.Parse(json);
            Map(id, jObject);
            return jObject;
        }
    }
}
