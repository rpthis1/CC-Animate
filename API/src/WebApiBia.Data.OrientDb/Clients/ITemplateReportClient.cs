using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace WebApiBia.Data.OrientDb.Clients
{
    public interface ITemplateReportClient
    {
        string Post(int cluster, int record, object p);
    }
}
