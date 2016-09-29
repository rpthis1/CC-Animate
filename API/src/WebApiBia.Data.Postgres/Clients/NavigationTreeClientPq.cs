using System;
using System.Configuration;
using System.Net;
using System.Text;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json.Schema;
using Npgsql;
using WebApiBia.Common;
using WebApiBia.Data.Postgres.Mapper;

namespace WebApiBia.Data.Postgres.Clients
{
    public class NavigationTreeClientPq
    {
        private readonly ClusterLookUp _clusterLooup = new ClusterLookUp();
        private readonly RecordIdMapper _idMapper = new RecordIdMapper();
        private readonly RecordIdUtil _recordIdUtil = new RecordIdUtil();
 
        public string Get(object type)
        {
            return null;
        }

        public string Get(int clusterId, int record)
        {
           string cluster = _clusterLooup.GetVertexLevelNavigationCluster();
           string incomingCluster = _clusterLooup.MapIncomingReferenceCluster(cluster);
           string schema = _clusterLooup.GetSchemaName();
         
            JObject resultJsonJObject = new JObject();
           JArray resultJsonArray = new JArray();
           JArray valuesArray = new JArray();
           JObject valueObject = new JObject();

           resultJsonJObject["result"] = resultJsonArray;
           valueObject["value"] = valuesArray;
           resultJsonArray.Add(valueObject);

           string constr = ConfigurationManager.AppSettings["postgresconnectionstring"];
           using (NpgsqlConnection con = new NpgsqlConnection(constr))
           {
               bool isFoundFromReference = false;
               con.Open();


               StringBuilder clusterIdLookByReferenceQuery = new StringBuilder();
               clusterIdLookByReferenceQuery.Append(" (SELECT " + cluster + "_id FROM "+ schema + "." + cluster);
               clusterIdLookByReferenceQuery.Append(" WHERE " + incomingCluster + "_ref_id =" + record + " AND cluster = " + clusterId + " )");


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
                           JObject obj = _idMapper.CreateObject(id, json);
                           valuesArray.Add(obj);
                       }
                   }
               }

               if (!isFoundFromReference)
               {
                   StringBuilder directClusterQuery = new StringBuilder();
                   directClusterQuery.Append("SELECT " + cluster + "_id ," + " json_data FROM " + schema + "." + cluster);
                   directClusterQuery.Append(" WHERE parent = " + record );
                   directClusterQuery.Append(" AND deleted = false");
                   directClusterQuery.Append(" AND cluster = " + clusterId);
                   directClusterQuery.Append(" ORDER BY vertex_order ASC");
                   using (NpgsqlCommand cmd = new NpgsqlCommand(directClusterQuery.ToString(), con))
                   {
                       using (NpgsqlDataReader rdr = cmd.ExecuteReader())
                       {
                           while (rdr.Read())
                           {
                               int id = rdr.GetInt32(0);
                               string json = rdr.GetString(1);
                               JObject obj = _idMapper.CreateObject(id, json);
                               obj["icon"] = "resources/images/vertex/templateMissing.png";
                               valuesArray.Add(obj);
                           }
                       }
                   }

               }
           }
            DecorateObjectWithTemplate(valuesArray);

           return resultJsonJObject.ToString();
        
        }


        private void DecorateObjectWithTemplate( JArray array)
        {
                string constr = ConfigurationManager.AppSettings["postgresconnectionstring"];
                using (NpgsqlConnection con = new NpgsqlConnection(constr))
                {
                    con.Open();
                    foreach (var obj in array)
                    {

                        StringBuilder directClusterQuery = new StringBuilder();
                        directClusterQuery.Append("SELECT lookup_template_owner.lookup_template_owner_id, vertex_content_navigation.json_data");
                        directClusterQuery.Append(" FROM lookup_template_owner, vertex_content_navigation");
                        directClusterQuery.Append(" WHERE lookup_template_owner.vertex_content_navigation_ref_id =  vertex_content_navigation.vertex_content_navigation_id");
                        directClusterQuery.Append(" AND lookup_template_owner.vertex_level_navigation_ref_id = " + _recordIdUtil.GetRecordIdFromPartialId(obj["@rid"].ToString()));
                        directClusterQuery.Append(" AND lookup_template_owner.deleted =  false ");

                    using (NpgsqlCommand cmd = new NpgsqlCommand(directClusterQuery.ToString(), con))
                    {
                        using (NpgsqlDataReader rdr = cmd.ExecuteReader())
                        {
                            while (rdr.Read())
                            {
                                int templateOwnderId= rdr.GetInt32(0);
                                obj["templateOwnerRid"] = string.Format("#{0}:{1}", 0, templateOwnderId);
                                obj["template"] = JObject.Parse(rdr.GetString(1));
                                obj["icon"] = "resources/images/vertex/templateInNavigation.png";
                            }
                        }
                    }

                    }
                }
        }

    }
}
