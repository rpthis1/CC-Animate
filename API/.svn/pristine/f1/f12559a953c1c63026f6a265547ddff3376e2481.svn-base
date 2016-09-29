using System.Collections.Generic;
using WebApiBia.Dashboard.Core.Dto.NavigationTree;

namespace WebApiBia.Dashboard.Core.ContentTreeFetchExtractor
{
    public interface IContentTreeFetchExtractor
    {
        TreeParent Extract(string json, bool includeOnlyEnabled);
        Dictionary<TreeNode, TreeNode> GetReportsContainers();
        string GetDefaultReport();
    }
}
