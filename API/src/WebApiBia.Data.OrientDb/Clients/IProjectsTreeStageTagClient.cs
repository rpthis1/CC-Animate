﻿using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace WebApiBia.Data.OrientDb.Clients
{
    public interface IProjectsTreeStageTagClient
    {
        string Post(int cluster, int record, object p);
    }
}