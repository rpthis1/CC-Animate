using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace WebApiBia.Data.OrientDb.Clients
{
  public interface IGenericTreeClient
  {
        string Get(object type);
        string Get(int cluster, int record);
    }
}
