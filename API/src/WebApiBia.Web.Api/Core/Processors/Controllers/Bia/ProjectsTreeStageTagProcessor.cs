using WebApiBia.Data.QueryProcessors.Bia;

namespace WebApiBia.Web.Api.Core.Processors.Controllers.Bia
{
    class ProjectsTreeStageTagProcessor : IProjectsTreeStageTagProcessor
    {
        private readonly IProjectsTreeStageTagQueryProcessor _queryProcessor;

        public ProjectsTreeStageTagProcessor(IProjectsTreeStageTagQueryProcessor queryProcessor)
        {
            _queryProcessor = queryProcessor;
        }

        public string Post(int cluster, int record, object p)
        {
            return _queryProcessor.Post(cluster, record, p);
        }
    }
}