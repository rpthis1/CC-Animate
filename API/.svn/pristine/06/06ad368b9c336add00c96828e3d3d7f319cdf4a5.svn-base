using System;
using WebApiBia.Dashboard.Core.DecoratorProcessor.Controls;
using WebApiBia.Dashboard.Core.Dto.Parent;
using WebApiBia.Dashboard.Core.Dto.Report;

namespace WebApiBia.Dashboard.Core.DecoratorProcessor.Chart
{
    public class ControlsDecoratorProcessor : IControlsDecoratorProcessor
    {
        public void Process(Parent parent, ReportConfig config)
        {
            if (parent.ErrorMessage != null)
            {
                return;
            }
            Type controlsDecoratorType = Type.GetType("WebApiBia.Dashboard.Core.DecoratorProcessor.Controls." + config.FormFactor + "PlatformControlsDecorator");
            IControlsDecorator controlsDecorator = Activator.CreateInstance(controlsDecoratorType) as IControlsDecorator;
            controlsDecorator.Decorate(parent, config);
        }
    }
}