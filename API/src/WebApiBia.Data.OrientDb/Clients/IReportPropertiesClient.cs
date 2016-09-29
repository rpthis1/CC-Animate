using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace WebApiBia.Data.OrientDb.Clients
{
    public interface IReportPropertiesClient
    {
        string Get(int cluster, int record, int clusterowner, int recordowner);
    }
}
