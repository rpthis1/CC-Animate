using WebApiBia.Dashboard.Core.ContentTreeTemplateOwnerPostProcessor;
using WebApiBia.Data.QueryProcessors.Bia;
using WebApiBia.Web.Common;

namespace WebApiBia.Web.Api.Core.Processors.Controllers.Bia
{
    class ContentTreeTemplateOwnerProcessor : IContentTreeTemplateOwnerProcessor
    {
        private readonly IContentTreeTemplateOwnerQueryProcessor _processor;
        private readonly IContentTreeTemplateOwnerPostProcessor _postProcessor;
        public ContentTreeTemplateOwnerProcessor()
        {
            _processor = WebContainerManager.Get<IContentTreeTemplateOwnerQueryProcessor>();
            _postProcessor = WebContainerManager.Get<IContentTreeTemplateOwnerPostProcessor>();
        }

        public string Get(object p, bool onlyLeafs)
        {
            string result = _processor.Get(p);
            result =  _postProcessor.Process(result, onlyLeafs, p);
            return result;

        }

    }
}