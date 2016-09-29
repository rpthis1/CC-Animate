using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace WebApiBia.Data.OrientDb.Clients
{
    public interface IEdgesClient
    {
        string Delete(int cluster, int record);
    }
}
