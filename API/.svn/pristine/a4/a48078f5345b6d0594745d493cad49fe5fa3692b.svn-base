using WebApiBia.Data.QueryProcessors.Bia;

namespace WebApiBia.Web.Api.Core.Processors.Controllers.Bia
{
    class TemplateTabProcessor : ITemplateTabProcessor
    {

        private readonly ITemplateTabQueryProcessor _processor;
        public TemplateTabProcessor(ITemplateTabQueryProcessor processor)
        {
            _processor = processor;
        }

        public string Post(int cluster, int record, object p)
        {
            return _processor.Post(cluster, record, p);
        }
    }
}