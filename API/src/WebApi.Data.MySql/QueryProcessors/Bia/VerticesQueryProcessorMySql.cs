using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WebApi.Data.MySql.Clients;
using WebApiBia.Data.QueryProcessors.Bia;

namespace WebApi.Data.MySql.QueryProcessors.Bia
{
    public class VerticesQueryProcessorMySql : IVerticesQueryProcessor
    {
        private readonly VerticesClientMySql _verticesClient = new VerticesClientMySql();

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
