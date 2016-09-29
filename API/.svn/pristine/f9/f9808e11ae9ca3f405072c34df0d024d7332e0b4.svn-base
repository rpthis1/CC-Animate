using WebApiBia.Data.QueryProcessors.Bia;

namespace WebApiBia.Web.Api.Core.Processors.Controllers.Bia
{
    class TemplateReportProcessor : ITemplateReportProcessor
    {
       private readonly ITemplateReportQueryProcessor _processor;
       public TemplateReportProcessor(ITemplateReportQueryProcessor processor)
        {
            _processor = processor;
        }

        public string Post(int cluster, int record, object p)
        {
            return _processor.Post(cluster, record, p);
        }
    }
}