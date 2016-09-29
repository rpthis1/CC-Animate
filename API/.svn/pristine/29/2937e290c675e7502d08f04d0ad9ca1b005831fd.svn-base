using System.Collections.Generic;
using Newtonsoft.Json;
using WebApiBia.Dashboard.UiControls;
using WebApiBia.Data.Entities.Bia;

namespace WebApiBia.Dashboard.Core.Dto.NavigationTree
{
    public class TreeNode
    {
       
        [JsonProperty(PropertyName = "vertexClass")]
        public string Class;

        [JsonProperty(PropertyName = "text")]
        public string Text;

        [JsonProperty(PropertyName = "path")]
        public string Path;

        [JsonProperty(PropertyName = "children")]
        public List<TreeNode> Children;

        [JsonProperty(PropertyName = "containers")]
        public List<TreeNode> Containers;

        [JsonProperty(PropertyName = "result")]
        public List<TreeNode> Result;

        [JsonProperty(PropertyName = "components")]
        public List<UiComponent> Components;

        [JsonProperty(PropertyName = "leaf")]
        public bool? Leaf = false;

        [JsonProperty(PropertyName = "expanded")]
        public bool? Expanded = true;

        [JsonProperty(PropertyName = "@rid")]
        public string Rid;

        [JsonProperty(PropertyName = "templateOwnerRid")]
        public string TemplateOwnerId;

        [JsonProperty(PropertyName = "defaultReport")]
        public string DefaultReport { get; set; }

        [JsonProperty(PropertyName = "icon")]
        public string Icon { get; set; }

        public BiaVBasePropertiesVertex Vertex { get; set; }

        public BiaVReportPropertyParametersVertex ParameterVertex { get; set; }

        public enum NodeType
        {
            TreeNode,
            Container,
            List,
            Report

        }

        public  const string Ibistabnavigator = "IBISTABNAVIGATOR";
        public  const string Canvas = "CANVAS";
        public  const string Reportcanvas = "REPORTCANVAS";
        public  const string Report = "REPORT";
        public  const string Link = "LINK";

        [JsonProperty(PropertyName = "type")]
        public string Type { get; set; }
    }
}