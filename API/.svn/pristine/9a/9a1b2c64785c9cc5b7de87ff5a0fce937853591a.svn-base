using WebApiBia.Data.Postgres.Clients;
using WebApiBia.Data.QueryProcessors.Bia;

namespace WebApiBia.Data.Postgres.QueryProcessors.Bia
{
    public class ProjectsTreeStageTagQueryProcessorPg : IProjectsTreeStageTagQueryProcessor
    {
        private readonly ProjectsTreeStageTagClientPg _client = new ProjectsTreeStageTagClientPg();
        public string Post(int cluster, int record, object p)
        {
            return _client.Post(cluster, record, p);
        }
    }
}
