using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WebApiBia.Data.OrientDb.Clients;
using WebApiBia.Data.QueryProcessors.Bia;
using WebApiBia.Web.Common;

namespace WebApiBia.Data.OrientDb.QueryProcessors.Bia
{
    public class NavigationTemplateQueryProcessor : INavigationTemplateQueryProcessor
    {
        private readonly INavigationTemplateClient _client;

        public NavigationTemplateQueryProcessor()
        {
            _client = WebContainerManager.Get<INavigationTemplateClient>();
        }
        public string Post(int cluster, int record, object p)
        {
            return _client.Post(cluster, record, p);
        }
    }
}
