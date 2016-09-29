using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.Common;
using System.Linq;
using System.Text;
using MySql.Data.MySqlClient;
using Newtonsoft.Json.Linq;
using WebApi.Data.MySql.Mapper;

namespace WebApi.Data.MySql.Clients
{
    sealed class ProjectsTreeClientMySql
    {

       private readonly ClusterLookUp _clusterLooup = new ClusterLookUp();
       private readonly RecordIdMapper _idMapper = new RecordIdMapper();
       public string Get(int clusterId, int record)
        {
           string cluster = _clusterLooup.GetVertexProjectNavigationCluster();
           string in_cluster = _clusterLooup.MapInReferenceCluster(cluster);
           JObject resultJsonJObject = new JObject();
           JArray resultJsonArray = new JArray();
           resultJsonJObject["result"] = resultJsonArray;

           string constr = ConfigurationManager.AppSettings["mysqlconnectionstring"];
           using (MySqlConnection con = new MySqlConnection(constr))
           {
               Boolean isFoundFromReference = false;
               con.Open();


               StringBuilder clusterIdLookByReferenceQuery = new StringBuilder();
               clusterIdLookByReferenceQuery.Append(" (SELECT " + cluster + "_id FROM reporting." + cluster);
               clusterIdLookByReferenceQuery.Append(" WHERE " + in_cluster + "_ref_id =" + record  + " )");


               StringBuilder clusterByReferenceyQuery = new StringBuilder();
               clusterByReferenceyQuery.Append("SELECT " + cluster + "_id ," + " json_data FROM reporting." + cluster);
               clusterByReferenceyQuery.Append(" WHERE parent = " + clusterIdLookByReferenceQuery.ToString());


               using (MySqlCommand cmd = new MySqlCommand(clusterByReferenceyQuery.ToString(), con))
               {
                   using (MySqlDataReader rdr = cmd.ExecuteReader())
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
                   directClusterQuery.Append("SELECT " + cluster + "_id ," + " json_data FROM reporting." + cluster);
                   directClusterQuery.Append(" WHERE parent = " + record);
                   using (MySqlCommand cmd = new MySqlCommand(directClusterQuery.ToString(), con))
                   {
                       using (MySqlDataReader rdr = cmd.ExecuteReader())
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
