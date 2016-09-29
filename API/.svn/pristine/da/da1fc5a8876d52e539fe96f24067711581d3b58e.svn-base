using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using WebApiBia.Web.Common;

namespace WebApiBia.Data.OrientDb.Clients
{
    public class ProjectsTreeClient :IProjectsTreeClient
    {
        private readonly IOrientClient _orientClient;
        public ProjectsTreeClient()
        {
            this._orientClient = WebContainerManager.Get<IOrientClient>();
        }
        public string Get(int cluster, int record)
        {
            string parameter = String.Format("/getChildren/{0}:{1}", cluster, record);
            WebRequest request = _orientClient.GetClientGet("/function", parameter);
            return _orientClient.ProcessGettRequest(request);
        }
    }
}
