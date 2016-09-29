using System;
using System.Configuration;
using System.Data;
using System.Text;
using Newtonsoft.Json.Linq;
using Npgsql;
using WebApiBia.Common;
using WebApiBia.Data.Entities.Bia;
using WebApiBia.Data.Postgres.GenericQueries;
using WebApiBia.Data.Postgres.Mapper;

namespace WebApiBia.Data.Postgres.Clients
{
    public class ExportTemplateClientPq
    {
        private readonly RecordIdMapper _idMapper = new RecordIdMapper();
        private readonly RecordIdUtil _recordIdUtil = new RecordIdUtil();
        private readonly ClusterLookUp _clusterLooup = new ClusterLookUp();
        private GenericQueriesPg _genericQueriesPg = new GenericQueriesPg();
        private int _templatesRootId;

        public string Get(int cluster, int record)
        {
            JObject resultJsonJObject = new JObject();
            JArray resultJsonArray = new JArray();
            JArray valuesArray = new JArray();
            JObject valueObject = new JObject();

            resultJsonJObject["result"] = resultJsonArray;
            valueObject["value"] = valuesArray;
            resultJsonArray.Add(valueObject);

            FetchParentObject(valuesArray, record);

            return resultJsonJObject.ToString();
        }

        public string Post(JObject obj)
        {
            GenericTreeClientPq client = new GenericTreeClientPq();
            string result = client.Get(new BiaVTemplateTree());
            JObject templateRootObj = JObject.Parse(result);
            string templatesRootId = templateRootObj["result"][0]["@rid"].ToString();

            _templatesRootId = Convert.ToInt32(templatesRootId.Split(':')[1].ToString());

           
            string constr = ConfigurationManager.AppSettings["postgresconnectionstring"];
            using (NpgsqlConnection con = new NpgsqlConnection(constr))
            {
                con.Open();
                NpgsqlTransaction transaction = con.BeginTransaction(IsolationLevel.ReadCommitted);

                IterateContent(obj["result"][0]["value"] as JArray, con, true);

                transaction.Commit();

            }
            return "";
        }

        private void IterateContent(JArray arr, NpgsqlConnection con, bool firstRun)
        {
            int? parent;
            int order = 1;
            parent = GetLastInsertedContentChild(con, firstRun);
            foreach (var jToken in arr)
            {
                var obj = (JObject) jToken;               
                AddContentChild(obj, con, parent, order);

                if (((JArray)obj["children"]).Count > 0)
                {
                    IterateContent(((JArray)obj["children"]), con,false);
                }

                order++;
            }

        }

        private void AddContentChild(JObject obj, NpgsqlConnection con, int? parent,int order)
        {
            string clusterName = _clusterLooup.GetClusterNameById(4);
            string schema = _clusterLooup.GetSchemaName();


            string objString = obj.ToString();
            JObject objWithNoChildren = JObject.Parse(objString);

            objWithNoChildren.Property("children").Remove();
            objWithNoChildren.Property("@rid").Remove();
            StringBuilder createVertexLevelQuery = new StringBuilder();
                createVertexLevelQuery.Append("INSERT INTO " + schema + "." + clusterName);
                createVertexLevelQuery.Append(" ( \"parent\", \"json_data\", \"vertex_order\"  ) ");
                createVertexLevelQuery.Append(" VALUES ");
                createVertexLevelQuery.Append(" ( " + parent + " , \'" + objWithNoChildren + "\' , " + order + " ) ");

                using (NpgsqlCommand cmd = new NpgsqlCommand(createVertexLevelQuery.ToString(), con))
                {
                    cmd.ExecuteNonQuery();
                }
            
        }

        private int GetLastInsertedContentChild(NpgsqlConnection con, bool firstRun)
        {
            if (firstRun)
            {
                return _templatesRootId;
            }
            return _genericQueriesPg.LastInsertedVertexContentNavigationId(con);
        }

        private void FetchParentObject(JArray valuesArray, int record)
        {
            string constr = ConfigurationManager.AppSettings["postgresconnectionstring"];
            using (NpgsqlConnection con = new NpgsqlConnection(constr))
            {

                con.Open();

                StringBuilder directClusterQuery = new StringBuilder();
                directClusterQuery.Append("SELECT vertex_content_navigation_id ," + " json_data ");
                directClusterQuery.Append("FROM public.vertex_content_navigation");
                directClusterQuery.Append(" WHERE vertex_content_navigation_id = " + record + " AND deleted = false");
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
                            obj["children"] = new JArray();
                            valuesArray.Add(obj);

                        }
                    }
                }
                FetchChildrenRecursively(valuesArray, con);
            }

        }

        private void FetchChildrenRecursively(JArray valuesArray, NpgsqlConnection con)
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

                if (((JArray)obj["children"]).Count > 0)
                {
                    FetchChildrenRecursively(((JArray)obj["children"]), con);
                }
            }
        }


    }
}
