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
    public class ReportPropertyClient : IReportPropertyClient
    {
         private readonly IOrientClient _orient;
         private readonly IJsonHelper _json;
         private readonly AutoMapper _mapper = new AutoMapper();


        public ReportPropertyClient(IOrientClient orient, IJsonHelper json)
        {
            _orient = orient;
            _json = json;
        }


        public string Put(int cluster, int record, object p)
        {
            dynamic clientObject = (JObject) p;
            dynamic template = clientObject.Template;
            string cls = (string)template["Class"];
            BiaVBase property = _mapper.Map(template, cls);
            string json = property.Serialize();
            json = HttpUtility.UrlEncode(json);
            string parameter = String.Format("/TmpTreeUpdateProperty/{0}/{1}:{2}", json, cluster, record);
            WebRequest request = _orient.GetClientPost("/function", parameter);
            string result =  _orient.ProcessPostRequest(request, "");
            return result;
        }
    }
}