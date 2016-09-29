using System;
using System.Configuration;
using System.Text;
using Newtonsoft.Json.Linq;
using Npgsql;
using WebApiBia.Data.Postgres.Mapper;

namespace WebApiBia.Data.Postgres.Clients
{
    sealed class ProjectsTreeClientPg
    {

       private readonly ClusterLookUp _clusterLooup = new ClusterLookUp();
       private readonly RecordIdMapper _idMapper = new RecordIdMapper();
       public string Get(int clusterId, int record)
        {
           string cluster = _clusterLooup.GetVertexProjectNavigationCluster();
           string incomingCluster = _clusterLooup.MapIncomingReferenceCluster(cluster);
           string schema = _clusterLooup.GetSchemaName();
           JObject resultJsonJObject = new JObject();
           JArray resultJsonArray = new JArray();
           resultJsonJObject["result"] = resultJsonArray;

           string constr = ConfigurationManager.AppSettings["postgresconnectionstring"];
           using (NpgsqlConnection con = new NpgsqlConnection(constr))
           {
               Boolean isFoundFromReference = false;
               con.Open();


               StringBuilder clusterIdLookByReferenceQuery = new StringBuilder();
               clusterIdLookByReferenceQuery.Append(" (SELECT " + cluster + "_id FROM "+ schema + "." + cluster);
               clusterIdLookByReferenceQuery.Append(" WHERE " + incomingCluster + "_ref_id =" + record + " AND cluster = "+ clusterId+" )");


               StringBuilder clusterByReferenceyQuery = new StringBuilder();
               clusterByReferenceyQuery.Append("SELECT " + cluster + "_id ," + " json_data FROM " + schema + "." + cluster);
               clusterByReferenceyQuery.Append(" WHERE parent = " + clusterIdLookByReferenceQuery + " AND deleted = false");
               clusterByReferenceyQuery.Append(" ORDER BY vertex_order ASC");


               using (NpgsqlCommand cmd = new NpgsqlCommand(clusterByReferenceyQuery.ToString(), con))
               {
                   using (NpgsqlDataReader rdr = cmd.ExecuteReader())
                   {
                       while (rdr.Read())
                       {
                           isFoundFromReference = true;
                           int id = rdr.GetInt32(0);
                           string json = rdr.GetString(1);
                           JObject jObject = JObject.Parse(json);
                           _idMapper.Map(id, jObject);
                           resultJsonArray.Add(jObject);
                       }
                   }
               }

               if (!isFoundFromReference)
               {
                   StringBuilder directClusterQuery = new StringBuilder();
                   directClusterQuery.Append("SELECT " + cluster + "_id ," + " json_data FROM " + schema + "." + cluster);
                   directClusterQuery.Append(" WHERE parent = " + record + " AND deleted = false");
                   directClusterQuery.Append(" ORDER BY vertex_order ASC");
                   using (NpgsqlCommand cmd = new NpgsqlCommand(directClusterQuery.ToString(), con))
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
           }

           return resultJsonJObject.ToString();
        }

    }
}
