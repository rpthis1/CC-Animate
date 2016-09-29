using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WebApiBia.Data.OrientDb.Clients;
using WebApiBia.Data.QueryProcessors.Bia;
using WebApiBia.Web.Common;

namespace WebApiBia.Data.OrientDb.QueryProcessors.Bia
{
    public class ProjectsTreeQueryProcessor :IProjectsTreeQueryProcessor
    {
        private readonly IProjectsTreeClient _projectsTreeClient;

        public ProjectsTreeQueryProcessor()
        {
            _projectsTreeClient = WebContainerManager.Get<IProjectsTreeClient>();
        }
        public string Get(int cluster, int record)
        {
            return  _projectsTreeClient.Get(cluster, record);
        }
    }
}
