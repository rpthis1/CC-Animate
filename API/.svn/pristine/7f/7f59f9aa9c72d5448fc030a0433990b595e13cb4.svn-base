using WebApiBia.Data.Postgres.Clients;
using WebApiBia.Data.QueryProcessors.Bia;
using WebApiBia.Web.Models.DataMapper;

namespace WebApiBia.Data.Postgres.QueryProcessors.Bia
{
    public class LogicalEdgeQueryProcessorPq : ILogicalEdgeQueryProcessor
    {
        private readonly LogicalEdgeClientPq _client = new LogicalEdgeClientPq();

        public string Delete(object p,object o)
        {
           VertexParentPropertiesModel vertexParent = (VertexParentPropertiesModel) p;
           return _client.Delete(vertexParent.Cluster, vertexParent.Record, vertexParent.ClusterOwner, vertexParent.RecordOwner,o);
        }

    }
}
