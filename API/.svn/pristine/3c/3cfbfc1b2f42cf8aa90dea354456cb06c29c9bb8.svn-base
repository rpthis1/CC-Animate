using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WebApiBia.Data.OrientDb.Clients;
using WebApiBia.Data.QueryProcessors.Bia;
using WebApiBia.Web.Common;

namespace WebApiBia.Data.OrientDb.QueryProcessors.Bia
{
    public class ContentTreeQueryProcessor : IContentTreeQueryProcessor
    {
        private readonly IContentTreeClient _client;

        public ContentTreeQueryProcessor()
        {
            _client = WebContainerManager.Get<IContentTreeClient>();
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
