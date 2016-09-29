using System;
using System.Configuration;
using System.Text;
using Newtonsoft.Json.Linq;
using Npgsql;
using WebApiBia.Data.Postgres.Mapper;

namespace WebApiBia.Data.Postgres.Clients
{
   sealed class VerticesClientPg
    {

       private readonly ClusterLookUp _vertexLooup = new ClusterLookUp();
       private readonly RecordIdMapper _idMapper = new RecordIdMapper();
        public string Get(Object type)
        {
           string cluster = _vertexLooup.MapClassToCluster(type.GetType().Name);
           string schema = _vertexLooup.GetSchemaName();
           JObject resultJsonJObject = new JObject();
           JArray resultJsonArray = new JArray();
           resultJsonJObject["result"] = resultJsonArray;

           string constr = ConfigurationManager.AppSettings["postgresconnectionstring"];

           using (NpgsqlConnection con = new NpgsqlConnection(constr))
           {
               con.Open();

               StringBuilder selectQuery = new StringBuilder("SELECT " + cluster + "_id ," + " json_data from " + schema + "." + cluster);
               selectQuery.Append(" WHERE deleted = false");

               using (NpgsqlCommand cmd = new NpgsqlCommand(selectQuery.ToString(), con))
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

        public string Post(Object type)
        {
            string result = string.Empty;

            return result;

        }

        public string Put(int cluster, int record, Object type)
        {
            string result = string.Empty;

            return result;

        }

        public string Delete(int cluster, int record)
        {
            string result = string.Empty;

            return result;

        }

    }
}
