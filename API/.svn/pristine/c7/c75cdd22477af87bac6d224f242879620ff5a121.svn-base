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
    public class LogicalEdgeQueryProcessor : ILogicalEdgeQueryProcessor
    {
        private readonly ILogicalEdgeClient _client;

        public LogicalEdgeQueryProcessor()
        {
            _client = WebContainerManager.Get<ILogicalEdgeClient>();
        }


        public string Delete(object p,object o)
        {
            VertexParentPropertiesModel vertexParent = (VertexParentPropertiesModel) p;
            return _client.Delete(vertexParent.Cluster, vertexParent.Record, vertexParent.ClusterOwner, vertexParent.RecordOwner,o);
        }

    }
}
