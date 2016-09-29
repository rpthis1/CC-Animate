using System;
using System.Net;
using Newtonsoft.Json.Linq;
using WebApiBia.Data.OrientDb.Commands;
using WebApiBia.Web.Common;
using WebApiBia.Web.Models.NavigationTree;

namespace WebApiBia.Data.OrientDb.Clients
{
   public class LogicalEdgeClient : ILogicalEdgeClient
    {
        private readonly IGenericCommands _genericCommands;
        private readonly IOrientClient _orientClient;

        public LogicalEdgeClient()
        {
            _genericCommands = WebContainerManager.Get<IGenericCommands>();
            _orientClient = WebContainerManager.Get<IOrientClient>();
        }
        public string Delete(int cluster, int record, int clusterOwner, int recordOwner, object o)
        {
            dynamic clientJObject = (JObject) o;
            string cls = clientJObject.EdgdeClass;

            string parameter = String.Format("/MntDeleteLightWeightEdge/{0}:{1}/{2}:{3}/{4}", cluster, record, clusterOwner, recordOwner, cls);
            WebRequest request = _orientClient.GetClientPost("/function", parameter);
            return _orientClient.ProcessPostRequest(request, "");
        }
    }
}