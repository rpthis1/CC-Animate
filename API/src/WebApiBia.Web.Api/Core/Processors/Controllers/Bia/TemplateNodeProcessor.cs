using System;
using WebApiBia.Data.QueryProcessors.Bia;

namespace WebApiBia.Web.Api.Core.Processors.Controllers.Bia
{
    class TemplateNodeProcessor : ITemplateNodeProcessor
    {
        private readonly ITemplateNodeQueryProcessor _queryProcessor;
        public TemplateNodeProcessor(ITemplateNodeQueryProcessor queryProcessor)
        {
            _queryProcessor = queryProcessor;
        }

        public string Post(int cluster, int record, object p)
        {
           return  _queryProcessor.Post(cluster, record, p);
        }
    }
}