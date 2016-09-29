using System.Configuration;
using System.Text;
using Newtonsoft.Json.Linq;
using Npgsql;

namespace WebApiBia.Data.Postgres.Clients
{
   public class ContentTreeClientPq 
    {

        public string Get(object type)
        {
            //return _verticesClient.Get(type);
            return null;
        }
       
        public string Get(int cluster, int levelRecordId)
        {

            JObject result = new JObject();
            JArray resultArray = new JArray();
            result["result"] = resultArray;

            string constr = ConfigurationManager.AppSettings["postgresconnectionstring"];
            using (NpgsqlConnection con = new NpgsqlConnection(constr))
            {
                con.Open();
                
  

                    StringBuilder directClusterQuery = new StringBuilder();
                    directClusterQuery.Append("SELECT lookup_template_owner.lookup_template_owner_id");
                    directClusterQuery.Append(" FROM lookup_template_owner, vertex_content_navigation");
                    directClusterQuery.Append(" WHERE lookup_template_owner.vertex_content_navigation_ref_id =  vertex_content_navigation.vertex_content_navigation_id");
                    directClusterQuery.Append(" AND lookup_template_owner.vertex_level_navigation_ref_id = " + levelRecordId);
                    directClusterQuery.Append(" AND lookup_template_owner.deleted =  false ");

                    using (NpgsqlCommand cmd = new NpgsqlCommand(directClusterQuery.ToString(), con))
                    {
                        

                        using (NpgsqlDataReader rdr = cmd.ExecuteReader())
                        {
                            while (rdr.Read())
                            {
                                JObject obj  = new JObject();
                                int templateOwnderId = rdr.GetInt32(0);
                                obj["@rid"] = string.Format("#{0}:{1}", 0, templateOwnderId);
                                resultArray.Add(obj);
                            }
                        }
                    }
            }

            return result.ToString();
        }
    }
}