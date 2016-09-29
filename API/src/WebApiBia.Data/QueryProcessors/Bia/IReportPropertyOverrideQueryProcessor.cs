using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace WebApiBia.Data.QueryProcessors.Bia
{
   public interface IReportPropertyOverrideQueryProcessor
   {
       string Get(object p);
       string Post(object p, object o);
       string Put(object p, object o);
   }
}
