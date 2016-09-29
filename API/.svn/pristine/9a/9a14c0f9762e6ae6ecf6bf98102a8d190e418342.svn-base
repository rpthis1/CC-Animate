using WebApiBia.Data.Postgres.Clients;
using WebApiBia.Data.QueryProcessors.Bia;

namespace WebApiBia.Data.Postgres.QueryProcessors.Bia
{
    public class ContentTreeQueryProcessorPq : IContentTreeQueryProcessor
    {
        private readonly ContentTreeClientPq _client = new ContentTreeClientPq();

        public string Get(object type)
        {
            return _client.Get(type);
        }
        public string Get(int cluster, int record)
        {
            return _client.Get(cluster, record);
        }
    }
}
