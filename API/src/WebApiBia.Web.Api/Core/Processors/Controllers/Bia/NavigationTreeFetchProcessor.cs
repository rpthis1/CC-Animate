using WebApiBia.Common.Json;
using WebApiBia.Dashboard.Core.ContentTreeFetchExtractor;
using WebApiBia.Dashboard.Core.ContentTreeTemplateOwnerPostProcessor;
using WebApiBia.Dashboard.Core.Dto.NavigationTree;
using WebApiBia.Dashboard.Core.NavigationTreeFetchExtractor;
using WebApiBia.Data.QueryProcessors.Bia;
using WebApiBia.Web.Common;

namespace WebApiBia.Web.Api.Core.Processors.Controllers.Bia
{
    class NavigationTreeFetchProcessor : INavigationTreeFetchProcessor
    {
        private readonly INavigationTreeFetchQueryProcessor _querProcessor;
        private readonly INavigationTreeFetchExtractor _navigationTreeFetchExtractor;
         private readonly IJsonHelper _json;
        public NavigationTreeFetchProcessor(INavigationTreeFetchQueryProcessor querProcessor)
        {
            _querProcessor = querProcessor;
            _json = WebContainerManager.Get<IJsonHelper>();
            _navigationTreeFetchExtractor = WebContainerManager.Get<INavigationTreeFetchExtractor>();
        }

        public string Get(object p, bool includeOnlyEnabled)
        {
            string json = _querProcessor.Get(p);
            TreeParent parent = _navigationTreeFetchExtractor.Extract(json, includeOnlyEnabled);

            return _json.Serialize(parent);
        }
    }
}