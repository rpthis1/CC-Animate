using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WebApiBia.Data.OrientDb.Clients;
using WebApiBia.Data.QueryProcessors.Bia;
using WebApiBia.Web.Common;

namespace WebApiBia.Data.OrientDb.QueryProcessors.Bia
{
    public class NavigationTreeQueryProcessor : INavigationTreeQueryProcessor
    {
        private readonly INavigationTreeClient _client;

        public NavigationTreeQueryProcessor()
        {
            _client = WebContainerManager.Get<INavigationTreeClient>();
        }

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
