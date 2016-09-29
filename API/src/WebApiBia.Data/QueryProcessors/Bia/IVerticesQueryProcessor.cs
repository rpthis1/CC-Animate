using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace WebApiBia.Data.QueryProcessors.Bia
{
    public interface IVerticesQueryProcessor 
    {
        string Get(Object type);
        string Post(Object type);
        string Put(int cluster, int record, Object type);
        string Delete(int cluster, int record);
    }
}
