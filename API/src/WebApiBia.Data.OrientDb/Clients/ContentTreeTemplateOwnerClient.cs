using System;
using System.Net;
using WebApiBia.Web.Common;

namespace WebApiBia.Data.OrientDb.Clients
{
    public class ContentTreeTemplateOwnerClient : IContentTreeTemplateOwnerClient
    {
        private readonly IOrientClient _orientClient;
        private readonly IVerticesClient _verticesClient;
        public ContentTreeTemplateOwnerClient()
        {
            _orientClient = WebContainerManager.Get<IOrientClient>();
            _verticesClient = WebContainerManager.Get<IVerticesClient>();
        }

        public string Get(int cluster, int record, int clustetOwner, int recordOwner )
        {
            string parameter = String.Format("/ConTreeGetChildrenByTemplateOwner/{0}:{1}/{2}:{3}", clustetOwner, recordOwner , cluster, record);
            WebRequest request = _orientClient.GetClientGet("/function", parameter);
            return _orientClient.ProcessGettRequest(request);
        }
    }
}