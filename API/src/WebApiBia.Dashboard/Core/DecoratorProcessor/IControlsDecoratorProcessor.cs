using System.Collections.Generic;
using System.Linq;
using System.Text;
using WebApiBia.Dashboard.Core.Dto.Parent;
using WebApiBia.Dashboard.Core.Dto.Report;

namespace WebApiBia.Dashboard.Core.DecoratorProcessor
{
    public interface IControlsDecoratorProcessor
   {
        void Process(Parent parent, ReportConfig config);
   }
}
