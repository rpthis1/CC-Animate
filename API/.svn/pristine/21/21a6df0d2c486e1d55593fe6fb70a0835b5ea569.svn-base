using WebApiBia.Data.Postgres.Clients;
using WebApiBia.Data.QueryProcessors.Bia;

namespace WebApiBia.Data.Postgres.QueryProcessors.Bia
{
   public class TemplateTabQueryProcessorPq : ITemplateTabQueryProcessor
   {
       private readonly TemplateTabClientPq _client = new TemplateTabClientPq();


       public string Post(int cluster, int record, object p)
       {
           return _client.Post(cluster, record, p);
       }
    }
}
