using System;
using WebApiBia.Dashboard.Core.Dto.Parent;
using WebApiBia.Dashboard.Core.Dto.Report;
using WebApiBia.Dashboard.Core.FormatterProcessor.DataFormatters;

namespace WebApiBia.Dashboard.Core.DecoratorProcessor
{
    public class DecoratorProcessor : IDecoratorProcessor
    {
        public Parent Process(object o, object p)
        {
            ReportConfig config = (ReportConfig)o;
            Parent parent = (Parent)p;

            if (parent.ErrorMessage != null)
            {
                return parent;
            }


            Type decoratorType = Type.GetType("WebApiBia.Dashboard.Core.DecoratorProcessor.Chart." + config.DataDecorator + config.FormFactor);

            if (decoratorType != null)
            {
                IParent decorator = Activator.CreateInstance(decoratorType, parent) as IParent;
                if (decorator != null)
                {
                    decorator.Decorate(config);
                }
                else
                {
                    parent.ErrorMessage = "Unable to create visual decorator instance";
                }

            }
            else
            {
                parent.ErrorMessage = "Viaual Decorator missing";
            }

            return parent;

        }

    }
}