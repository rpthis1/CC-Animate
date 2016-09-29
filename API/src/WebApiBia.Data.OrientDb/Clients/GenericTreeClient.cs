using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using WebApiBia.Web.Common;

namespace WebApiBia.Data.OrientDb.Clients
{
    public class GenericTreeClient : IGenericTreeClient
    {
        private readonly IOrientClient _orientClient;
        private readonly IVerticesClient _verticesClient;
        public GenericTreeClient()
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
            string parameter = String.Format("/getChildren/{0}:{1}", cluster, record);
            WebRequest request = _orientClient.GetClientGet("/function", parameter);
            return _orientClient.ProcessGettRequest(request);
        }
    }
}
