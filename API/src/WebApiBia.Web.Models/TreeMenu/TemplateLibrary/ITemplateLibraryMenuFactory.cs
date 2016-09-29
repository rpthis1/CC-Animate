using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace WebApiBia.Web.Models.TreeMenu.TemplateLibrary
{
    public interface ITemplateLibraryMenuFactory
    {
        ItemContainerMenu CreateTabMenu();
        ItemContainerMenu CreateTabNavAndReportMenu();
    }
}
