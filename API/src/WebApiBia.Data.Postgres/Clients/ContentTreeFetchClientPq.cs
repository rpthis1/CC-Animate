using System.Configuration;
using System.Text;
using Newtonsoft.Json.Linq;
using Npgsql;
using WebApiBia.Common;
using WebApiBia.Data.Postgres.Mapper;

namespace WebApiBia.Data.Postgres.Clients
{
    public class ContentTreeFetchClientPq 
    {
        private readonly RecordIdMapper _idMapper = new RecordIdMapper();
        private readonly RecordIdUtil _recordIdUtil = new RecordIdUtil();

        public string Get(int cluster, int record, int clusterOwner, int templateOwnerId)
        {
            JObject resultJsonJObject = new JObject();
            JArray resultJsonArray = new JArray();
            JArray valuesArray = new JArray();
            JObject valueObject = new JObject();

            resultJsonJObject["result"] = resultJsonArray;
            valueObject["value"] = valuesArray;
            resultJsonArray.Add(valueObject);

            FetchParentObject(valuesArray, templateOwnerId);

            return resultJsonJObject.ToString();
        }

        private void FetchParentObject(JArray valuesArray, int templateOwnerId)
        {
            string constr = ConfigurationManager.AppSettings["postgresconnectionstring"];
            using (NpgsqlConnection con = new NpgsqlConnection(constr))
            {

                con.Open();

                StringBuilder directClusterQuery = new StringBuilder();



                directClusterQuery.Append(" SELECT  vertex_content_navigation.vertex_content_navigation_id,  vertex_content_navigation.json_data ");
                directClusterQuery.Append(" FROM vertex_content_navigation, lookup_template_owner");
                directClusterQuery.Append(" WHERE lookup_template_owner.lookup_template_owner_id = " + templateOwnerId);
                directClusterQuery.Append(" AND lookup_template_owner.vertex_content_navigation_ref_id = vertex_content_navigation.vertex_content_navigation_id");
                using (NpgsqlCommand cmd = new NpgsqlCommand(directClusterQuery.ToString(), con))
                {
                    using (NpgsqlDataReader rdr = cmd.ExecuteReader())
                    {
                        while (rdr.Read())
                        {
                            int id = rdr.GetInt32(0);
                            string json = rdr.GetString(1);
                            JObject obj = _idMapper.CreateObject(id, json);
                            obj["children"] = new JArray();
                            valuesArray.Add(obj);

                        }
                    }
                }
                FetchChildrenRecursively(valuesArray, con, templateOwnerId);
            }

        }

        private void FetchChildrenRecursively(JArray valuesArray, NpgsqlConnection con, int templateOwnerId)
        {
            foreach (var obj in valuesArray)
            {
                StringBuilder directClusterQuery = new StringBuilder();
                directClusterQuery.Append("SELECT vertex_content_navigation_id ," + " json_data ");
                directClusterQuery.Append("FROM public.vertex_content_navigation");
                directClusterQuery.Append(" WHERE parent = " + _recordIdUtil.GetRecordIdFromFullId(obj["@rid"].ToString()) + " AND deleted = false");
                directClusterQuery.Append(" ORDER BY vertex_order ASC");

                using (NpgsqlCommand cmd = new NpgsqlCommand(directClusterQuery.ToString(), con))
                {
                    using (NpgsqlDataReader rdr = cmd.ExecuteReader())
                    {
                        while (rdr.Read())
                        {
                            int id = rdr.GetInt32(0);
                            string json = rdr.GetString(1);
                            JObject childObject = _idMapper.CreateObject(id, json);
                            childObject["children"] = new JArray();
                            ((JArray)obj["children"]).Add(childObject);
                        }
                    }
                }

                DecorateObjectWithOverride(valuesArray, con, templateOwnerId);

                if (((JArray)obj["children"]).Count > 0)
                {
                    FetchChildrenRecursively(((JArray)obj["children"]), con,templateOwnerId);
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
