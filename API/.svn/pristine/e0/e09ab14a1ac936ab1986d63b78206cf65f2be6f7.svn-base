using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApiBia.Data.QueryProcessors.Bia;
using WebApiBia.Web.Common;

namespace WebApiBia.Web.Api.Core.Processors.Controllers.Bia
{
    public sealed class ProjectsTreeProcessor :IProjectsTreeProcessor
    {
        private readonly IProjectsTreeQueryProcessor _projectsTreeQueryProcessor;
        public ProjectsTreeProcessor()
        {
            this._projectsTreeQueryProcessor = WebContainerManager.Get<IProjectsTreeQueryProcessor>();
        }
        public string Get(int cluster, int record)
        {
            return _projectsTreeQueryProcessor.Get(cluster, record);
        }
    }
}