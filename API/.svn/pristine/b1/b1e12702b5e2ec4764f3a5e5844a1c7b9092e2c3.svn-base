using System;
using System.Net;
using System.Web;
using Newtonsoft.Json.Linq;
using WebApiBia.Common.Json;
using WebApiBia.Data.Entities.Bia;
using WebApiBia.Data.Mapper;
using WebApiBia.Web.Models.TreeMenu.TemplateLibrary;

namespace WebApiBia.Data.OrientDb.Clients
{
   public class ProjectsTreeStageTagClient : IProjectsTreeStageTagClient
    {
        private readonly IOrientClient _orient;
        private readonly IJsonHelper _json;
        private readonly AutoMapper _mapper = new AutoMapper();

        public ProjectsTreeStageTagClient(IOrientClient orient, IJsonHelper json)
        {
            _orient = orient;
            _json = json;
        }

        public string Post(int cluster, int record, object p)
        {
            dynamic clientObject = (JObject)p;
            string label = (string)clientObject["stageTagLabel"];
            dynamic vertex = clientObject.vertex;
            string cls = (string)vertex["Class"];
            BiaVBase property = _mapper.Map(vertex, cls);
            string json = property.Serialize();
            json = HttpUtility.UrlEncode(json);
            string parameter = String.Format("/ProTreeCreateStageTag/{0}/{1}:{2}/{3}",label, cluster, record,json);
            WebRequest request = _orient.GetClientPost("/function", parameter);
            return _orient.ProcessPostRequest(request, "");
        }
    }
}