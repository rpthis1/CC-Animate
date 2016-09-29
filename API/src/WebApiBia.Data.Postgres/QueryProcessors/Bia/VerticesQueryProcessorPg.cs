using System;
using WebApiBia.Data.Postgres.Clients;
using WebApiBia.Data.QueryProcessors.Bia;

namespace WebApiBia.Data.Postgres.QueryProcessors.Bia
{
    public class VerticesQueryProcessorPg : IVerticesQueryProcessor
    {
        private readonly VerticesClientPg _verticesClient = new VerticesClientPg();

        public string Get(Object type)
        {
            return _verticesClient.Get(type);
        }

        public string Post(object type)
        {
            return _verticesClient.Post(type);
        }
        public string Put(int cluster, int record, object type)
        {
            return _verticesClient.Put(cluster, record, type);
        }

        public string Delete(int cluster, int record)
        {
            return _verticesClient.Delete(cluster, record);
        }
    }
}
