using System;
using System.Net;
using System.Web;
using Newtonsoft.Json.Linq;
using WebApiBia.Common.Json;
using WebApiBia.Data.Entities.Bia;
using WebApiBia.Web.Models.TreeMenu.TemplateLibrary;

namespace WebApiBia.Data.OrientDb.Clients
{
    public class TemplateTabNavigatorClient : ITemplateTabNavigatorClient
    {
        private readonly IOrientClient _orient;
        private readonly IJsonHelper _json;
        private readonly ITemplateLibraryMenuFactory _menuFactory;

        public TemplateTabNavigatorClient(IOrientClient orient, IJsonHelper json,
            ITemplateLibraryMenuFactory menuFactory)
        {
            _orient = orient;
            _json = json;
            _menuFactory = menuFactory;
        }


        public string Post(int cluster, int record, object p)
        {
            string json = _json.Serialize(_menuFactory.CreateTabMenu());
            json = HttpUtility.UrlEncode(json);
            var clientObject = (JObject) p;
            var vertex = clientObject.ToObject<BiaVBase>();
            string parameter = String.Format("/TmpTreeCreateTabNavigator/{0}/{1}/{2}:{3}", vertex.Label, json, cluster, record);
            WebRequest request = _orient.GetClientPost("/function", parameter);
            return _orient.ProcessPostRequest(request, "");
        }
    }
}