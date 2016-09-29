using WebApiBia.Data.QueryProcessors.Bia;
using WebApiBia.Web.Common;

namespace WebApiBia.Web.Api.Core.Processors.Controllers.Bia
{
    class EdgesProcessor : IEdgesProcessor
    {
          private readonly IEdgesQueryProcessor _queryProcessor;


        public EdgesProcessor()
        {
            _queryProcessor = WebContainerManager.Get<IEdgesQueryProcessor>();
        }

        public string Delete(int cluster, int record)
        {
            return _queryProcessor.Delete(cluster, record);
        }
    }
}