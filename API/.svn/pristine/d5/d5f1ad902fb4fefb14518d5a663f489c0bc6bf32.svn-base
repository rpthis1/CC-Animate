using System;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Web;
using System.Web.Http;
using IBIS.Infrastructure.JSON.Implementation;
using Newtonsoft.Json.Linq;
using WebApiBia.Data.Entities.Bia;
using WebApiBia.Web.Api.Core.Processors.Controllers.Bia;
using WebApiBia.Web.Models.DataMapper;
using WebApiBia.Web.Models.Factory.DataMapper;

namespace WebApiBia.Web.Api.Controllers.Bia
{
    public class ExportTemplateController : ApiController
    {
        // GET api/ipmvpd

        private readonly IExportTemplateProcessor _processor;
        private readonly IDataMapper _mapper;
        public ExportTemplateController(IExportTemplateProcessor processor, IDataMapper mapper)
        {
            _processor = processor;
            _mapper = mapper;
        }
        public void Get()
        {


        }
        public void Get(int cluster, int record, int clusterowner, int recordowner)
        {

        }

        // GET api/ipmvpd/5
        public HttpResponseMessage Get(int cluster, int record)
        {
            VertexParentPropertiesModel vertexParent = _mapper.MapVertexParent(cluster, record, -1, -1);
            string content = _processor.Get(vertexParent);
            JObject template = JObject.Parse(content);
            string templateName = _processor.GetTemplateName(template);
            HttpResponseMessage result = new HttpResponseMessage(HttpStatusCode.OK);
            result.Content = new StringContent(content);
            result.Content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");
            result.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment")
            {
                FileName = templateName
            };
            return result;
        }

        // POST api/ipmvpd
        public HttpResponseMessage Post()
        {
            var file = HttpContext.Current.Request.Files.Count > 0 ?
            HttpContext.Current.Request.Files[0] : null;
            string result = _processor.Post(file);
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(result.ToString(), Encoding.UTF8, "text/html");
            return response;

        }

        // PUT api/ipmvpd/17/2
        public void Put(int cluster, int record, [FromBody]object p)
        {


        }

        // DELETE api/ipmvpd/17/2
        public void Delete(int cluster, int record)
        {

        }
    }
}
