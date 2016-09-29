using System.Configuration;
using System.Text;
using Newtonsoft.Json.Linq;
using Npgsql;
using WebApiBia.Common.Json;
using WebApiBia.Data.Entities.Bia;
using WebApiBia.Data.Mapper;
using WebApiBia.Data.Postgres.Mapper;

namespace WebApiBia.Data.Postgres.Clients
{
    class ProjectsTreeStageTagClientPg
    {
        private readonly ClusterLookUp _clusterLooup = new ClusterLookUp();
        private readonly AutoMapper _mapper = new AutoMapper();
        private readonly JsonHelper _json = new JsonHelper();

        public string Post(int clusterId, int recordId, object p)
        {  
           
            string vertexProjectNavigationCluster = _clusterLooup.GetVertexProjectNavigationCluster();
            string vertexLevelNavigationCluster = _clusterLooup.GetVertexLevelNavigationCluster();
            string schema = _clusterLooup.GetSchemaName();
            dynamic clientObject = (JObject)p;
            string label = (string)clientObject["stageTagLabel"];
            dynamic vertex = clientObject.vertex;
            string cls = (string)vertex["Class"];
            string icon = (string)vertex["Icon"];
            BiaVBase treeNodeReferenceVertexChildValue = _mapper.Map(vertex, cls);
            string treeNodeReferenceVertexChildValueJson = treeNodeReferenceVertexChildValue.Serialize();



            string constr = ConfigurationManager.AppSettings["postgresconnectionstring"];
            using (NpgsqlConnection con = new NpgsqlConnection(constr))
            {
                con.Open();

               var insertedStageTagid = AddProjectTreeVertex(con,recordId,label,icon,schema,vertexProjectNavigationCluster);
               var insertedStageTagReferenceToLevelNavigationId = AddVertexLevelNavigationReferenceToStage(con, insertedStageTagid, schema, vertexProjectNavigationCluster, vertexLevelNavigationCluster);
               AddVertexLevelNavigationReferenceChild(con, insertedStageTagReferenceToLevelNavigationId, treeNodeReferenceVertexChildValueJson, schema, vertexLevelNavigationCluster);
  
            }

            JObject result = new JObject();
            result["result"] = new JArray();
            return result.ToString();
        }



        private int AddProjectTreeVertex(NpgsqlConnection con, int recordId, string label, string icon, string schema, string vertexProjectNavigationCluster)
        {
            int insertedStageTagid = -1;
            BiaVBase stageStagVertex = new BiaVBase()
            {
                Cluster = 2,
                Label = label,
                Leaf = "true",
                Class = "BiaVStageTag",
                Icon = icon
            };

            string stageStagVertexJson = _json.Serialize(stageStagVertex);

            StringBuilder createStageTagQuery = new StringBuilder();
            createStageTagQuery.Append("INSERT INTO " + schema + "." + vertexProjectNavigationCluster);
            createStageTagQuery.Append(" ( \"parent\", \"json_data\" ) ");
            createStageTagQuery.Append(" VALUES ");
            createStageTagQuery.Append(" ( " + recordId + " , \'" + stageStagVertexJson + "\' ) ");

            using (NpgsqlCommand cmd = new NpgsqlCommand(createStageTagQuery.ToString(), con))
            {
                cmd.ExecuteNonQuery();
            }

            StringBuilder lastInsertedStageTagQuery = new StringBuilder();
            lastInsertedStageTagQuery.Append("SELECT " + vertexProjectNavigationCluster + "_id FROM " + schema + "." + vertexProjectNavigationCluster + " ORDER BY " + vertexProjectNavigationCluster + "_id DESC LIMIT 1");

            using (NpgsqlCommand cmd = new NpgsqlCommand(lastInsertedStageTagQuery.ToString(), con))
            {
                cmd.ExecuteNonQuery();
                using (NpgsqlDataReader rdr = cmd.ExecuteReader())
                {
                    while (rdr.Read())
                    {
                        insertedStageTagid = rdr.GetInt32(0);
                    }
                }
            }

            return insertedStageTagid;
        }



        private int AddVertexLevelNavigationReferenceToStage(NpgsqlConnection con, int insertedStageTagid, string schema, string vertexProjectNavigationCluster, string vertexLevelNavigationCluster)
        {
            int insertedStageTagReferenceToLevelNavigationId = -1;
            BiaVBase treeNodeReferenceVertex = new BiaVBase()
            {
                Cluster = 3,
                Label = "BiaVStageTagReference",
                Class = "BiaVStageTagReference"
            };

            string treeNodeReferenceVertexJson = _json.Serialize(treeNodeReferenceVertex);

            StringBuilder createVertexLevelNavigationReferenceToStage = new StringBuilder();
            createVertexLevelNavigationReferenceToStage.Append("INSERT INTO " + schema + "." + vertexLevelNavigationCluster);
            createVertexLevelNavigationReferenceToStage.Append(" ( \"" + vertexProjectNavigationCluster + "_ref_id\" , \"json_data\", \"cluster\" ) ");
            createVertexLevelNavigationReferenceToStage.Append(" VALUES ");
            createVertexLevelNavigationReferenceToStage.Append(" ( " + insertedStageTagid + " , \'" + treeNodeReferenceVertexJson + "\' , " + _clusterLooup.GetVertexProjectNavigationClusterId() + " ) ");

            using (NpgsqlCommand cmd = new NpgsqlCommand(createVertexLevelNavigationReferenceToStage.ToString(), con))
            {
                cmd.ExecuteNonQuery();
            }

            StringBuilder lastInsertedLevelNavigationQuery = new StringBuilder();
            lastInsertedLevelNavigationQuery.Append("SELECT " + vertexLevelNavigationCluster + "_id FROM " + schema + "." + vertexLevelNavigationCluster + " ORDER BY " + vertexLevelNavigationCluster + "_id DESC LIMIT 1");

            using (NpgsqlCommand cmd = new NpgsqlCommand(lastInsertedLevelNavigationQuery.ToString(), con))
            {
                cmd.ExecuteNonQuery();
                using (NpgsqlDataReader rdr = cmd.ExecuteReader())
                {
                    while (rdr.Read())
                    {
                        insertedStageTagReferenceToLevelNavigationId = rdr.GetInt32(0);
                    }
                }
            }

            return insertedStageTagReferenceToLevelNavigationId;

        }


        private void AddVertexLevelNavigationReferenceChild(NpgsqlConnection con, int insertedStageTagReferenceToLevelNavigationId, string treeNodeReferenceVertexChildValueJson, string schema, string vertexLevelNavigationCluster)
        {
            BiaVBase treeNodeReferenceVertexChild = new BiaVBase()
            {
                Cluster = 3,
                Label = "BiaVTreenode",
                Class = "BiaVTreeNode",
                Value = JObject.Parse(treeNodeReferenceVertexChildValueJson)
            };

            string treeNodeReferenceVertexChildJson = _json.Serialize(treeNodeReferenceVertexChild);

            StringBuilder createVertexLevelNavigationReferenceChild = new StringBuilder();
            createVertexLevelNavigationReferenceChild.Append("INSERT INTO " + schema + "." + vertexLevelNavigationCluster);
            createVertexLevelNavigationReferenceChild.Append(" ( \"parent\" , \"json_data\"  ) ");
            createVertexLevelNavigationReferenceChild.Append(" VALUES ");
            createVertexLevelNavigationReferenceChild.Append(" ( " + insertedStageTagReferenceToLevelNavigationId + " , \'" + treeNodeReferenceVertexChildJson + "\' ) ");

            using (NpgsqlCommand cmd = new NpgsqlCommand(createVertexLevelNavigationReferenceChild.ToString(), con))
            {
                cmd.ExecuteNonQuery();
            }
        }
    }
}
