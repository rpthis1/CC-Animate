using System.ComponentModel;
using WebApiBia.Common.Json;
using WebApiBia.Dashboard.Core.ContentTreeFetchExtractor;
using WebApiBia.Dashboard.Core.DecoratorProcessor.Controls;
using WebApiBia.Dashboard.Core.Dto.NavigationTree;
using WebApiBia.Data.OrientDb.Clients;
using WebApiBia.Data.QueryProcessors.Bia;
using WebApiBia.Web.Common;

namespace WebApiBia.Web.Api.Core.Processors.Controllers.Bia
{
    class ContentTreeFetchProcessor : IContentTreeFetchProcessor
    {
        private readonly IContentTreeFetchQueryProcessor _querProcessor;
        private readonly IContentTreeFetchExtractor _contentTreeFetchExtractor;
        private readonly IJsonHelper _json;
        private readonly IDesktopPlatformContentTreeFetchControlsDecorator _contentTreeFetchDecorator;
        public ContentTreeFetchProcessor(IContentTreeFetchQueryProcessor querProcessor, IContentTreeFetchExtractor contentTreeFetchExtractor  )
        {
            _querProcessor = querProcessor;
            _contentTreeFetchExtractor = contentTreeFetchExtractor;
            _json = WebContainerManager.Get<IJsonHelper>();
            _contentTreeFetchDecorator = WebContainerManager.Get<IDesktopPlatformContentTreeFetchControlsDecorator>();
        }

        public string Get(object p)
        {
            string json = _querProcessor.Get(p);
            TreeParent parent = _contentTreeFetchExtractor.Extract(json,true);
            _contentTreeFetchDecorator.Decorate(parent, _contentTreeFetchExtractor.GetReportsContainers(), p);

            return _json.Serialize(parent);

        }
    }
}