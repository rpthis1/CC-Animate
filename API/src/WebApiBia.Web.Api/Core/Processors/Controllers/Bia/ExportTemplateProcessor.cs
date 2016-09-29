using IBIS.Infrastructure.JSON.Implementation;
using Newtonsoft.Json.Linq;
using WebApiBia.Common.Json;
using WebApiBia.Dashboard.Core.ContentTreeFetchAllVertexPropertiesListExtractor;
using WebApiBia.Dashboard.Core.ContentTreeFetchExtractor;
using WebApiBia.Dashboard.Core.DecoratorProcessor.Controls;
using WebApiBia.Data.QueryProcessors.Bia;
using WebApiBia.Web.Common;

namespace WebApiBia.Web.Api.Core.Processors.Controllers.Bia
{
    class ExportTemplateProcessor : IExportTemplateProcessor
    {
        private readonly ITemplateExportQueryProcessor _querProcessor;
        public ExportTemplateProcessor(ITemplateExportQueryProcessor querProcessor)
        {
            _querProcessor = querProcessor;
        }

        public string Get(object p)
        {
            string json = _querProcessor.Get(p);

            return json;

        }

        public string Post(object p)
        {
            string json = _querProcessor.Post(p);

            return json;

        }


        public string GetTemplateName(JObject template)
        {
            JArray items = template["result"][0]["value"][0]["value"]["items"] as JArray;
            string templateName = "template.txt";
            foreach (JObject obj in items)
            {
                if(obj["label"].ToString() == "Title")
                {
                    templateName = obj["value"].ToString() + ".txt";
                    break;
                }
            }

            return templateName;
        }


    }
}