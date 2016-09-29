using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Newtonsoft.Json.Linq;

namespace WebApiBia.Data.QueryProcessors.Bia
{
    public interface ITemplateExportQueryProcessor
    {
       string Get(object p);
       string Post(object p);
    }
}
