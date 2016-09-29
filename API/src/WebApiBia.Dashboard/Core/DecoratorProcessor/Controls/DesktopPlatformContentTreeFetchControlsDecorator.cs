using System;
using System.Collections.Generic;
using System.Linq;
using MVC4API.Core.UIControls.Layout.Container;
using Newtonsoft.Json.Linq;
using WebApiBia.Dashboard.Core.Dto.NavigationTree;
using WebApiBia.Dashboard.UiControls;
using WebApiBia.Dashboard.UiControls.container;
using WebApiBia.Dashboard.UiControls.Reporting;
using WebApiBia.Web.Models.DataMapper;

namespace WebApiBia.Dashboard.Core.DecoratorProcessor.Controls
{
    public class DesktopPlatformContentTreeFetchControlsDecorator : IDesktopPlatformContentTreeFetchControlsDecorator
    {
        private  VertexParentPropertiesModel _vertexParentPropertiesModel;
        public void Decorate(TreeParent parent, Dictionary<TreeNode, TreeNode> components, object o)
        {
            _vertexParentPropertiesModel = (VertexParentPropertiesModel) o;
            DecorateUiControls(parent, components);

        }


        private void DecorateUiControls(TreeParent parent, Dictionary<TreeNode, TreeNode> components)
        {

            List<TreeNode> nodes = components.Select(kvp => kvp.Key).ToList();

            foreach (TreeNode node in nodes)
            {

                AddUiComponents(node);
            }
        }

        private void AddUiComponents(TreeNode node)
        {

            int len = node.Containers.Count;

            if (len <= 2)
            {
                AddUiComponenetsBaseCase(node);

            }
            else
            {
                AddUiComponentsGeneralCase(node, len);
            }


        }
        private void AddUiComponenetsBaseCase(TreeNode node)
        {
            node.Components = new List<UiComponent>();
            UiContainer uicontainer = new UiContainer();
            uicontainer.Layout = new UiLayoutHBox();
            uicontainer.Reference = "r0";
            node.Components.Add(uicontainer);
            int count = 0;

            foreach (TreeNode report in node.Containers)
            {

                if (report.Class.Equals("BiaVReport"))
                {
                    var uireport = new UiReport()
                    {
                        Title = report.Text,
                        Rid = report.Rid,
                        TemplateOwnerRid ="#" + _vertexParentPropertiesModel.ClusterOwner + ":" +_vertexParentPropertiesModel.RecordOwner,
                        BiaIndex = count,
                        BiaContainer = uicontainer.Reference,
                        Xtype =  report.Vertex.Xtype

                    };
                    count++;
                    uicontainer.Items.Add(uireport);
                }

                //if (report.Class.Equals("BiaVNavTabNavigator"))
                //{
                //    var uiTabNavigator = new UiTabNavigator()
                //    {
                //        Title = report.Text,
                //        Rid = report.Rid,
                //        TemplateOwnerRid = "#" + _vertexParentPropertiesModel.ClusterOwner + ":" + _vertexParentPropertiesModel.RecordOwner,
                //        BiaIndex = count,
                //        BiaContainer = uicontainer.Reference,
                //        Containers = report.Containers

                //    };
                //    uicontainer.Items.Add(uiTabNavigator);
                //}


               
            }

        }

        private void AddUiComponentsGeneralCase(TreeNode node, int len)
        {
            double columns = FindTheNextPerfectSquareRoot(len);
            columns = Math.Sqrt(Convert.ToDouble(columns));
            double rows = FindRows(columns, Convert.ToDouble(len));
            int columnIndex = 0;
            int rowIndex = 0;


            node.Components = new List<UiComponent>();
            UiContainer uicontainer = new UiContainer();
            uicontainer.Layout = new UiLayoutHBox();
            uicontainer.Reference = "r" + rowIndex;
            node.Components.Add(uicontainer);

            foreach (TreeNode report in node.Containers)
            {
                if (columnIndex == columns)
                {
                    columnIndex = 0;
                    rowIndex++;
                    uicontainer = new UiContainer();
                    uicontainer.Layout = new UiLayoutHBox();
                    uicontainer.Reference = "r" + rowIndex;
                    node.Components.Add(uicontainer);
                   

                }

                //uireport = new UiReport()
                //{
                //    Title = report.Text,
                //    Rid = report.Rid,
                //    TemplateOwnerRid = "#" + _vertexParentPropertiesModel.ClusterOwner + ":" + _vertexParentPropertiesModel.RecordOwner,
                //    BiaIndex = columnIndex,
                //    BiaContainer = uicontainer.Reference
                //};


                if (report.Class.Equals("BiaVReport"))
                {
                    var  uireport = new UiReport()
                    {
                        Title = report.Text,
                        Rid = report.Rid,
                        TemplateOwnerRid = "#" + _vertexParentPropertiesModel.ClusterOwner + ":" + _vertexParentPropertiesModel.RecordOwner,
                        BiaIndex = columnIndex,
                        BiaContainer = uicontainer.Reference,
                        Xtype = report.Vertex.Xtype

                    };
                    columnIndex++;
                    uicontainer.Items.Add(uireport);
                }

                //if (report.Class.Equals("BiaVNavTabNavigator"))
                //{
                //    var uiTabNavigator = new UiTabNavigator()
                //    {
                //        Title = report.Text,
                //        Rid = report.Rid,
                //        TemplateOwnerRid = "#" + _vertexParentPropertiesModel.ClusterOwner + ":" + _vertexParentPropertiesModel.RecordOwner,
                //        BiaIndex = columnIndex,
                //        BiaContainer = uicontainer.Reference,
                //        Containers = report.Containers

                //    };
                //    uicontainer.Items.Add(uiTabNavigator);
                //}

                //uicontainer.Items.Add(uireport);
                
            }

        }

        private double FindRows(double columns, double len)
        {
            double rows = Math.Ceiling(len / columns);
            return rows;

        }

        private double FindTheNextPerfectSquareRoot(int len)
        {
            bool looking = true;
            len--;
            while (looking)
            {
                len++;
                if (IsSquare(len))
                {
                    looking = false;
                }

            }

            return Convert.ToDouble(len);
        }

        public static bool IsSquare(int target)
        {
            return Math.Sqrt((double)target) % 1d == 0d;
        }

    }
}