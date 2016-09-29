using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WebApiBia.Dashboard.Core.Dto.Report;
using WebApiBia.Data.Entities.Bia;

namespace WebApiBia.Dashboard.Core.PropertyValuesProcessor
{
    public class ContinuousCommissioningPropertiesProcessor : ReportPropertyValuesProcessor
    {
        public override ReportConfig Process(List<BiaVBase> properties)
        {

            base.Process(properties);
           var leftAxisUnits = Config.Parameters.Find(x => x != null && x.Id != null && x.Id.ToUpper() == "LEFTAXISUNITS").Value;
           Config.LeftAxisUnits = leftAxisUnits;

           var rightAxisUnits = Config.Parameters.Find(x => x != null && x.Id != null && x.Id.ToUpper() == "RIGHTAXISUNITS").Value;
           Config.RightAxisUnits = rightAxisUnits;

           var overageUnits = Config.Parameters.Find(x => x != null && x.Id != null && x.Id.ToUpper() == "OVERAGEUNITS").Value;
           Config.OverageUnits = overageUnits;

           Config.Precision = 0;

            return Config;
        }
    }
}
