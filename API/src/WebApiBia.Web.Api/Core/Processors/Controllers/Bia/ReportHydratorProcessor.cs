using System;
using System.Web.Compilation;
using WebApiBia.Common.Json;
using WebApiBia.Dashboard.Core.Dto.Parent;
using WebApiBia.Dashboard.Core.Dto.Report;
using WebApiBia.Dashboard.Core.FormatterProcessor;
using WebApiBia.Dashboard.Core.FormatterProcessor.DataFormatters;
using WebApiBia.Data.Reports.Core.DataProcessor;
using WebApiBia.Web.Common;

namespace WebApiBia.Web.Api.Core.Processors.Controllers.Bia
{
    class ReportHydratorProcessor : IReportHydratorProcessor
    {
        private readonly IFormatterProcessor _formatterProcessor;
        private readonly IJsonHelper _json;
        public ReportHydratorProcessor()
        {
            _formatterProcessor = WebContainerManager.Get<IFormatterProcessor>();
            _json = WebContainerManager.Get<IJsonHelper>();
        }

        public string Get(string data, string provider, string formatter, string reportDataprocessor)
        {
            ReportConfig config = new ReportConfig();

            config.RawParameters = data;
            config.Provider = provider;
            config.DataProcessor = reportDataprocessor;

            string path = "WebApiBia.Data.Reports.Core.DataProcessor." + config.DataProcessor;
            Type reportDataProcessorType = BuildManager.GetType(path, false);
            IDataProcessor dataProcessor = Activator.CreateInstance(reportDataProcessorType) as IDataProcessor;

            string result = dataProcessor.Process(config);
            Parent parent = _formatterProcessor.Process(result, formatter);

            if (parent.ErrorMessage == null)
            {
                return _json.Serialize(parent.Values);
            }

            return _json.Serialize(parent);

           
        } 
    }
}