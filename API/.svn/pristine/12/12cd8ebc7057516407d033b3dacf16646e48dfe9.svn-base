using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using WebApiBia.Web.Common;

namespace WebApiBia.Data.OrientDb.Clients
{
    public class NavigationTreeFetchClient : INavigationTreeFetchClient
    {
        private readonly IOrientClient _orientClient;
        private readonly IVerticesClient _verticesClient;
        public NavigationTreeFetchClient()
        {
            _orientClient = WebContainerManager.Get<IOrientClient>();
            _verticesClient = WebContainerManager.Get<IVerticesClient>();
        }

 
        public string Get(int cluster, int record, int clusterOwner, int recordOwner)
        {
            string parameter = String.Format("/FetchNavigationTreeRecursively/{0}:{1}", cluster, record);
            WebRequest request = _orientClient.GetClientGet("/function", parameter);
            string result =  _orientClient.ProcessGettRequest(request);
            return result;
        }
    }
}
