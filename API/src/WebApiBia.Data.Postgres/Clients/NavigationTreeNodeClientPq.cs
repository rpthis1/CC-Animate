using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Runtime.Remoting.Messaging;
using System.Text;
using Newtonsoft.Json.Linq;
using Npgsql;
using WebApiBia.Common.Json;
using WebApiBia.Data.Entities.Bia;
using WebApiBia.Data.Mapper;
using WebApiBia.Data.Postgres.GenericQueries;
using WebApiBia.Data.Postgres.Mapper;

namespace WebApiBia.Data.Postgres.Clients
{
    public class NavigationTreeNodeClientPq
    {
        private readonly ClusterLookUp _clusterLooup = new ClusterLookUp();
        private readonly JsonHelper _json = new JsonHelper();
        private readonly GenericQueriesPg _genericQueries = new GenericQueriesPg();

        public string Post(int clusterId, int recordId, object p)
        {

            string vertexLevelNavigationCluster = _clusterLooup.GetVertexLevelNavigationCluster();
            string schema = _clusterLooup.GetSchemaName();

            string constr = ConfigurationManager.AppSettings["postgresconnectionstring"];
            using (NpgsqlConnection con = new NpgsqlConnection(constr))
            {
                con.Open();

                string vertexLevelJson = CreateVertexLevelJson(p);

                var maxOrder = _genericQueries.GetMaxOrder(con, vertexLevelNavigationCluster, schema, recordId, clusterId);

                StringBuilder createVertexLevelQuery = new StringBuilder();
                createVertexLevelQuery.Append("INSERT INTO " + schema + "." + vertexLevelNavigationCluster);
                createVertexLevelQuery.Append(" ( \"parent\", \"json_data\", \"vertex_order\"  ) ");
                createVertexLevelQuery.Append(" VALUES ");
                createVertexLevelQuery.Append(" ( " + recordId + " , \'" + vertexLevelJson + "\' , "  + ++maxOrder  + " ) ");

                using (NpgsqlCommand cmd = new NpgsqlCommand(createVertexLevelQuery.ToString(), con))
                {
                     cmd.ExecuteNonQuery();
                }
            }

            return string.Empty;
        }



        private string CreateVertexLevelJson(object p)
        {
            var clientObject = (JObject) p;
            var vertex = clientObject.ToObject<BiaVBase>();

            var baseProperties = new BiaVBaseProperties()
            {
                Type = "BiaVBaseProperties",
                Items = new List<BiaVBaseProperty>()
                {
                    new BiaVBaseProperty()
                    {
                        Label = "Enabled",
                        Value = "No",
                        BiaType = "combobox",
                        BiaStore = "Yes,No"

                    },
                    new BiaVBaseProperty()
                    {
                        Label = "Title",
                        Value = vertex.Label,
                        BiaType = "textfield"
                    }
                }
            };

            vertex.Cluster = 3;
            vertex.Label = "BiaVTreeNode";
            vertex.Class = "BiaVTreeNode";
            vertex.Value = JObject.Parse(baseProperties.Serialize());
            return _json.Serialize(vertex);

        }
    }
} 