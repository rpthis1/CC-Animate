using WebApiBia.Data.Postgres.Clients;
using WebApiBia.Data.QueryProcessors.Bia;

namespace WebApiBia.Data.Postgres.QueryProcessors.Bia
{
    public class ReorderTreeQueryProcessorPq : IReorderTreeQueryProcessor
    {
        private readonly ReorderTreeClientPq _client = new ReorderTreeClientPq();


        public string Put(object p)
        {
            return _client.Put(p);
        }
    }
}