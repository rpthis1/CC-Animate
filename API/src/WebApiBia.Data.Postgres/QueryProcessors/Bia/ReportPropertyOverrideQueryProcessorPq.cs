using System;
using WebApiBia.Data.Postgres.Clients;
using WebApiBia.Data.QueryProcessors.Bia;
using WebApiBia.Web.Models.DataMapper;

namespace WebApiBia.Data.Postgres.QueryProcessors.Bia
{
    public class ReportPropertyOverrideQueryProcessorPq : IReportPropertyOverrideQueryProcessor
    {
        private readonly ReportPropertyOverrideClientPq _client = new ReportPropertyOverrideClientPq();


        public string Get(object p)
        {
            VertexParentPropertiesModel vertexParent = (VertexParentPropertiesModel)p;
            return _client.Get(vertexParent.Cluster, vertexParent.Record, vertexParent.ClusterOwner, vertexParent.RecordOwner);

        }

        public string Post(object p, object o)
        {
            VertexParentPropertiesModel vertexParent = (VertexParentPropertiesModel)p;
            return _client.Post(vertexParent.Cluster, vertexParent.Record, vertexParent.ClusterOwner, vertexParent.RecordOwner, o);
        }

        public string Put(object p, object o)
        {
            VertexParentPropertiesModel vertexParent = (VertexParentPropertiesModel)p;
            return _client.Put(vertexParent.Cluster, vertexParent.Record, vertexParent.ClusterOwner, vertexParent.RecordOwner, o);
        }
    }
}
