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
    public class GetCompressedObjectDataController : ApiController
    {
        // GET api/ipmvpd

        private readonly IGetCompressedObjectDataProcessor _processor;
        public GetCompressedObjectDataController(IGetCompressedObjectDataProcessor processor)
        {
            _processor = processor;
        }
        public HttpResponseMessage Get()
        {
            var parameters = Request.RequestUri.ParseQueryString();
            string rp = parameters.Get("rp");

            string result = _processor.Get(rp);

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
