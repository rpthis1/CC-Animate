using System.Runtime.InteropServices;
using WebApiBia.Data.OrientDb.Clients;
using WebApiBia.Data.QueryProcessors.Bia;
using WebApiBia.Web.Common;
using WebApiBia.Web.Models.DataMapper;

namespace WebApiBia.Data.OrientDb.QueryProcessors.Bia
{
    public class ContentTreeTemplateOwnerQueryProcessor : IContentTreeTemplateOwnerQueryProcessor
    {
        private readonly IContentTreeTemplateOwnerClient _client;

        public ContentTreeTemplateOwnerQueryProcessor()
        {
            _client = WebContainerManager.Get<IContentTreeTemplateOwnerClient>();
        }

        public string Get(object p)
        {
            var vertexParent = (VertexParentPropertiesModel) p;
            return _client.Get(vertexParent.Cluster, vertexParent.Record,vertexParent.ClusterOwner,vertexParent.RecordOwner);
        }
  

    }
}