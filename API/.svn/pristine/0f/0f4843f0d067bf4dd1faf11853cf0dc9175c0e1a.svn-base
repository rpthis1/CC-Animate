using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WebApiBia.Data.OrientDb.Clients;
using WebApiBia.Data.QueryProcessors.Bia;
using WebApiBia.Web.Common;

namespace WebApiBia.Data.OrientDb.QueryProcessors.Bia
{
    public class NavigationTreeNodeQueryProcessor : INavigationTreeNodeQueryProcessor
    {
        private readonly INavigationTreeNodeClient _client;

        public NavigationTreeNodeQueryProcessor()
        {
            _client = WebContainerManager.Get<INavigationTreeNodeClient>();
        }


        public string Post(int cluster, int record, object p)
        {
            return _client.Post(cluster, record,p);
        }
    }
}
