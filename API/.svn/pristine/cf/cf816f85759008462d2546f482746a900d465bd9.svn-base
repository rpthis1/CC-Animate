using System;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using WebApiBia.Data.Entities.Bia;
using WebApiBia.Web.Api.Core.Processors.Controllers.Bia;
using WebApiBia.Web.Models.DataMapper;
using WebApiBia.Web.Models.Factory.DataMapper;

namespace WebApiBia.Web.Api.Controllers.Bia
{
    public class ReportHydratorController : ApiController
    {
        // GET api/ipmvpd

        private readonly IReportHydratorProcessor _hydrator;
        public ReportHydratorController(IReportHydratorProcessor hydrator)
        {
            _hydrator = hydrator;
        }
        public HttpResponseMessage Get()
        {
            var parameters = Request.RequestUri.ParseQueryString();
            string provider = parameters.Get("provider");
            string data = parameters.Get("data");
            string formatter = parameters.Get("formatter");
            string dataProcessor = parameters.Get("dataProcessor");

            var result = _hydrator.Get(data, provider, formatter, dataProcessor);
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
