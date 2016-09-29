using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Linq;
using System.Reflection;
using System.ServiceProcess;
using System.Text;
using System.Threading.Tasks;
using IBISReportingUIMaintenanceLib;
using log4net;

namespace IBISUIReportingService
{
    public partial class Service1 : ServiceBase
    {
        public Service1()
        {
            InitializeComponent();
        }

        protected override void OnStart(string[] args)
        {
            new IbisReportingUiMaintenanceScheduler().Start();
        }

        protected override void OnStop()
        {

        }
    }
}
