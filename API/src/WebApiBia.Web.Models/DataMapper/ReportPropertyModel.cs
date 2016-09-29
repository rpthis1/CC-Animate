using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WebApiBia.Data.Entities.Bia;
using WebApiBia.Web.Models.TreeMenu;

namespace WebApiBia.Web.Models.DataMapper
{
    public class ReportPropertyModel
    {
        private string _overrideRid;
        public object Template { get; set; }
        public object Override { get; set; }

        public string OverrideRid
        {
            get { return _overrideRid.Replace("#", ""); }
            set { _overrideRid = value; }
        }
    }
}
