using WebApiBia.Data.QueryProcessors.Bia;
using WebApiBia.Web.Common;

namespace WebApiBia.Web.Api.Core.Processors.Controllers.Bia
{
    class ReorderTreeProcessor : IReorderTreeProcessor
    {
         private readonly IReorderTreeQueryProcessor _processor;
         public ReorderTreeProcessor()
        {
            _processor = WebContainerManager.Get<IReorderTreeQueryProcessor>();
        }
        public string Put(object p)
        {
            return _processor.Put(p);
        }
    }
}