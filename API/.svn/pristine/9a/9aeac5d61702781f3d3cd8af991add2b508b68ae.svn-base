using WebApiBia.Data.QueryProcessors.Bia;

namespace WebApiBia.Web.Api.Core.Processors.Controllers.Bia
{
    class NavigationTreeNodeProcessor : INavigationTreeNodeProcessor
    {
        private readonly INavigationTreeNodeQueryProcessor _queryProcessor;

        public NavigationTreeNodeProcessor(INavigationTreeNodeQueryProcessor queryProcessor)
        {
            _queryProcessor = queryProcessor;
        }

        public string Post(int cluster, int record, object p)
        {
            return _queryProcessor.Post(cluster, record, p);
        }
    }
}