using WebApiBia.Data.Postgres.Clients;
using WebApiBia.Data.QueryProcessors.Bia;

namespace WebApiBia.Data.Postgres.QueryProcessors.Bia
{
    public class ProjectsTreeQueryProcessorPg : IProjectsTreeQueryProcessor
    {

        private readonly ProjectsTreeClientPg _projectsTreeClient = new ProjectsTreeClientPg();

        public string Get(int cluster, int record)
        {
            string result;
            result = _projectsTreeClient.Get(cluster, record);
            return result;
        }
    }
}
