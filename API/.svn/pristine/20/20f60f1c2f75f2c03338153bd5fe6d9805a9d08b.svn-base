using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.Entity;
using System.Linq;
using System.Text;
using Newtonsoft.Json.Linq;
using Npgsql;
using WebApiBia.Common;
using WebApiBia.Data.Entities.Bia;
using WebApiBia.Data.Postgres.Mapper;

namespace WebApiBia.Data.Postgres.GenericQueries
{
    class GenericQueriesPg
    {
        private readonly RecordIdUtil  _recordIdUtil = new RecordIdUtil();
        private readonly ClusterLookUp _clusterLooup = new ClusterLookUp();
        public int GetMaxOrder(NpgsqlConnection con, string cluster, string schema, int recordId, int clusterId)
        {
            int maxOrder = 0;
            StringBuilder lastInsertedStageTagQuery = new StringBuilder();
            lastInsertedStageTagQuery.Append("SELECT vertex_order FROM " + schema + "." + cluster);
            lastInsertedStageTagQuery.Append(" WHERE parent = " + recordId + " AND cluster = " + clusterId + " AND deleted = false");
            lastInsertedStageTagQuery.Append(" ORDER BY vertex_order DESC LIMIT 1");
            using (NpgsqlCommand cmd = new NpgsqlCommand(lastInsertedStageTagQuery.ToString(), con))
            {
                using (NpgsqlDataReader rdr = cmd.ExecuteReader())
                {
                    while (rdr.Read())
                    {
                        maxOrder = rdr.GetInt32(0);
                    }
                }
            }
            return maxOrder;
        }

        public void ReoderTree(JArray jarray)
        {
            string constr = ConfigurationManager.AppSettings["postgresconnectionstring"];
            using (NpgsqlConnection con = new NpgsqlConnection(constr))
            {
                con.Open();
                foreach (var obj in jarray)
                {
                    int clusterId = _recordIdUtil.GetClusterIdFromFullId(obj["rid"].ToString());
                    int recordId = _recordIdUtil.GetRecordIdFromFullId(obj["rid"].ToString());
                    int order = Convert.ToInt32(obj["order"].ToString());

                    string clusterName = _clusterLooup.GetClusterNameById(clusterId);
                    string schema = _clusterLooup.GetSchemaName();

                    StringBuilder updateVertexProperty = new StringBuilder();

                    updateVertexProperty.Append("UPDATE " + schema + "." + clusterName + " SET vertex_order = " + ++order);
                    updateVertexProperty.Append(" WHERE " + clusterName + "_id = " + recordId + " AND cluster = " + clusterId);

                    using (NpgsqlCommand cmd = new NpgsqlCommand(updateVertexProperty.ToString(), con))
                    {
                        cmd.ExecuteNonQuery();
                    }
                }
            }
        }



        public JObject GetReportMenu()
        {
            string constr = ConfigurationManager.AppSettings["postgresconnectionstring"];
            using (NpgsqlConnection con = new NpgsqlConnection(constr))
            {
                con.Open();


                    string table = _clusterLooup.GetStaticMenuTable();
                    string schema = _clusterLooup.GetSchemaName();

                    StringBuilder reportMenuQuery = new StringBuilder();

                    reportMenuQuery.Append("SELECT json_data");
                    reportMenuQuery.Append(" FROM " + schema + "." + table);
                    reportMenuQuery.Append(" LIMIT 1");


                    using (NpgsqlCommand cmd = new NpgsqlCommand(reportMenuQuery.ToString(), con))
                    {
                        using (NpgsqlDataReader rdr = cmd.ExecuteReader())
                        {
                            while (rdr.Read())
                            {
                                JObject menu = JObject.Parse(rdr.GetString(0));
                                return menu;
                            }
                        }
                    }
            }
            return new JObject();
        }

        public void AddContentNavigationVertex(int clusterId, int recordId, string vertexLevelJson)
        {
            string clusterName = _clusterLooup.GetClusterNameById(clusterId);
            string schema = _clusterLooup.GetSchemaName();

          
            string constr = ConfigurationManager.AppSettings["postgresconnectionstring"];
            using (NpgsqlConnection con = new NpgsqlConnection(constr))
            {
                con.Open();
                int maxOrder = GetMaxOrder(con, clusterName, schema, recordId, clusterId);
                StringBuilder createVertexLevelQuery = new StringBuilder();
                createVertexLevelQuery.Append("INSERT INTO " + schema + "." + clusterName);
                createVertexLevelQuery.Append(" ( \"parent\", \"json_data\", \"vertex_order\"  ) ");
                createVertexLevelQuery.Append(" VALUES ");
                createVertexLevelQuery.Append(" ( " + recordId + " , \'" + vertexLevelJson + "\' , " + ++maxOrder + " ) ");

                using (NpgsqlCommand cmd = new NpgsqlCommand(createVertexLevelQuery.ToString(), con))
                {
                    cmd.ExecuteNonQuery();
                }
            }
        }

        public string GetFirstChildType(string cluster, string schema, int recordId, int clusterId)
        {
            string childClass = string.Empty;
            StringBuilder lastInsertedStageTagQuery = new StringBuilder();
            lastInsertedStageTagQuery.Append("SELECT json_data FROM " + schema + "." + cluster);
            lastInsertedStageTagQuery.Append(" WHERE parent = " + recordId + " AND cluster = " + clusterId + " AND deleted = false");
            string constr = ConfigurationManager.AppSettings["postgresconnectionstring"];
            using (NpgsqlConnection con = new NpgsqlConnection(constr))
            {
                con.Open();
                using (NpgsqlCommand cmd = new NpgsqlCommand(lastInsertedStageTagQuery.ToString(), con))
                {
                    using (NpgsqlDataReader rdr = cmd.ExecuteReader())
                    {
                        while (rdr.Read())
                        {
                            JObject child = JObject.Parse(rdr.GetString(0));
                            childClass = child["@class"].ToString();
                            break;

                        }
                    }
                }
            }
            return childClass;
        }

        public int LastInsertedVertexContentNavigationId(NpgsqlConnection con)
        {
            int lastInsertedId = -1;
            StringBuilder query = new StringBuilder();
            query.Append("SELECT vertex_content_navigation_id FROM vertex_content_navigation ORDER BY vertex_content_navigation_id DESC LIMIT 1");
            string constr = ConfigurationManager.AppSettings["postgresconnectionstring"];
                using (NpgsqlCommand cmd = new NpgsqlCommand(query.ToString(), con))
                {
                    using (NpgsqlDataReader rdr = cmd.ExecuteReader())
                    {
                        while (rdr.Read())
                        {
                            lastInsertedId = rdr.GetInt32(0);
                        }
                    }
                }
            
            return lastInsertedId;
        }

    }
}
