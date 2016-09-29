using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApiBia.Web.Api.Core.Processors.Controllers.Bia
{
    public interface INavigaionTreeProcessor
    {
        string Get(object type);
        string Get(int cluster, int record, bool onlyLeafs);
    }
}