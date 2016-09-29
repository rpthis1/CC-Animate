using WebApiBia.Common.Json;
using WebApiBia.Dashboard.Core.ContentTreeFetchAllVertexPropertiesListExtractor;
using WebApiBia.Dashboard.Core.ContentTreeFetchExtractor;
using WebApiBia.Dashboard.Core.DecoratorProcessor.Controls;
using WebApiBia.Data.QueryProcessors.Bia;
using WebApiBia.Web.Common;

namespace WebApiBia.Web.Api.Core.Processors.Controllers.Bia
{
    class ContentTreeFetchEnabledParameterListProcessor : IContentTreeFetchEnabledParameterListProcessor
    {
        private readonly IContentTreeFetchQueryProcessor _querProcessor;
        private readonly ContentTreeFetchAllVertexParametersListExtractor _contentTreeFetchExtractor = new ContentTreeFetchAllVertexParametersListExtractor();
        private readonly IJsonHelper _json;
        private readonly IDesktopPlatformContentTreeFetchControlsDecorator _contentTreeFetchDecorator;
        public ContentTreeFetchEnabledParameterListProcessor(IContentTreeFetchQueryProcessor querProcessor, IContentTreeFetchExtractor contentTreeFetchExtractor)
        {
            _querProcessor = querProcessor;
            _json = WebContainerManager.Get<IJsonHelper>();
            _contentTreeFetchDecorator = WebContainerManager.Get<IDesktopPlatformContentTreeFetchControlsDecorator>();
        }

        public string Get(object p)
        {
            string json = _querProcessor.Get(p);
            _contentTreeFetchExtractor.Extract(json, true);
            return _json.Serialize(_contentTreeFetchExtractor.GetContainersList());

        }
    }
}