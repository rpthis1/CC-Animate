using System;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using WebApiBia.Data.Entities.Bia;
using WebApiBia.Web.Api.Core.Processors.Controllers.Bia;

namespace WebApiBia.Web.Api.Controllers.Bia
{
    public class TemplateReportController : ApiController
    {
        // GET api/ipmvpd

        private readonly ITemplateReportProcessor _processor;
        public TemplateReportController(ITemplateReportProcessor processor)
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
        public HttpResponseMessage Post(int cluster,int record,[FromBody]object p)
        {
            string result = _processor.Post(cluster , record, p);
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(result, Encoding.UTF8, "text/html");
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
