using System;
using System.CodeDom;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Text;
using MySql.Data.MySqlClient;
using Newtonsoft.Json.Linq;
using NpgsqlTypes;
using WebApi.Data.MySql.Mapper;
using WebApiBia.Common.Json;
using WebApiBia.Data.Entities.Bia;
using WebApiBia.Data.Mapper;

namespace WebApi.Data.MySql.Clients
{
    class ProjectsTreeStageTagClientMySql
    {
        private readonly ClusterLookUp _clusterLooup = new ClusterLookUp();
        private readonly RecordIdMapper _idMapper = new RecordIdMapper();
        private readonly AutoMapper _mapper = new AutoMapper();
        private readonly JsonHelper _json = new JsonHelper();

        public string Post(int clusterId, int recordId, object p)
        {  
           
            string vertexProjectNavigationCluster = _clusterLooup.GetVertexProjectNavigationCluster();
            string vertexLevelNavigationCluster = _clusterLooup.GetVertexLevelNavigationCluster();
            string dbName = _clusterLooup.GetDbName();
            dynamic clientObject = (JObject)p;
            string label = (string)clientObject["stageTagLabel"];
            dynamic vertex = clientObject.vertex;
            string cls = (string)vertex["Class"];
            BiaVBase treeNodeReferenceVertexChildValue = _mapper.Map(vertex, cls);
            string treeNodeReferenceVertexChildValueJson = treeNodeReferenceVertexChildValue.Serialize();
      
            

            string constr = ConfigurationManager.AppSettings["mysqlconnectionstring"];
            using (MySqlConnection con = new MySqlConnection(constr))
            {
                con.Open();

                long insertedStageTagid;
                long insertedStageTagReference;

                BiaVBase stageStagVertex = new BiaVBase()
                {
                    Cluster = 2,
                    Label = label,
                    Leaf = "true",
                    Class = "BiaVStageTag"
                };

                string stageStagVertexJson = _json.Serialize(stageStagVertex);

                StringBuilder createStageTagQuery = new StringBuilder();
                createStageTagQuery.Append("INSERT INTO "+dbName+"." + vertexProjectNavigationCluster);
                createStageTagQuery.Append(" (`parent`, `json_data`) ");
                createStageTagQuery.Append(" VALUES ");
                createStageTagQuery.Append(" ( " + recordId + " , \'" + stageStagVertexJson + "\' ) ");

                using (MySqlCommand cmd = new MySqlCommand(createStageTagQuery.ToString(), con))
                {
                    cmd.ExecuteNonQuery();
                    insertedStageTagid = cmd.LastInsertedId;
                }


                BiaVBase  treeNodeReferenceVertex = new BiaVBase()
                {
                    Cluster = 3,
                    Label = "BiaVStageTagReference",
                    Class = "BiaVStageTagReference"
                };

                string treeNodeReferenceVertexJson = _json.Serialize(treeNodeReferenceVertex);

                StringBuilder createVertexLevelNavigationReferenceToStage = new StringBuilder();
                createVertexLevelNavigationReferenceToStage.Append("INSERT INTO " + dbName + "." + vertexLevelNavigationCluster);
                createVertexLevelNavigationReferenceToStage.Append(" ( `" + vertexProjectNavigationCluster + "_ref_id` , `json_data`  ) ");
                createVertexLevelNavigationReferenceToStage.Append(" VALUES ");
                createVertexLevelNavigationReferenceToStage.Append(" ( " + insertedStageTagid + " , \'" + treeNodeReferenceVertexJson + "\' ) ");

                using (MySqlCommand cmd = new MySqlCommand(createVertexLevelNavigationReferenceToStage.ToString(), con))
                {
                    cmd.ExecuteNonQuery();
                    insertedStageTagReference = cmd.LastInsertedId;
                }




                BiaVBase treeNodeReferenceVertexChild = new BiaVBase()
                {
                    Cluster = 3,
                    Label = "BiaVTreenode",
                    Class = "BiaVTreeNode",
                    Value = JObject.Parse(treeNodeReferenceVertexChildValueJson)
                };

                string treeNodeReferenceVertexChildJson = _json.Serialize(treeNodeReferenceVertexChild);

                StringBuilder createVertexLevelNavigationReferenceChild = new StringBuilder();
                createVertexLevelNavigationReferenceChild.Append("INSERT INTO " + dbName + "." + vertexLevelNavigationCluster);
                createVertexLevelNavigationReferenceChild.Append(" ( `parent` , `json_data`  ) ");
                createVertexLevelNavigationReferenceChild.Append(" VALUES ");
                createVertexLevelNavigationReferenceChild.Append(" ( " + insertedStageTagReference + " , \'" + treeNodeReferenceVertexChildJson + "\' ) ");

                using (MySqlCommand cmd = new MySqlCommand(createVertexLevelNavigationReferenceChild.ToString(), con))
                {
                    cmd.ExecuteNonQuery();
                }
            }

            JObject result = new JObject();
            result["result"] = new JArray();
            return result.ToString();
        }
    }
}
