﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace WebApiBia.Data.OrientDb.Clients
{
    public interface INavigationTreeFetchClient
  {
        string Get(int cluster, int record, int clusterOwern, int recordOwner);
    }
}
