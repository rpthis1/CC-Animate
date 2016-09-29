using WebApiBia.Data.Postgres.Clients;
using WebApiBia.Data.QueryProcessors.Bia;

namespace WebApiBia.Data.Postgres.QueryProcessors.Bia
{
    public class NavigationTreeQueryProcessorPq : INavigationTreeQueryProcessor
    {
        private readonly NavigationTreeClientPq _client = new NavigationTreeClientPq();

        public string Get(object type)
        {
            return _client.Get(type);
        }
        public string Get(int cluster, int record)
        {
            string result =  _client.Get(cluster, record);
            return result;
        }
    }
}
