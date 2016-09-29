using System;
using System.Configuration;
using System.Text;
using Newtonsoft.Json.Linq;
using Npgsql;
using WebApiBia.Common;
using WebApiBia.Data.Postgres.Mapper;

namespace WebApiBia.Data.Postgres.Clients
{
    public class ReportPropertiesClientPq 
    {

        private readonly ClusterLookUp _clusterLooup = new ClusterLookUp();
        private readonly RecordIdMapper _idMapper = new RecordIdMapper();
        private readonly RecordIdUtil _recordIdUtil = new RecordIdUtil();

        public string Get(int clusterId, int recordId, int clusterowner, int contentTemplateOwnerRecordId)
        {

            string cluster = _clusterLooup.GetClusterNameById(clusterId);
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
                con.Open();

                    StringBuilder directClusterQuery = new StringBuilder();
                    directClusterQuery.Append("SELECT " + cluster + "_id ," + " json_data FROM " + schema + "." + cluster);
                    directClusterQuery.Append(" WHERE parent = " + recordId + " AND deleted = false");
                    directClusterQuery.Append(" ORDER BY vertex_order ASC");
                    using (NpgsqlCommand cmd = new NpgsqlCommand(directClusterQuery.ToString(), con))
                    {
                        using (NpgsqlDataReader rdr = cmd.ExecuteReader())
                        {
                            while (rdr.Read())
                            {
                                int id = rdr.GetInt32(0);
                                string json = rdr.GetString(1);
                                _idMapper.AddObjectToArray(id, json, valuesArray);
                            }
                        }
                    }

                    DecorateObjectWithOverride(valuesArray, con, contentTemplateOwnerRecordId);
            }
         

            return resultJsonJObject.ToString();
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