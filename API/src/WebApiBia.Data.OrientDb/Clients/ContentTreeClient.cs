using System;
using System.Net;
using WebApiBia.Web.Common;

namespace WebApiBia.Data.OrientDb.Clients
{
   public class ContentTreeClient : IContentTreeClient
    {
        private readonly IOrientClient _orientClient;
        private readonly IVerticesClient _verticesClient;
        public ContentTreeClient()
        {
            _orientClient = WebContainerManager.Get<IOrientClient>();
            _verticesClient = WebContainerManager.Get<IVerticesClient>();
        }

        public string Get(object type)
        {
            return _verticesClient.Get(type);
        }

        public string Get(int cluster, int record)
        {
            string parameter = String.Format("/ConTreeGetChildren/{0}:{1}", cluster, record);
            WebRequest request = _orientClient.GetClientGet("/function", parameter);
            return _orientClient.ProcessGettRequest(request);
        }
    }
}