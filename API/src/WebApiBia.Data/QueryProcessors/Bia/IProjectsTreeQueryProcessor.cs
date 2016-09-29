using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace WebApiBia.Data.QueryProcessors.Bia
{
    public interface IProjectsTreeQueryProcessor
    {
        string Get(int cluster, int record);
    }
}
