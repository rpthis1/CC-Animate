using WebApiBia.Data.Postgres.Clients;
using WebApiBia.Data.QueryProcessors.Bia;

namespace WebApiBia.Data.Postgres.QueryProcessors.Bia
{
    public class TemplateNodeQueryProcessorPq : ITemplateNodeQueryProcessor
    {
        private readonly TemplateNodeClientPq _client = new TemplateNodeClientPq();

        public string Post(int cluster, int record, object p)
        {
            return _client.Post(cluster, record, p);
        }
    }
}
