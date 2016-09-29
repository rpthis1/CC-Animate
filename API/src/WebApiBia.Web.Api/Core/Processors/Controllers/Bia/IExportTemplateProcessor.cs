using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json.Linq;

namespace WebApiBia.Web.Api.Core.Processors.Controllers.Bia
{
    public interface IExportTemplateProcessor
    {
        string Get(object p);
        string Post(object p);
        string GetTemplateName(JObject template);
    }
}