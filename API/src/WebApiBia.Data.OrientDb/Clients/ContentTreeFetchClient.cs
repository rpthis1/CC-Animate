using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using WebApiBia.Web.Common;

namespace WebApiBia.Data.OrientDb.Clients
{
    public class ContentTreeFetchClient : IContentTreeFetchClient
    {
        private readonly IOrientClient _orientClient;
        private readonly IVerticesClient _verticesClient;
        public ContentTreeFetchClient()
        {
            _orientClient = WebContainerManager.Get<IOrientClient>();
            _verticesClient = WebContainerManager.Get<IVerticesClient>();
        }

 
        public string Get(int cluster, int record, int clusterOwner, int recordOwner)
        {
            string parameter = String.Format("/FetchContentTreeRecursively/{0}:{1}/{2}:{3}", cluster, record,clusterOwner,recordOwner);
            WebRequest request = _orientClient.GetClientGet("/function", parameter);
            string result = _orientClient.ProcessGettRequest(request);
            return result;
        }
    }
}
