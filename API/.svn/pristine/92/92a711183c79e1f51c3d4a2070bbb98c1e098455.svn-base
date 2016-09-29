using WebApiBia.Data.Postgres.Clients;
using WebApiBia.Data.QueryProcessors.Bia;

namespace WebApiBia.Data.Postgres.QueryProcessors.Bia
{
    public class NavigationTreeNodeQueryProcessorPq : INavigationTreeNodeQueryProcessor
    {
         private readonly NavigationTreeNodeClientPq _client = new NavigationTreeNodeClientPq();

        public string Post(int cluster, int record, object p)
        {
            return _client.Post(cluster, record,p);
        }
    }
}
