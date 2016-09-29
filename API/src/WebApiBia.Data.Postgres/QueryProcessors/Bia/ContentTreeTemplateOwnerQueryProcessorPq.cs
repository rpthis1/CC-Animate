using WebApiBia.Data.Postgres.Clients;
using WebApiBia.Data.QueryProcessors.Bia;
using WebApiBia.Web.Models.DataMapper;

namespace WebApiBia.Data.Postgres.QueryProcessors.Bia
{
    public class ContentTreeTemplateOwnerQueryProcessorPq : IContentTreeTemplateOwnerQueryProcessor
    {
        private readonly ContentTreeTemplateOwnerClientPq _client = new ContentTreeTemplateOwnerClientPq();



        public string Get(object p)
        {
            var vertexParent = (VertexParentPropertiesModel)p;
            return _client.Get(vertexParent.Cluster, vertexParent.Record, vertexParent.ClusterOwner, vertexParent.RecordOwner);
        }
 
    }
}