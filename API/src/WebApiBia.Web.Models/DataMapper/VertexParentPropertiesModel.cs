using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace WebApiBia.Web.Models.DataMapper
{
    public class VertexParentPropertiesModel
    {
        public int Cluster { get; set; }
        public int Record { get; set; }
        public int ClusterOwner { get; set; }
        public int RecordOwner { get; set; }
    }

}
