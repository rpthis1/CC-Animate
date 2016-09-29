using System;
using WebApiBia.Common.Json;
using WebApiBia.Dashboard.Core.ContentTreeFetchExtractor;
using WebApiBia.Dashboard.Core.ContentTreeFetchMobileExtractor;
using WebApiBia.Dashboard.Core.DecoratorProcessor.Controls;
using WebApiBia.Dashboard.Core.Dto.NavigationTree;
using WebApiBia.Dashboard.Core.NavigationTreeFetchExtractor;
using WebApiBia.Data.QueryProcessors.Bia;
using WebApiBia.Web.Api.Core.Processors.Controllers.Bia;
using WebApiBia.Web.Common;
using WebApiBia.Web.Models.DataMapper;
using WebApiBia.Web.Models.Factory.DataMapper;

namespace WebApiBia.Web.Api.Core.Processors.Controllers.BiaMobile
{
    class NavigationTreeFetchMobileProcessor : INavigationTreeFetchMobileProcessor
    {
        private readonly INavigationTreeFetchQueryProcessor _navigationTreeFetchQueryProcessor;
        private readonly INavigationTreeFetchExtractor _navigationTreeFetchExtractor;
        private readonly IContentTreeFetchQueryProcessor _contentTreeFetchQueryProcessor;
        private readonly IContentTreeFetchMobileExtractor _contentTreeFetchMobileExtractor;

     
        private readonly IJsonHelper _json;
        private readonly IDataMapper _mapper;

        public NavigationTreeFetchMobileProcessor(INavigationTreeFetchQueryProcessor querProcessor)
        {
            _navigationTreeFetchQueryProcessor = WebContainerManager.Get<INavigationTreeFetchQueryProcessor>();
            _navigationTreeFetchExtractor = WebContainerManager.Get<INavigationTreeFetchExtractor>();
            _contentTreeFetchQueryProcessor = WebContainerManager.Get<IContentTreeFetchQueryProcessor>();
            _contentTreeFetchMobileExtractor = WebContainerManager.Get<IContentTreeFetchMobileExtractor>();
            
            _mapper = WebContainerManager.Get<IDataMapper>();
            _json = WebContainerManager.Get<IJsonHelper>();
        }

        public string Get(object p, bool includeOnlyEnabled)
        {
            string json = _navigationTreeFetchQueryProcessor.Get(p);
            TreeParent parent = _navigationTreeFetchExtractor.Extract(json, includeOnlyEnabled);

            ProcessContentTree(parent.Tree);

            return _json.Serialize(parent);
        }
        private void ProcessContentTree(TreeNode node)
        {
            string rid = node.Rid;
            string templateOwner = node.TemplateOwnerId;

            if (rid != null && templateOwner != null)
            {

            VertexParentPropertiesModel vertexParent = _mapper.MapVertexParent(GetCluster(rid), GetRecord(rid), GetCluster(templateOwner), GetRecord(templateOwner));
            string json = _contentTreeFetchQueryProcessor.Get(vertexParent);

            TreeParent parent = _contentTreeFetchMobileExtractor.Extract(json, true);
            node.DefaultReport = _contentTreeFetchMobileExtractor.GetDefaultReport();
            node.Children = parent.Tree.Containers;

            foreach (var treeNode in node.Containers)
            {
                ProcessContentTree(treeNode);
            }

            }

        }

        private int GetCluster(string rid)
        {
            string [] result = rid.Split('#');

            result = result[1].Split(':');

            return Convert.ToInt32(result[0]);
        }
        private int GetRecord(string rid)
        {
            string[] result = rid.Split('#');

            result = result[1].Split(':');

            return Convert.ToInt32(result[1]);
        }


    }
}