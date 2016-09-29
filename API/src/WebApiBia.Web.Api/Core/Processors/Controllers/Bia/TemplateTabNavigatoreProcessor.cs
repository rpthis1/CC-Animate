using WebApiBia.Data.QueryProcessors.Bia;

namespace WebApiBia.Web.Api.Core.Processors.Controllers.Bia
{
    class TemplateTabNavigatoreProcessor : ITemplateTabNavigatoreProcessor
    {
        private readonly ITemplateTabNavigatorQueryProcessor _processor;
        public TemplateTabNavigatoreProcessor(ITemplateTabNavigatorQueryProcessor processor)
        {
            _processor = processor;
        }

        public string Post(int cluster, int record, object p)
        {
            return _processor.Post(cluster, record, p);
        }
    }
}