using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WebApiBia.Data.OrientDb.Clients;
using WebApiBia.Data.QueryProcessors.Bia;
using WebApiBia.Web.Common;

namespace WebApiBia.Data.OrientDb.QueryProcessors.Bia
{
    public class GenericTreeQueryProcessor : IGenericTreeQueryProcessor
    {
        private readonly IGenericTreeClient _genericTreeClient;

        public GenericTreeQueryProcessor()
        {
            _genericTreeClient = WebContainerManager.Get<IGenericTreeClient>();
        }

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
