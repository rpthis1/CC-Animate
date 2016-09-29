using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApiBia.Web.Api.Core.Processors.Controllers.BiaAdmin
{
    public interface IUtbEntriesProcessor
    {
        string Get(string utbEntityId, string entityValueType);
        string Put(object p);
        string Post(object p);
        string Delete(object p);
    }
}