using System;
using System.IO;
using System.Linq.Expressions;
using System.Web;
using Newtonsoft.Json.Linq;
using WebApiBia.Data.Postgres.Clients;
using WebApiBia.Data.QueryProcessors.Bia;
using WebApiBia.Web.Models.DataMapper;

namespace WebApiBia.Data.Postgres.QueryProcessors.Bia
{
   public class TemplateExportQueryProcessor : ITemplateExportQueryProcessor
    {
        private readonly ExportTemplateClientPq _client = new ExportTemplateClientPq();

        public string Get(object p)
        {
            VertexParentPropertiesModel vertexParent = (VertexParentPropertiesModel)p;
            return _client.Get(vertexParent.Cluster, vertexParent.Record);
        }

        public string Post(object p)
        {
            HttpPostedFile file = (HttpPostedFile) p;
            try
            {

                JObject result = new JObject();
                result["success"] = true;
                if (file != null && file.ContentLength > 0)
                {
                    var str = new StreamReader(file.InputStream).ReadToEnd();
                    JObject obj = JObject.Parse(str);
                     _client.Post(obj);
                    return result.ToString();
                }

                result["success"] = false;
                result["error"] = "Content length is not greater than zero";
                return result.ToString();
            }
            catch (Exception e)
            {
                JObject result = new JObject();
                result["success"] = false;
                result["error"] = e.Message;
                return result.ToString();
            }
        }

    }
}