using WebApiBia.Dashboard.Core.NavigationTreePostProcessor;
using WebApiBia.Data.QueryProcessors.Bia;
using WebApiBia.Web.Common;

namespace WebApiBia.Web.Api.Core.Processors.Controllers.Bia
{
    class NavigaionTreeProcessor : INavigaionTreeProcessor
    {
        private readonly INavigationTreeQueryProcessor _processor;
        private readonly INavigationTreePostProcessor _postProcessor;
        public NavigaionTreeProcessor()
        {
            _processor = WebContainerManager.Get<INavigationTreeQueryProcessor>();
            _postProcessor = WebContainerManager.Get<INavigationTreePostProcessor>();
        }

        public string Get(object type)
        {
            return _processor.Get(type);
        }

        public string Get(int cluster, int record, bool onlyLeafs)
        {
            string result =  _processor.Get(cluster, record);
            result = _postProcessor.Process(result, onlyLeafs);
            return result;
        }
    }
}