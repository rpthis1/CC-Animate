using System;
using System.Net;
using System.Web;
using Newtonsoft.Json.Linq;
using WebApiBia.Common.Json;
using WebApiBia.Data.Entities.Bia;
using WebApiBia.Web.Common;
using WebApiBia.Web.Models.NavigationTree;

namespace WebApiBia.Data.OrientDb.Clients
{
   public class NavigationTemplateClient : INavigationTemplateClient
    {
        private readonly IOrientClient _orient;
        private readonly IJsonHelper _json;
        public NavigationTemplateClient()
        {
            _orient = WebContainerManager.Get<IOrientClient>();
            _json = WebContainerManager.Get<IJsonHelper>();
        }

        public string Post(int cluster, int record, object p)
        {
            var clientObject = (JObject)p;
            var model = clientObject.ToObject<NavigationTemplateModel>();
            string parameter = String.Format("/NavTreeAttachTemplate/{0}:{1}/{2}", cluster, record, model.TemplateId);
            WebRequest request = _orient.GetClientPost("/function", parameter);
            return _orient.ProcessPostRequest(request, "");
        }
    }
}