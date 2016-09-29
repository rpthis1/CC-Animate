using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Web;
using Newtonsoft.Json.Linq;
using WebApiBia.Common.Json;
using WebApiBia.Data.Entities.Bia;
using WebApiBia.Web.Common;

namespace WebApiBia.Data.OrientDb.Clients
{
    public class ReorderTreeClient : IReorderTreeClient
    {
        private readonly IOrientClient _orient;
        private readonly IJsonHelper _json;
        public ReorderTreeClient()
        {
            _orient = WebContainerManager.Get<IOrientClient>();
            _json = WebContainerManager.Get<IJsonHelper>();
        }

 
        public string Put(object p)
        {
            JArray clientObject = (JArray)p;
            string json = _json.Serialize(clientObject);
            json = HttpUtility.UrlEncode(json);
            string parameter = String.Format("/MntReorder/{0}", json);
            WebRequest request = _orient.GetClientPost("/function", parameter);
            return _orient.ProcessPostRequest(request, "");
        }
    }
}
