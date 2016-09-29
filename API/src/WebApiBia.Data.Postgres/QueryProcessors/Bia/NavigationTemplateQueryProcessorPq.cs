using WebApiBia.Data.Postgres.Clients;
using WebApiBia.Data.QueryProcessors.Bia;

namespace WebApiBia.Data.Postgres.QueryProcessors.Bia
{
    public class NavigationTemplateQueryProcessorPq : INavigationTemplateQueryProcessor
    {
         private readonly NavigationTemplateClientPq _client = new NavigationTemplateClientPq();


        public string Post(int cluster, int record, object p)
        {
            return _client.Post(cluster, record, p);
        }
    }
}
