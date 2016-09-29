using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace WebApiBia.Data.OrientDb.Clients
{
    public interface ILogicalEdgeClient
    {
        string Delete(int cluster, int record, int clusterOwner, int recordOwner, object o);
    }
}
