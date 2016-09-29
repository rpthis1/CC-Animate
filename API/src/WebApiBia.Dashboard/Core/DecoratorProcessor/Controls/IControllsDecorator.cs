using WebApiBia.Dashboard.Core.Dto.Parent;
using WebApiBia.Dashboard.Core.Dto.Report;

namespace WebApiBia.Dashboard.Core.DecoratorProcessor.Controls
{
    public interface IControlsDecorator
    {
        void Decorate(Parent parent, ReportConfig config);
    }
}
