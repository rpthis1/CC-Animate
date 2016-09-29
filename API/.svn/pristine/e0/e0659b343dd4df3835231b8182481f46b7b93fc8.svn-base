using WebApiBia.Data.Postgres.Clients;
using WebApiBia.Data.QueryProcessors.Bia;

namespace WebApiBia.Data.Postgres.QueryProcessors.Bia
{
   public class TemplateReportQueryProcessorPq : ITemplateReportQueryProcessor
   {
       private readonly TemplateReportClientPq _client = new TemplateReportClientPq();


       public string Post(int cluster, int record, object p)
       {
          return _client.Post(cluster, record, p);
       }
    }
}
