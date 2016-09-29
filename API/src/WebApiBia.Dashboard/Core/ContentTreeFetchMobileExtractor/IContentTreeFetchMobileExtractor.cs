using System.Collections.Generic;
using WebApiBia.Dashboard.Core.Dto.NavigationTree;

namespace WebApiBia.Dashboard.Core.ContentTreeFetchMobileExtractor
{
    public interface IContentTreeFetchMobileExtractor
    {
        TreeParent Extract(string json, bool includeOnlyEnabled);
        Dictionary<TreeNode, TreeNode> GetReportsContainers();
        string GetDefaultReport();
    }
}
