using System;
using WebApiBia.Data.QueryProcessors.Bia;

namespace WebApiBia.Web.Api.Core.Processors.Controllers.Bia
{
    public class ReportPropertyProcessor : IReportPropertyProcessor
    {
          private readonly IReportPropertyQueryProcessor _processor;
          public ReportPropertyProcessor(IReportPropertyQueryProcessor processor)
        {
            _processor = processor;
        }

        public string Put(int cluster, int record, object p)
        {
            return _processor.Put(cluster, record, p);
        }
    }
}