using WebApiBia.Data.Postgres.Clients;
using WebApiBia.Data.QueryProcessors.Bia;

namespace WebApiBia.Data.Postgres.QueryProcessors.Bia
{
    public class ReportPropertyQueryProcessorPq : IReportPropertyQueryProcessor
    {
        private readonly ReportPropertyClientPq _client = new ReportPropertyClientPq();


        public string Put(int cluster, int record, object p)
        {
            return _client.Put(cluster, record, p);
        }
    }
}
