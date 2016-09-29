using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace WebApiBia.Data.OrientDb.Clients
{
     public interface  IReportClient
    {
        string Get(int cluster, int record);

    }

    class ReportClient : IReportClient
    {
        public string Get(int cluster, int record)
        {
            throw new NotImplementedException();
        }
    }
}
