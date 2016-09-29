using WebApiBia.Data.Postgres.Clients;
using WebApiBia.Data.QueryProcessors.Bia;

namespace WebApiBia.Data.Postgres.QueryProcessors.Bia
{
    public class GenericTreeQueryProcessorPq : IGenericTreeQueryProcessor
    {
        private readonly GenericTreeClientPq _genericTreeClient = new GenericTreeClientPq();

        public string Get(object type)
        {
            return _genericTreeClient.Get(type);
        }
        public string Get(int cluster, int record)
        {
            return _genericTreeClient.Get(cluster, record);
        }
    }
}
