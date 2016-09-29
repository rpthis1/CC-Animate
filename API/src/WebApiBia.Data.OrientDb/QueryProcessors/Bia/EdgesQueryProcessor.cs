using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WebApiBia.Data.OrientDb.Clients;
using WebApiBia.Data.QueryProcessors.Bia;
using WebApiBia.Web.Common;

namespace WebApiBia.Data.OrientDb.QueryProcessors.Bia
{
    public class EdgesQueryProcessor : IEdgesQueryProcessor
    {
        private readonly IEdgesClient _client;

        public EdgesQueryProcessor()
        {
            _client = WebContainerManager.Get<IEdgesClient>();
        }


        public string Delete(int cluster, int record)
        {
            return _client.Delete(cluster, record);
        }

    }
}
