using System;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using WebApiBia.Web.Api.Core.Processors.Controllers.BiaAdmin;


namespace WebApiBia.Web.Api.Controllers.BiaAdmin
{
    public class UtbGetConfigurationController : ApiController
    {
        // GET api/ipmvpd

        private readonly IUtbGetConfigurationProcessor _processor;
        public UtbGetConfigurationController(IUtbGetConfigurationProcessor processor)
        {
           _processor = processor;
        }
        public HttpResponseMessage Get()
        {
            var parameters = Request.RequestUri.ParseQueryString();
            string utbEntityId = parameters.Get("utbEntityId");
            string result = _processor.Get(utbEntityId);
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(result.ToString(), Encoding.UTF8, "text/html");
            return response;

        }
 
        // POST api/ipmvpd
        public void Post([FromBody]object p)
        {
           
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
