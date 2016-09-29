using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WebApiBia.Dashboard.Core.Dto.NavigationTree;

namespace WebApiBia.Dashboard.Core.NavigationTreeFetchExtractor
{
    public interface INavigationTreeFetchExtractor
    {
        TreeParent Extract(string json, bool includeOnlyEnabled);
        Dictionary<TreeNode, TreeNode> GetReportsContainers();
    }
}
