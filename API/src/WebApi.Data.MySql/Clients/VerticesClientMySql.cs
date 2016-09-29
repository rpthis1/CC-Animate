using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.Common;
using System.Linq;
using System.Text;
using MySql.Data.MySqlClient;
using Newtonsoft.Json.Linq;
using WebApi.Data.MySql.Mapper;

namespace WebApi.Data.MySql.Clients
{
   sealed class VerticesClientMySql
    {

       private readonly ClusterLookUp _vertexLooup = new ClusterLookUp();
       private readonly RecordIdMapper _idMapper = new RecordIdMapper();
        public string Get(Object type)
        {
           string result = string.Empty;
           string cluster = _vertexLooup.MapClassToCluster(type.GetType().Name);
           JObject resultJsonJObject = new JObject();
           JArray resultJsonArray = new JArray();
           resultJsonJObject["result"] = resultJsonArray;

           string constr = ConfigurationManager.AppSettings["mysqlconnectionstring"];
            using (MySqlConnection con = new MySqlConnection(constr))
            {
                con.Open();
                using (MySqlCommand cmd = new MySqlCommand("select " + cluster +"_id ," +  " json_data from reporting." + cluster, con))
                {
                    using (MySqlDataReader rdr = cmd.ExecuteReader())
                    {
                        while (rdr.Read())
                        {
                            int id = rdr.GetInt32(0);
                            string json = rdr.GetString(1);
                            JObject jObject = JObject.Parse(json);
                            _idMapper.Map(id,jObject);
                            resultJsonArray.Add(jObject);
                        }
                    }
                }
            }

            return resultJsonJObject.ToString();
        }

        public string Post(Object type)
        {
            string result = string.Empty;

            return result;

        }

        public string Put(int cluster, int record, Object type)
        {
            string result = string.Empty;

            return result;

        }

        public string Delete(int cluster, int record)
        {
            string result = string.Empty;

            return result;

        }

    }
}
