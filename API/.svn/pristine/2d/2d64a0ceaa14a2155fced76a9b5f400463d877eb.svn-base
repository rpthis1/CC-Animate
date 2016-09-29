using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WebApiBia.Dashboard.Core.Dto.NavigationTree;
using WebApiBia.Data.Entities.Bia;
using WebApiBia.Data.Mapper;

namespace WebApiBia.Dashboard.Core.NavigationTreeFetchExtractor
{
    public class NavigationTreeFetchExtractor : INavigationTreeFetchExtractor
    {

        private readonly AutoMapper _mapper = new AutoMapper();

        public TreeParent Extract(string json, bool includeOnlyEnabled)
        {
            TreeParent parent = new TreeParent();
            parent.Result = new List<TreeNode>();
            dynamic obj = JObject.Parse(json);
            dynamic resultArray = obj["result"][0];
            JArray a = resultArray.value;
            dynamic valueObj = a[0];
            string cls = valueObj["@class"];
            JArray children = valueObj["children"];
            TreeNode node = new TreeNode();
            node.Expanded = null;
            node.Rid = valueObj["@rid"];
            AddTemplateOnwerId(node, valueObj);
            var vertex = _mapper.VertexMap(valueObj, cls);
            if (vertex != null)
            {
                node.Text = vertex.Title;
                node.Icon = "resources/images/vertex/productionTreeNavIcon.png";

                ExtractTreeItem(children, node, includeOnlyEnabled, parent);
                parent.Result.Add(node);
            }
            else
            {
                ExtractTreeItem(children, node, includeOnlyEnabled, parent);
            }
         
            return parent;
        }

        public Dictionary<TreeNode, TreeNode> GetReportsContainers()
        {
            return null;
        }

        private void ExtractTreeItem(JArray arr, TreeNode node, bool includeOnlyEnabled, TreeParent parent)
        {
            node.Leaf = null;
            foreach (JObject o in arr.Children<JObject>())
            {
                node.Result = new List<TreeNode>();
                node.Leaf = false;
                dynamic jObj = o;
                string cls = jObj["@class"];

                var vertex = _mapper.VertexMap(jObj, cls);

                if (vertex is BiaVBasePropertiesVertex)
                {
                    TreeNode childNode;
                    JArray childArr;
                    if (includeOnlyEnabled)
                    {
                        if ((vertex as BiaVBasePropertiesVertex).IsEnabled())
                        {
                            childNode = new TreeNode();
                            childNode.Expanded = false;
                            parent.Result.Add(childNode);
                            childNode.Class = cls;
                            childNode.Text = vertex.Title;
                            childNode.Rid = vertex.Rid;
                            childNode.Icon = "resources/images/vertex/productionTreeNavIcon.png";
                            childArr = jObj["children"];
                            if (childArr.Count == 0)
                            {
                                childNode.Result = new List<TreeNode>();
                            }
                            AddTemplateOnwerId(childNode, jObj);
                        }
                    }
                    else
                    {
                        childNode = new TreeNode();
                        childNode.Expanded = false;
                        parent.Result.Add(childNode);
                        childNode.Class = cls;
                        childNode.Text = vertex.Title;
                        childNode.Rid = vertex.Rid;
                        childArr = jObj["children"];
                        if (childArr.Count == 0)
                        {
                            childNode.Result = new List<TreeNode>();
                        }
                        AddTemplateOnwerId(childNode, jObj);
                    }

                }

            }
        }
        private void AddTemplateOnwerId(TreeNode node, dynamic valueObj)
        {
            JArray templatenOwnerArr = valueObj["out_BiaETemplateItemToTemplateItem"];

            if (templatenOwnerArr?.Count > 0)
            {
                string templateOnwerId = (string)templatenOwnerArr[0];
                node.TemplateOwnerId = templateOnwerId;
            }
        }
    }
}