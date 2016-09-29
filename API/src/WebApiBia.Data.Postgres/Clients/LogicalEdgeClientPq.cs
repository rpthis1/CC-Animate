using System;
using System.Configuration;
using System.Net;
using System.Text;
using Newtonsoft.Json.Linq;
using Npgsql;
using WebApiBia.Data.Entities.Bia;
using WebApiBia.Data.Mapper;
using WebApiBia.Data.Postgres.Mapper;

namespace WebApiBia.Data.Postgres.Clients
{
   public class LogicalEdgeClientPq
    {
        private readonly ClusterLookUp _clusterLooup = new ClusterLookUp();

        public string Delete(int clusterId, int recordId, int clusterOwner, int recordOwner, object o)
        {
            string clusterName = _clusterLooup.GetClusterNameById(clusterId);
            string schema = _clusterLooup.GetSchemaName();

            string constr = ConfigurationManager.AppSettings["postgresconnectionstring"];
            using (NpgsqlConnection con = new NpgsqlConnection(constr))
            {
                con.Open();

                StringBuilder updateVertexProperty = new StringBuilder();

                updateVertexProperty.Append("UPDATE " + schema + "." + clusterName + " SET deleted = true ");
                updateVertexProperty.Append(" WHERE " + clusterName + "_id = " + recordId + " AND cluster = " + clusterId);

                using (NpgsqlCommand cmd = new NpgsqlCommand(updateVertexProperty.ToString(), con))
                {
                   cmd.ExecuteNonQuery();
                }

                StringBuilder updateDeletedTimeQuery = new StringBuilder();

                updateDeletedTimeQuery.Append("UPDATE " + schema + "." + clusterName + " SET deleted_date = (SELECT current_timestamp) ");
                updateDeletedTimeQuery.Append(" WHERE " + clusterName + "_id = " + recordId + " AND cluster = " + clusterId);

                using (NpgsqlCommand cmd = new NpgsqlCommand(updateDeletedTimeQuery.ToString(), con))
                {
                    cmd.ExecuteNonQuery();
                }
            }

            return string.Empty;
        }
    }
}