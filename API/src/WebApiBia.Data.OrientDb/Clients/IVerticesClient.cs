using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace WebApiBia.Data.OrientDb.Clients
{
    public interface IVerticesClient
    {
        string Get(Object type);
        string Post(Object type);
        string Put(int cluster, int record, Object type);
        string Delete(int cluster, int record);

    }
}
