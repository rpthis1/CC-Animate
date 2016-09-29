using System.Configuration;
using System.Data;
using System.Text;
using Newtonsoft.Json.Linq;
using Npgsql;
using WebApiBia.Common;
using WebApiBia.Common.Json;
using WebApiBia.Data.Postgres.GenericQueries;
using WebApiBia.Data.Postgres.Mapper;
using WebApiBia.Web.Models.NavigationTree;

namespace WebApiBia.Data.Postgres.Clients
{
   public class NavigationTemplateClientPq 
    {
        private readonly ClusterLookUp _clusterLooup = new ClusterLookUp();
        private readonly RecordIdUtil _recordIdUtil = new RecordIdUtil();

        public string Post(int clusterId, int levelNavigationrecordId, object p)
        {
            var clientObject = (JObject)p;
            var model = clientObject.ToObject<NavigationTemplateModel>();

            string lookupTemplateOwnerTable = _clusterLooup.GetLookupTemplateOwnerTable();

            string schema = _clusterLooup.GetSchemaName();

            string constr = ConfigurationManager.AppSettings["postgresconnectionstring"];
            using (NpgsqlConnection con = new NpgsqlConnection(constr))
            {
                con.Open();

                NpgsqlTransaction tran = con.BeginTransaction(IsolationLevel.Serializable);

                StringBuilder createVertexLevelQuery = new StringBuilder();
                createVertexLevelQuery.Append("INSERT INTO " + schema + "." + lookupTemplateOwnerTable);
                createVertexLevelQuery.Append(" ( \"vertex_level_navigation_ref_id\", \"vertex_content_navigation_ref_id\" ) ");
                createVertexLevelQuery.Append(" VALUES ");
                createVertexLevelQuery.Append(" ( " + levelNavigationrecordId + " , " + _recordIdUtil.GetRecordIdFromPartialId(model.TemplateId) + " ) ");

                using (NpgsqlCommand cmd = new NpgsqlCommand(createVertexLevelQuery.ToString(), con))
                {
                    cmd.ExecuteNonQuery();
                }

                tran.Commit();
            }

            return string.Empty;

        }
    }
}