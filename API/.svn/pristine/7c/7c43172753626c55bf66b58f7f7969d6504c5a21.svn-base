using System;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using WebApiBia.Web.Api.Core.Processors.Controllers.BiaAdmin;


namespace WebApiBia.Web.Api.Controllers.BiaAdmin
{
    public class UtbEntriesController : ApiController
    {
        // GET api/ipmvpd

        private readonly IUtbEntriesProcessor _processor;
        public UtbEntriesController(IUtbEntriesProcessor processor)
        {
           _processor = processor;
        }
        public HttpResponseMessage Get()
        {
            var parameters = Request.RequestUri.ParseQueryString();
            string utbEntityId = parameters.Get("utbEntityId");
            string entityValueType = parameters.Get("entityValueType");

            string result = _processor.Get(utbEntityId, entityValueType);
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(result.ToString(), Encoding.UTF8, "text/html");
            return response;

        }
 

        // POST api/ipmvpd
        public HttpResponseMessage Post([FromBody]object p)
        {
            string result = _processor.Post(p);
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(result.ToString(), Encoding.UTF8, "text/html");
            return response;
        }

        // PUT api/ipmvpd/17/2
        public HttpResponseMessage Put( [FromBody]object p)
        {
            string result = _processor.Put(p);
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(result.ToString(), Encoding.UTF8, "text/html");
            return response;
        }

        // DELETE api/ipmvpd/17/2
        public HttpResponseMessage Delete([FromBody]object p)
        {
            string result = _processor.Delete(p);
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(result.ToString(), Encoding.UTF8, "text/html");
            return response;

        }
    }
}
