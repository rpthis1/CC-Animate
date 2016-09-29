using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using WebApiBia.Data.Entities;
using WebApiBia.Data.OrientDb.Commands;
using WebApiBia.Web.Common;

namespace WebApiBia.Data.OrientDb.Clients
{
   public sealed class EdgesClient :IEdgesClient
    {
        private readonly IGenericCommands _genericCommands;
        private readonly IOrientClient _orientClient;

        public EdgesClient()
        {
            _genericCommands = WebContainerManager.Get<IGenericCommands>();
            _orientClient = WebContainerManager.Get<IOrientClient>();
        }

        public string Delete(int cluster, int record)
        {
            WebRequest request = _orientClient.GetClientPost("/command", "/sql");
            var postData = _genericCommands.DeleteEdge(cluster, record);
            return _orientClient.ProcessPostRequest(request, postData);

        }
    }
}
