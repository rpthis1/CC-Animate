using System;
using System.Collections.Generic;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WebApiBia.Dashboard.Core.ContentTreeFetchExtractor;
using WebApiBia.Dashboard.Core.Dto.NavigationTree;
using WebApiBia.Data.Entities.Bia;
using WebApiBia.Data.Mapper;

namespace WebApiBia.Dashboard.Core.ContentTreeFetchAllVertexPropertiesListExtractor
{
    public class ContentTreeFetchAllVertexParametersListExtractor : IContentTreeFetchExtractor
    {

        [JsonProperty(PropertyName = "containers")]
        private readonly Dictionary<TreeNode, TreeNode> _containers = new Dictionary<TreeNode, TreeNode>();
        private readonly  List<TreeNode> _containersList = new List<TreeNode>();
        private readonly AutoMapper _mapper = new AutoMapper();
        private string _defaultReport { get; set; }
        private int _reportCounter = 0;



        public TreeParent Extract(string json, bool includeOnlyEnabled)
        {
            _reportCounter = 0;
            _containers.Clear();
            TreeParent parent = new TreeParent();
            dynamic obj = JObject.Parse(json);
            dynamic resultArray = obj["result"][0];
            JArray a = resultArray.value;
            dynamic valueObj = a[0];
            JArray children = valueObj["children"];
            TreeNode node = new TreeNode();

            node.Text = "Root";
            node.Containers = new List<TreeNode>();
            ExtractTreeItem(children, node, includeOnlyEnabled);
            parent.Tree = node;


            return parent;
        }

        public Dictionary<TreeNode, TreeNode> GetReportsContainers()
        {
            return _containers;
        }

        public List<TreeNode> GetContainersList()
        {
            return _containersList;
        } 
        public string GetDefaultReport()
        {
            return _defaultReport;
        }

        private void ExtractTreeItem(JArray arr, TreeNode node, bool includeOnlyEnabled)
        {
            foreach (JObject o in arr.Children<JObject>())
            {
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
                            childNode.Containers = new List<TreeNode>();
                            childNode.Class = cls;
                            childNode.Text = vertex.Title;
                            childNode.Path = $"{node.Path} | {childNode.Text}";
                            childNode.Rid = vertex.Rid;
                            childNode.Vertex = vertex;
                            childArr = jObj["children"];
                            ExtractTreeItem(childArr, childNode, true);
                            
                        }
                    }
                    else
                    {
                        childNode = new TreeNode();
                        childNode.Containers = new List<TreeNode>();
                        childNode.Class = cls;
                        childNode.Text = vertex.Title;
                        childNode.Path = $"{node.Path} | {childNode.Text}";
                        childNode.Rid = vertex.Rid;
                        childNode.Vertex = vertex;
                        childArr = jObj["children"];
                        ExtractTreeItem(childArr, childNode, false);
                        
                        
                    }

                }
                else if (vertex is BiaVReportPropertyParametersVertex)
                {
                    TreeNode childNode;

                   
                        childNode = new TreeNode();
                        _containersList.Add(childNode);
                        childNode.Containers = new List<TreeNode>();
                        childNode.Class = cls;
                        childNode.Text = "parameters";
                        childNode.Path = $"{node.Path} | {childNode.Text}";
                        childNode.Rid = vertex.Rid;
                        childNode.ParameterVertex = vertex;

                }

            }
        }

        private bool IsReportContainer(JObject o, TreeNode node)
        {
            dynamic jObj = o;
            string cls = jObj["@class"];
            if (cls.Equals("BiaVReport"))
            {
                if (!_containers.ContainsKey(node))
                {
                    _containers.Add(node, node);
                }

                if (_reportCounter == 0)
                {
                    _defaultReport = jObj["@rid"];
                }

                _reportCounter++;
                return true;

            }
            return false;
        }
    }
}