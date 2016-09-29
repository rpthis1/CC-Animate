using System;
using System.Configuration;
using System.Text;
using Newtonsoft.Json.Linq;
using Npgsql;
using WebApiBia.Data.Postgres.Mapper;

namespace WebApiBia.Data.Postgres.Clients
{
    public class GenericTreeClientPq 
    {
        private readonly ClusterLookUp _clusterLooup = new ClusterLookUp();
        private readonly RecordIdMapper _idMapper = new RecordIdMapper();
        public string Get(object type)
        {

           string cluster = _clusterLooup.MapClassToCluster(type.GetType().Name);
           string schema = _clusterLooup.GetSchemaName();
           JObject resultJsonJObject = new JObject();
           JArray resultJsonArray = new JArray();
           resultJsonJObject["result"] = resultJsonArray;

           string constr = ConfigurationManager.AppSettings["postgresconnectionstring"];
           using (NpgsqlConnection con = new NpgsqlConnection(constr))
           {
               con.Open();

               StringBuilder clusterIdLookByReferenceQuery = new StringBuilder();
               clusterIdLookByReferenceQuery.Append("SELECT " + cluster + "_id , json_data");
               clusterIdLookByReferenceQuery.Append(" FROM " + schema + "." + cluster);
               clusterIdLookByReferenceQuery.Append(" WHERE parent  IS NULL");

               using (NpgsqlCommand cmd = new NpgsqlCommand(clusterIdLookByReferenceQuery.ToString(), con))
               {
                   using (NpgsqlDataReader rdr = cmd.ExecuteReader())
                   {
                       while (rdr.Read())
                       {
                           int id = rdr.GetInt32(0);
                           string json = rdr.GetString(1);
                           JObject jObject = JObject.Parse(json);
                           _idMapper.Map(id, jObject);
                           resultJsonArray.Add(jObject);
                       }
                   }
               }

           }

           return resultJsonJObject.ToString();
        }

        public string Get(int cluster, int record)
        {
            return string.Empty;
        }
    }
}
