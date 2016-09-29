using WebApiBia.Data.OrientDb.Clients;
using WebApiBia.Data.QueryProcessors.Bia;
using WebApiBia.Web.Common;

namespace WebApiBia.Data.OrientDb.QueryProcessors.Bia
{
    public class ReorderTreeQueryProcessor : IReorderTreeQueryProcessor
    {
         private readonly IReorderTreeClient _client;

        public ReorderTreeQueryProcessor()
        {
            _client = WebContainerManager.Get<IReorderTreeClient>();
        }
        public string Put(object p)
        {
            return _client.Put(p);
        }
    }
}