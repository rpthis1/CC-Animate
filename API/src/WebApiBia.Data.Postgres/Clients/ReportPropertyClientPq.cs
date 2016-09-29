using System;
using System.Configuration;
using System.Data;
using System.Net;
using System.Text;
using Newtonsoft.Json.Linq;
using Npgsql;
using WebApiBia.Common.Json;
using WebApiBia.Data.Entities.Bia;
using WebApiBia.Data.Mapper;
using WebApiBia.Data.Postgres.Mapper;

namespace WebApiBia.Data.Postgres.Clients
{
    public class ReportPropertyClientPq 
    {
         private readonly AutoMapper _mapper = new AutoMapper();
         private readonly ClusterLookUp _clusterLooup = new ClusterLookUp();
         private readonly JsonHelper _jsonHelper = new JsonHelper();

        public string Put(int clusterId, int recordId, object p)
        {
            dynamic clientObject = (JObject)p;
            dynamic template = clientObject.Template;
            string cls = (string)template["Class"];
            BiaVBase property = _mapper.Map(template, cls);


            string json = property.Serialize();

            string clusterName = _clusterLooup.GetClusterNameById(clusterId);
            string schema = _clusterLooup.GetSchemaName();

            string constr = ConfigurationManager.AppSettings["postgresconnectionstring"];
            using (NpgsqlConnection con = new NpgsqlConnection(constr))
            {
                con.Open();
                 //NpgsqlTransaction tran =  con.BeginTransaction(IsolationLevel.Serializable);

                StringBuilder updateVertexProperty = new StringBuilder();

                updateVertexProperty.Append("UPDATE " + schema + "." + clusterName + " SET json_data = ");
                updateVertexProperty.Append("(");
                updateVertexProperty.Append("SELECT jsonb_set(json_data::jsonb, '{value}' ,\'" + json + "\', false) ");
                updateVertexProperty.Append("FROM " + schema + "." + clusterName + " WHERE " + clusterName + "_id = " + recordId + " AND cluster = " + clusterId);
                updateVertexProperty.Append(")");
                updateVertexProperty.Append("WHERE " + clusterName + "_id = " + recordId + " AND cluster = " + clusterId);

                using (NpgsqlCommand cmd = new NpgsqlCommand(updateVertexProperty.ToString(), con))
                {
                    cmd.ExecuteNonQuery();
                }

              //  tran.Commit();
            }

            return string.Empty;
        }
    }
}