using System;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using WebApiBia.Data.Entities.Bia;
using WebApiBia.Web.Api.Core.Processors.Controllers.Bia;
using WebApiBia.Web.Common;
using WebApiBia.Web.Models.DataMapper;
using WebApiBia.Web.Models.Factory.DataMapper;

namespace WebApiBia.Web.Api.Controllers.Bia
{
    public class TemplateTreeController : ApiController
    {
        // GET api/ipmvpd

        private readonly IGenericTreeProcessor _genericTreeProcessor;
        private readonly IContentTreeTemplateOwnerProcessor _templateOwnerProcessor;
        private readonly IDataMapper _mapper;
        public TemplateTreeController(IGenericTreeProcessor genericTreeProcessor, IContentTreeTemplateOwnerProcessor templateOwnerProcessor )
        {
            _genericTreeProcessor = genericTreeProcessor;
            _templateOwnerProcessor = templateOwnerProcessor;
            _mapper = WebContainerManager.Get<IDataMapper>();
        }
        public HttpResponseMessage Get()
        {
 
            string result = _genericTreeProcessor.Get(new BiaVTemplateTree());
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(result.ToString(), Encoding.UTF8, "text/html");
            return response;
        }

        // GET api/ipmvpd/5
        public HttpResponseMessage Get(int cluster, int record)
        {

            VertexParentPropertiesModel vertexParent = _mapper.MapVertexParent(cluster, record, -1, -1);

            string result = _templateOwnerProcessor.Get(vertexParent, false);
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(result.ToString(), Encoding.UTF8, "text/html");
            return response;
        }

        // POST api/ipmvpd
        public HttpResponseMessage Post([FromBody]object p)
        {
            string result = "";
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(result.ToString(), Encoding.UTF8, "text/html");
            return response;
        }

        // PUT api/ipmvpd/17/2
        public HttpResponseMessage Put(int cluster, int record, [FromBody]object p)
        {
            string result = "";
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(result.ToString(), Encoding.UTF8, "text/html");
            return response;

        }

        // DELETE api/ipmvpd/17/2
        public HttpResponseMessage Delete(int cluster, int record)
        {
            string result = "";
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(result.ToString(), Encoding.UTF8, "text/html");
            return response;
        }
    }
}
