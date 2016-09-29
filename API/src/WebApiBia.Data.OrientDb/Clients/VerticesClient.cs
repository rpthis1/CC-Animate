using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Reflection;
using System.Text;
using log4net;
using WebApiBia.Data.Entities;
using WebApiBia.Data.OrientDb.Commands;
using WebApiBia.Web.Common;

namespace WebApiBia.Data.OrientDb.Clients
{
   public sealed class VerticesClient :IVerticesClient
    {
        private readonly IGenericCommands _genericCommands;
        private readonly IOrientClient _orientClient;

        public VerticesClient()
        {
            _genericCommands = WebContainerManager.Get<IGenericCommands>();
            _orientClient = WebContainerManager.Get<IOrientClient>();
        }
        public string Get(Object type)
        {
           
            WebRequest request = _orientClient.GetClientPost("/command", "/sql");
            var postData = _genericCommands.SelectFrom(type);
            return _orientClient.ProcessPostRequest(request, postData);
        }

        public string Post(Object type)
        {
            WebRequest request = _orientClient.GetClientPost("/command", "/sql");
            var postData = _genericCommands.AddVertex(type);
            return _orientClient.ProcessPostRequest(request, postData);

        }

        public string Put(int cluster, int record, Object type)
        {
            WebRequest request = _orientClient.GetClientPost("/command", "/sql");
            var postData = _genericCommands.UpdateVertex(cluster, record, type);
            return _orientClient.ProcessPostRequest(request, postData);

        }

        public string Delete(int cluster, int record)
        {
            WebRequest request = _orientClient.GetClientPost("/command", "/sql");
            var postData = _genericCommands.DeleteVertex(cluster, record);
            return _orientClient.ProcessPostRequest(request, postData);

        }
    }
}
