using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WebApiBia.Data.OrientDb.Clients;
using WebApiBia.Data.QueryProcessors.Bia;
using WebApiBia.Web.Common;
using WebApiBia.Web.Models.DataMapper;

namespace WebApiBia.Data.OrientDb.QueryProcessors.Bia
{
    public class NavigationTreeFetchQueryProcessor : INavigationTreeFetchQueryProcessor
    {
        private readonly INavigationTreeFetchClient _client;

        public NavigationTreeFetchQueryProcessor()
        {
            _client = WebContainerManager.Get<INavigationTreeFetchClient>();
        }


        public string Get(object p)
        {
            VertexParentPropertiesModel vertexParent = (VertexParentPropertiesModel) p;
            return _client.Get(vertexParent.Cluster, vertexParent.Record, vertexParent.ClusterOwner,vertexParent.RecordOwner);
        }
    }
}
