using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WebApiBia.Data.OrientDb.Clients;
using WebApiBia.Data.QueryProcessors.Bia;
using WebApiBia.Web.Common;

namespace WebApiBia.Data.OrientDb.QueryProcessors.Bia
{
    public class VerticesQueryProcessor : IVerticesQueryProcessor
    {
        private readonly IVerticesClient _verticesClient;

        public VerticesQueryProcessor()
        {
            this._verticesClient = WebContainerManager.Get<IVerticesClient>();
        }
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
