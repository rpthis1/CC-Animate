using System;
using System.Net;
using Newtonsoft.Json.Linq;
using WebApiBia.Common.Json;
using WebApiBia.Data.Entities.Bia;

namespace WebApiBia.Data.OrientDb.Clients
{
    public class NavigationTreeNodeClient : INavigationTreeNodeClient
    {
        private readonly IOrientClient _orient;
        private readonly IJsonHelper _json;

        public NavigationTreeNodeClient(IOrientClient orient, IJsonHelper json)
        {
            _orient = orient;
            _json = json;
        }
        public string Post(int cluster, int record, object p)
        {
            var clientObject = (JObject)p;
            var vertex = clientObject.ToObject<BiaVBase>();
            string parameter = String.Format("/NavTreeCreateLevel/{0}/{1}:{2}", vertex.Label, cluster, record);
            WebRequest request = _orient.GetClientPost("/function", parameter);
            return _orient.ProcessPostRequest(request, "");
        }
    }
} 