using System;
using System.Configuration;
using System.Text;
using Newtonsoft.Json.Linq;
using Npgsql;
using WebApiBia.Common;
using WebApiBia.Data.Entities.Bia;
using WebApiBia.Data.Postgres.GenericQueries;
using WebApiBia.Data.Postgres.Mapper;

namespace WebApiBia.Data.Postgres.Clients
{
    public class ContentTreeTemplateOwnerClientPq 
    {

        private readonly ClusterLookUp _clusterLooup = new ClusterLookUp();
        private readonly RecordIdMapper _idMapper = new RecordIdMapper();
        private readonly GenericQueriesPg _genericQueriesPg  = new GenericQueriesPg();
        private readonly RecordIdUtil _recordIdUtil = new RecordIdUtil();
        public string Get(int clusterId, int record, int clustetOwner, int recordOwner )
        {
            JObject resultJsonJObject = new JObject();
            JArray resultJsonArray = new JArray();
            JArray valuesArray = new JArray();
            JObject valueObject = new JObject();

            resultJsonJObject["result"] = resultJsonArray;
            valueObject["value"] = valuesArray;
            resultJsonArray.Add(valueObject);

            JObject reportMenu = _genericQueriesPg.GetReportMenu();

            if (_clusterLooup.IsClusterLookupId(clusterId))
            {
                GetContentTreeByTemplateOwnerBy(clusterId, record, clustetOwner, recordOwner, valuesArray, reportMenu);
            }
            else
            {
                GetDirectContentTree(clusterId, record, clustetOwner, recordOwner, valuesArray, reportMenu);

            }


                return resultJsonJObject.ToString();
        }

        private void GetDirectContentTree(int clusterId, int contenRecordId, int clustetOwner, int contentTemplateOwnerRecordId, JArray valuesArray,  JObject reportMenu)

        {
            string cluster = _clusterLooup.GetClusterNameById(clusterId);
            string schema = _clusterLooup.GetSchemaName();

            string constr = ConfigurationManager.AppSettings["postgresconnectionstring"];
            using (NpgsqlConnection con = new NpgsqlConnection(constr))
            {

                con.Open();

                StringBuilder directClusterQuery = new StringBuilder();
                directClusterQuery.Append("SELECT " + cluster + "_id ," + " json_data ");
                directClusterQuery.Append("FROM " + schema + "." + cluster);
                directClusterQuery.Append(" WHERE parent = " + contenRecordId + " AND deleted = false");
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
                            obj["classMenu"] = reportMenu;

                            valuesArray.Add(obj);

                        }
                    }
                }

                DecorateObjectWithOverride(valuesArray, con, contentTemplateOwnerRecordId);
            }

        }

        private void GetContentTreeByTemplateOwnerBy(int clusterId, int record, int clustetOwner, int recordOwner, JArray valuesArray, JObject reportMenu)
        {
            string constr = ConfigurationManager.AppSettings["postgresconnectionstring"];
            using (NpgsqlConnection con = new NpgsqlConnection(constr))
            {
                con.Open();
    

                    StringBuilder directClusterQuery = new StringBuilder();
                    directClusterQuery.Append("SELECT lookup_template_owner.lookup_template_owner_id, vertex_content_navigation.json_data, vertex_content_navigation.vertex_content_navigation_id, vertex_content_navigation.cluster");
                    directClusterQuery.Append(" FROM lookup_template_owner, vertex_content_navigation");
                    directClusterQuery.Append(" WHERE lookup_template_owner.vertex_content_navigation_ref_id =  vertex_content_navigation.vertex_content_navigation_id");
                    directClusterQuery.Append(" AND lookup_template_owner.lookup_template_owner_id = " + record);
                    directClusterQuery.Append(" AND lookup_template_owner.deleted =  false ");

                    using (NpgsqlCommand cmd = new NpgsqlCommand(directClusterQuery.ToString(), con))
                    {
                        using (NpgsqlDataReader rdr = cmd.ExecuteReader())
                        {
                            while (rdr.Read())
                            {
                                int contentNavigationId = rdr.GetInt32(2);
                                JObject obj = JObject.Parse(rdr.GetString(1));
                                obj["@rid"] = string.Format("#{0}:{1}", rdr.GetInt32(3), contentNavigationId);
                                valuesArray.Add(obj);
                            }
                        }
                    }
            }

        }


        private void DecorateObjectWithOverride(JArray array, NpgsqlConnection con, int contentTemplateOwnerRecordId)
        {

                foreach (var obj in array)
                {

                    StringBuilder directClusterQuery = new StringBuilder();
                    directClusterQuery.Append("SELECT json_data");
                    directClusterQuery.Append(" FROM override");
                    directClusterQuery.Append(" WHERE lookup_template_owner_ref_id = " + contentTemplateOwnerRecordId);
                    directClusterQuery.Append(" AND vertex_content_navigation_ref_id = " + _recordIdUtil.GetRecordIdFromFullId(obj["@rid"].ToString()));

                    using (NpgsqlCommand cmd = new NpgsqlCommand(directClusterQuery.ToString(), con))
                    {
                        using (NpgsqlDataReader rdr = cmd.ExecuteReader())
                        {
                            while (rdr.Read())
                            {
                                obj["override"] = JObject.Parse(rdr.GetString(0));
                            }
                        }
                    }
                }
        }


    }
}