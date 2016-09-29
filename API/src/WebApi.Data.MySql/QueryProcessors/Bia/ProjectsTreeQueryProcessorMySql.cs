using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WebApi.Data.MySql.Clients;
using WebApiBia.Data.QueryProcessors.Bia;

namespace WebApi.Data.MySql.QueryProcessors.Bia
{
    public class ProjectsTreeQueryProcessorMySql : IProjectsTreeQueryProcessor
    {

        private readonly ProjectsTreeClientMySql _projectsTreeClient = new ProjectsTreeClientMySql();

        public string Get(int cluster, int record)
        {
            string result;
            result = _projectsTreeClient.Get(cluster, record);
            return result;
        }
    }
}
