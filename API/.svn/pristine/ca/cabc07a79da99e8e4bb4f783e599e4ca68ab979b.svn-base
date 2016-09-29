using WebApiBia.Data.Postgres.Clients;
using WebApiBia.Data.QueryProcessors.Bia;

namespace WebApiBia.Data.Postgres.QueryProcessors.Bia
{
   public class TemplateTabNavigatoreQueryProcessorPq : ITemplateTabNavigatorQueryProcessor
   {
       private readonly TemplateTabNavigatorClientPq _client = new TemplateTabNavigatorClientPq();


       public string Post(int cluster, int record, object p)
       {
           return _client.Post(cluster, record, p);
       }
    }
}
