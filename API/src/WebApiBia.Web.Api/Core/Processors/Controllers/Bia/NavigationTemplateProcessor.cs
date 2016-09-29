using WebApiBia.Data.QueryProcessors.Bia;

namespace WebApiBia.Web.Api.Core.Processors.Controllers.Bia
{
    class NavigationTemplateProcessor : INavigationTemplateProcessor
    {
         private readonly INavigationTemplateQueryProcessor _queryProcessor;

         public NavigationTemplateProcessor(INavigationTemplateQueryProcessor queryProcessor)
        {
            _queryProcessor = queryProcessor;
        }
        public string Post(int cluster, int record, object p)
        {
            return _queryProcessor.Post(cluster, record, p);
        }
    }
}