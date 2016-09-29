using System;
using System.Configuration;
using System.Text;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json.Serialization;
using Npgsql;
using WebApiBia.Common;
using WebApiBia.Data.Postgres.Mapper;

namespace WebApiBia.Data.Postgres.Clients
{
    public class NavigationTreeFetchClientPq
    {
        private readonly RecordIdMapper _idMapper = new RecordIdMapper();
        private readonly RecordIdUtil _recordIdUtil = new RecordIdUtil();

        private int _levels = 1;
        private int _depth = 0;
        private bool _isFoundFromReference;

        public string Get(int cluster, int navigationRecordId, int clusterOwner, int recordOwner)
        {

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
                FindByReference(con, cluster, navigationRecordId, valuesArray);
            }

            return resultJsonJObject.ToString();
        }

        private void FindByReference(NpgsqlConnection con, int cluster, int navigationRecordId, JArray valuesArray)
        {

            StringBuilder clusterByReferenceyQuery = new StringBuilder();
            clusterByReferenceyQuery.Append("SELECT vertex_level_navigation_id , json_data FROM public.vertex_level_navigation WHERE parent =  ");
            clusterByReferenceyQuery.Append(" (SELECT vertex_level_navigation_id FROM public.vertex_level_navigation WHERE vertex_project_navigation_ref_id = " + navigationRecordId + " AND cluster = " + cluster + " )");
            clusterByReferenceyQuery.Append("  AND deleted = false ORDER BY vertex_order ASC");

            using (NpgsqlCommand cmd = new NpgsqlCommand(clusterByReferenceyQuery.ToString(), con))
            {
                using (NpgsqlDataReader rdr = cmd.ExecuteReader())
                {
                    while (rdr.Read())
                    {
                        _isFoundFromReference = true;
                        int id = rdr.GetInt32(0);
                        string json = rdr.GetString(1);
                        JObject obj = _idMapper.CreateObject(id, json);
                        obj["children"] = new JArray();
                        valuesArray.Add(obj);
                    }
                }
            }

            DecorateObjectWithTemplate(valuesArray, con);

            if (!_isFoundFromReference)
            {
                FetchParentObject(valuesArray, navigationRecordId, con);
            }

        }

        private void FetchParentObject(JArray valuesArray, int navigationRecordId, NpgsqlConnection con)
        {

                   JObject parentObj = new JObject();
                   parentObj["@rid"] = String.Format("#3:{0}", navigationRecordId);
                   parentObj["children"] = new JArray();
                   valuesArray.Add(parentObj);
                   FetchChildrenRecursively(valuesArray, con);
    
        }

        private void FetchChildrenRecursively(JArray valuesArray, NpgsqlConnection con)
        {
            _depth++;
            foreach (var obj in valuesArray)
            {
                StringBuilder directClusterQuery = new StringBuilder();
                directClusterQuery.Append("SELECT vertex_level_navigation_id ," + " json_data ");
                directClusterQuery.Append("FROM public.vertex_level_navigation");
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

                    DecorateObjectWithTemplate(valuesArray, con);

                    if (((JArray)obj["children"]).Count > 0)
                    {
                        if (_depth <= _levels)
                        {
                            FetchChildrenRecursively(((JArray)obj["children"]), con);

                        }
                    }
                }
            }
        }

        private void DecorateObjectWithTemplate(JArray array, NpgsqlConnection con)
        {

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
                            int templateOwnderId = rdr.GetInt32(0);
                            JArray templateOnwerArray = new JArray();
                            templateOnwerArray.Add(string.Format("#{0}:{1}", 0, templateOwnderId));
                            obj["out_BiaETemplateItemToTemplateItem"] = templateOnwerArray;
                        }
                    }
                }

            }

        }
    }
}
