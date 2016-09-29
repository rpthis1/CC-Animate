using System;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using WebApiBia.Web.Api.Core.Processors.Controllers.BiaMobile;
using WebApiBia.Web.Api.Core.Processors.Controllers.IBIS;
using WebApiBia.Web.Models.DataMapper;
using WebApiBia.Web.Models.Factory.DataMapper;

namespace WebApiBia.Web.Api.Controllers.IBIS
{
    public class FcGetAvailableDatesController : ApiController
    {
        // GET api/ipmvpd

        private readonly IFcGetAvailableDatesProcessor _processor;
        public FcGetAvailableDatesController(IFcGetAvailableDatesProcessor processor)
        {
            _processor = processor;
        }
        public HttpResponseMessage Get()
        {
            var parameters = Request.RequestUri.ParseQueryString();
            string location = parameters.Get("location");
            string type = parameters.Get("type");


            string result = _processor.Get(type, location);

            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(result.ToString(), Encoding.UTF8, "text/html");
            return response;
        }

        // GET api/ipmvpd/5
        public void Get(int cluster, int record, int clusterowner, int recordowner)
        {
  
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
