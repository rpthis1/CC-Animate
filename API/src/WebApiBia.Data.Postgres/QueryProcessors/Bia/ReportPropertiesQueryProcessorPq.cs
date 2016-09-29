using WebApiBia.Data.Postgres.Clients;
using WebApiBia.Data.QueryProcessors.Bia;
using WebApiBia.Web.Models.DataMapper;

namespace WebApiBia.Data.Postgres.QueryProcessors.Bia
{
    public class ReportPropertiesQueryProcessorPq : IReportPropertiesQueryProcessor
    {
        private readonly ReportPropertiesClientPq _client = new ReportPropertiesClientPq();

        public string Get(object p)
        {
            VertexParentPropertiesModel vertexParent = (VertexParentPropertiesModel)p;
            return _client.Get(vertexParent.Cluster, vertexParent.Record, vertexParent.ClusterOwner, vertexParent.RecordOwner);
        }
    }
}
