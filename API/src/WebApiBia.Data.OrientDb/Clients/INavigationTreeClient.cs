using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace WebApiBia.Data.OrientDb.Clients
{
    public interface INavigationTreeClient
  {
        string Get(object type);
        string Get(int cluster, int record);
    }
}
