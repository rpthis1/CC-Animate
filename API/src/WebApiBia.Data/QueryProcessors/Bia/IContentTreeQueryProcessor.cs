using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace WebApiBia.Data.QueryProcessors.Bia
{
   public interface IContentTreeQueryProcessor
    {
        string Get(object type);
        string Get(int cluster, int record);
    }
}
