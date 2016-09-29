using WebApiBia.Web.Models.DataMapper;

namespace WebApiBia.Web.Models.Factory.DataMapper
{
    public class DataMapper : IDataMapper
    {
        public VertexPropertiesModel MapVertex(int cluster, int record)
        {
            return new VertexPropertiesModel()
            {
                Cluster = cluster,
                Record = record
            };
        }

        public VertexParentPropertiesModel MapVertexParent(int cluster, int record, int clusterOnwer, int recordOwner)
        {
            return new VertexParentPropertiesModel()
            {
                Cluster = cluster,
                Record = record,
                ClusterOwner = clusterOnwer,
                RecordOwner = recordOwner
            };
        }
    }
}