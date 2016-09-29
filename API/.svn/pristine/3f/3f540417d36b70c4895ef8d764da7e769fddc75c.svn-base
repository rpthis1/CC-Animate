using System;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using WebApiBia.Web.Api.Core.Processors.Controllers.BiaAdmin;


namespace WebApiBia.Web.Api.Controllers.BiaAdmin
{
    public class UtbGetEntitiesController : ApiController
    {
        // GET api/ipmvpd

        private readonly IUtbGetEntitiesProcessor _processor;
        public UtbGetEntitiesController(IUtbGetEntitiesProcessor processor)
        {
           _processor = processor;
        }
        public HttpResponseMessage Get()
        {
            string result = _processor.Get();
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
