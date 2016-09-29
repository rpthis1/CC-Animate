using System.Collections.Generic;
using WebApiBia.Web.Models.TreeMenu;
using WebApiBia.Web.Models.TreeMenu.TemplateLibrary;

namespace WebApiBia.Web.Models.Factory.TreeMenu.TemplateLibrary
{
    public class TemplateLibraryMenuFactory : ITemplateLibraryMenuFactory
    {
        private readonly ITemplateLibraryActionsMenu _actions;
        public TemplateLibraryMenuFactory(ITemplateLibraryActionsMenu actions)
        {
            _actions = actions;
        }

        public ItemContainerMenu CreateTabMenu()
        {
            ItemContainerMenu menu = new ItemContainerMenu
            {
                MenuHeight = 200,
                MenuWidth = 58,
                Content = new List<ItemMenu>
                {
                    new ItemMenu()
                    {
                        Action = _actions.AddTab,
                        Text = "Add Tab",
                        Icon = "tab.png"
                    },
                    new ItemMenu()
                    {
                        Xtype = "menuseparator"
                    },
                    new ItemMenu()
                    {
                        Action = _actions.Delete,
                        Text = "Delete"
                    },
                    new ItemMenu()
                    {
                        Action = _actions.Cancel,
                        Text = "Cancel"
                    }
                }
            };

            return menu;
        }

        public ItemContainerMenu CreateTabNavAndReportMenu()
        {
            ItemContainerMenu menu = new ItemContainerMenu
            {
                MenuHeight = 200,
                MenuWidth = 58,
                Content = new List<ItemMenu>
                {
                    new ItemMenu()
                    {
                        Action = _actions.AddTabNavigator,
                        Text = "Add Tab Navigator",
                        Icon = "tabnavigator.png"
                    },
                    new ItemMenu()
                    {
                        Text = "Add Report",
                        Menu = new SubItemMenu()
                        {
                            Items = new List<ItemMenu>()
                            {
                                new ItemMenu()
                                {
                                    Action = _actions.AddReport,
                                    Text = "Power Demand",
                                    Icon = "tabnavigator.png",
                                    Report = "PowerDemand"
                                },
                                new ItemMenu()
                                {
                                    Action = _actions.AddReport,
                                    Text = "Load Duration",
                                    Icon = "tabnavigator.png",
                                    Report = "LoadDuration"
                                },
                                new ItemMenu()
                                {
                                    Action = _actions.AddReport,
                                    Text = "Power Consumption (kWh)",
                                    Icon = "tabnavigator.png",
                                    Report = "PowerConsumptionKwh"
                                },
                                     new ItemMenu()
                                {
                                    Action = _actions.AddReport,
                                    Text = "Gas Consumption (thm)",
                                    Icon = "tabnavigator.png",
                                    Report = "GasConsumptionThm"
                                }
                            }
                        }
                    },
                    new ItemMenu()
                    {
                        Xtype = "menuseparator"
                    },
                    new ItemMenu()
                    {
                        Action = _actions.Delete,
                        Text = "Delete"
                    },
                    new ItemMenu()
                    {
                        Action = _actions.Cancel,
                        Text = "Cancel"
                    }
                }
            };

            return menu;
        }
    }
}