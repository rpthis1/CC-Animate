using System;
using System.Web.Compilation;
using WebApiBia.Common.Json;
using WebApiBia.Dashboard.Core.DecoratorProcessor;
using WebApiBia.Dashboard.Core.Dto.Parent;
using WebApiBia.Dashboard.Core.Dto.Report;
using WebApiBia.Dashboard.Core.FormatterProcessor;
using WebApiBia.Dashboard.Core.PropertyValuesProcessor;
using WebApiBia.Data.QueryProcessors.Bia;
using WebApiBia.Data.Reports.Core.DataProcessor;
using WebApiBia.Web.Api.Core.Processors.Controllers.Bia;
using WebApiBia.Web.Common;

namespace WebApiBia.Web.Api.Core.Processors.Controllers.BiaMobile
{
    class ReportPropertiesMobileProcessor : IReportPropertiesMobileProcessor
    {
        private readonly IReportPropertiesQueryProcessor _queryProcessor;
        private readonly IReportPropertyValuesProcessor _propertyValuesProcessor;
        private readonly IDataProcessor _dataProcessor;
        private readonly IFormatterProcessor _formatterProcessor;
        private readonly IDecoratorProcessor _decoratorProcessor;
        private readonly IJsonHelper _json;
        private readonly IControlsDecoratorProcessor _controlsDecorator;


        public ReportPropertiesMobileProcessor(IReportPropertiesQueryProcessor queryProcessor, IReportPropertyValuesProcessor propertyValuesProcessor, IDataProcessor dataProcessor, IFormatterProcessor formatterProcessor, IDecoratorProcessor decoratorProcessor)
        {
            _queryProcessor = queryProcessor;
            _propertyValuesProcessor = propertyValuesProcessor;
            _dataProcessor = dataProcessor;
            _formatterProcessor = formatterProcessor;
            _decoratorProcessor = decoratorProcessor;

            _json = WebContainerManager.Get<IJsonHelper>();
            _controlsDecorator = WebContainerManager.Get<IControlsDecoratorProcessor>();


        }
        public string Get(object p)
        {
            string result = _queryProcessor.Get(p);
            ReportConfig config = ExecutePropertyValuesProcessor(result);
            config.FormFactor = "Mobile";
            string reportData = _dataProcessor.Process(config);
            Parent parent = _formatterProcessor.Process(reportData, config.Formatter);
            _decoratorProcessor.Process(config,parent);
            _controlsDecorator.Process(parent,config);
            return _json.Serialize(parent);                             
        }

        private ReportConfig ExecutePropertyValuesProcessor(string data)
        {
            string path;
            AnaylizeProperyValueProcessor properyValuesAnaylize = new AnaylizeProperyValueProcessor();
            string propertyValuesProcessorPath = properyValuesAnaylize.GetPropertyValuesProcessor(data);

            if (String.IsNullOrEmpty(propertyValuesProcessorPath))
            {
                path = "WebApiBia.Dashboard.Core.PropertyValuesProcessor." + new ReportConfig().PropertiesProcessor;
            }
            else
            {
                path = "WebApiBia.Dashboard.Core.PropertyValuesProcessor." + propertyValuesProcessorPath;

            }

            Type reportDataProcessorType = BuildManager.GetType(path, false);
            IReportPropertyValuesProcessor propertyValuesProcessor = Activator.CreateInstance(reportDataProcessorType) as IReportPropertyValuesProcessor;
            return propertyValuesProcessor.Process(properyValuesAnaylize.Properties);

        }

    }
}      