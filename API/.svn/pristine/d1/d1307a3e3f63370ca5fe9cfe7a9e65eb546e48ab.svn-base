using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WebApiBia.Data.OrientDb.Clients;
using WebApiBia.Data.QueryProcessors.Bia;
using WebApiBia.Web.Common;

namespace WebApiBia.Data.OrientDb.QueryProcessors.Bia
{
    public class ReportPropertyQueryProcessor : IReportPropertyQueryProcessor
    {
        private readonly IReportPropertyClient _client;

        public ReportPropertyQueryProcessor()
        {
            _client = WebContainerManager.Get<IReportPropertyClient>();
        }
        public string Put(int cluster, int record, object p)
        {
            return _client.Put(cluster, record, p);
        }
    }
}
