using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WebApi.Data.MySql.Clients;
using WebApiBia.Data.QueryProcessors.Bia;

namespace WebApi.Data.MySql.QueryProcessors.Bia
{
    public class ProjectsTreeStageTagQueryProcessorMySql : IProjectsTreeStageTagQueryProcessor
    {
        private readonly ProjectsTreeStageTagClientMySql _client = new ProjectsTreeStageTagClientMySql();
        public string Post(int cluster, int record, object p)
        {
            return _client.Post(cluster, record, p);
        }
    }
}
