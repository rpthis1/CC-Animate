using WebApiBia.Data.QueryProcessors.Bia;
using WebApiBia.Web.Common;

namespace WebApiBia.Web.Api.Core.Processors.Controllers.Bia
{
    class LogicalEdgeProcessor : ILogicalEdgeProcessor
    {
        private readonly ILogicalEdgeQueryProcessor _queryProcessor;
        public LogicalEdgeProcessor()
        {
            _queryProcessor = WebContainerManager.Get<ILogicalEdgeQueryProcessor>();
        }

        public string Delete(object p, object o)
        {
            return _queryProcessor.Delete(p,o);
        }
    }
}