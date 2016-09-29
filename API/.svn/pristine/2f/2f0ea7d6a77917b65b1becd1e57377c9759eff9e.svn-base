using System;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using WebApiBia.Data.Entities.Bia;
using WebApiBia.Web.Api.Core.Processors.Controllers.Bia;

namespace WebApiBia.Web.Api.Controllers.Bia
{
    public class ReportPropertyController : ApiController
    {
        // GET api/ipmvpd

        private readonly IReportPropertyProcessor _processor;
        public ReportPropertyController(IReportPropertyProcessor processor)
        {
            _processor = processor;
        }
        public void Get()
        {
 
        }

        // GET api/ipmvpd/5
        public void Get(int cluster, int record)
        {
           
        }

        // POST api/ipmvpd
        public void Post(int cluster,int record,[FromBody]object p)
        {
          
        }

        // PUT api/ipmvpd/17/2
        public HttpResponseMessage Put(int cluster, int record, [FromBody]object p)
        {
            string result = _processor.Put(cluster, record, p);
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(result, Encoding.UTF8, "text/html");
            return response;
            

        }

        // DELETE api/ipmvpd/17/2
        public void Delete(int cluster, int record)
        {
           
        }
    }
}
