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
    public class ReportPropertyOverrideClientPq 
    {

        private readonly RecordIdMapper _idMapper = new RecordIdMapper();
        private readonly AutoMapper _mapper = new AutoMapper();

        public string Get(int cluster, int contentRecordId, int clusterowner, int tamplateOwnerRecordId)
        {
            JObject result = new JObject();
            JArray resultArray = new JArray();
            result["result"] = resultArray;

            string constr = ConfigurationManager.AppSettings["postgresconnectionstring"];
            using (NpgsqlConnection con = new NpgsqlConnection(constr))
            {
                con.Open();
                StringBuilder directClusterQuery = new StringBuilder(); 
                directClusterQuery.Append("SELECT override_id,  json_data, cluster");
                directClusterQuery.Append(" FROM override");
                directClusterQuery.Append(" WHERE vertex_content_navigation_ref_id = " + contentRecordId);
                directClusterQuery.Append(" AND lookup_template_owner_ref_id = " + tamplateOwnerRecordId);


                using (NpgsqlCommand cmd = new NpgsqlCommand(directClusterQuery.ToString(), con))
                {
                    using (NpgsqlDataReader rdr = cmd.ExecuteReader())
                    {
                        while (rdr.Read())
                        {
                            JObject obj = JObject.Parse(rdr.GetString(1));
                            obj["@rid"] = string.Format("#{0}:{1}", rdr.GetInt32(2), rdr.GetInt32(0));
                            resultArray.Add(obj);
                        }
                    }
                }
            }

            return result.ToString();
        }

        public string Post(int cluster, int contentRecordId, int clusterowner, int tamplateOwnerRecordId, object o)
        {

            dynamic clientObject = (JObject)o;
            dynamic overr = clientObject.Override;
            string cls = (string)overr["Class"];
            BiaVReportPropertyOverrideEDocument property = _mapper.Map(overr, cls);
            string json = property.Serialize();

            JObject overrideObject = new JObject();

            overrideObject["value"] = JObject.Parse(json);
            overrideObject["@class"] = "BiaVOverride";


            string constr = ConfigurationManager.AppSettings["postgresconnectionstring"];
            using (NpgsqlConnection con = new NpgsqlConnection(constr))
            {
                con.Open();


                StringBuilder createVertexLevelQuery = new StringBuilder();
                createVertexLevelQuery.Append("INSERT INTO public.override ");
                createVertexLevelQuery.Append(" ( \"json_data\",  \"vertex_content_navigation_ref_id\",  \"lookup_template_owner_ref_id\"  ) ");
                createVertexLevelQuery.Append(" VALUES ");
                createVertexLevelQuery.Append(" ( '" + overrideObject + "'" + " , " + contentRecordId + " , " + tamplateOwnerRecordId + " ) ");

                using (NpgsqlCommand cmd = new NpgsqlCommand(createVertexLevelQuery.ToString(), con))
                {
                    cmd.ExecuteNonQuery();
                }
            }

            return string.Empty;


        }

        public string Put(int cluster, int record, int clusterowner, int recordowner, object o)
        {

            dynamic clientObject = (JObject)o;
            dynamic overr = clientObject.Override;
            string cls = (string)overr["Class"];
            BiaVReportPropertyOverrideEDocument property = _mapper.Map(overr, cls);
            string overridePropertyValueUpdateJson = property.Serialize();
            string overrideRidString = (string)clientObject.OverrideRid;
            overrideRidString = overrideRidString.Replace("#", "");
            int overrideId = Convert.ToInt32(overrideRidString.Split(':')[1]);

            string constr = ConfigurationManager.AppSettings["postgresconnectionstring"];
            using (NpgsqlConnection con = new NpgsqlConnection(constr))
            {
                con.Open();
                StringBuilder createVertexLevelQuery = new StringBuilder();
                createVertexLevelQuery.Append("UPDATE public.override SET json_data = " + " (SELECT jsonb_set(json_data::jsonb, '{value}' ,  '" + overridePropertyValueUpdateJson + "'" + "  , false) ");
                createVertexLevelQuery.Append("FROM public.override WHERE override_id = " + overrideId + ")");
                createVertexLevelQuery.Append("WHERE override_id = " + overrideId);

                

                using (NpgsqlCommand cmd = new NpgsqlCommand(createVertexLevelQuery.ToString(), con))
                {
                    cmd.ExecuteNonQuery();
                }
            }

            return string.Empty;

        }
    }
}