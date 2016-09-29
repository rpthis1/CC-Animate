using WebApiBia.Data.QueryProcessors.Bia;
using WebApiBia.Web.Common;

namespace WebApiBia.Web.Api.Core.Processors.Controllers.Bia
{
    public class ContentTreeProcessor : IContentTreeProcessor
    {
         private readonly IContentTreeQueryProcessor _processor;
         public ContentTreeProcessor()
        {
            _processor = WebContainerManager.Get<IContentTreeQueryProcessor>();
        }

        public string Get(object type)
        {
            return _processor.Get(type);
        }

        public string Get(int cluster, int record)
        {
            return _processor.Get(cluster, record);
        }
    }
}