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
    public class RealTimeTrendsContinuousCommissioningController : ApiController
    {
        // GET api/ipmvpd

        private readonly IRealTimeTrendsContinuousCommissioningProcessor _treendsContinuousCommissioningProcessor;
        public RealTimeTrendsContinuousCommissioningController(IRealTimeTrendsContinuousCommissioningProcessor treendsContinuousCommissioningProcessor)
        {
            _treendsContinuousCommissioningProcessor = treendsContinuousCommissioningProcessor;
        }
        public HttpResponseMessage Get()
        {
            var parameters = Request.RequestUri.ParseQueryString();
            string inputRp = parameters.Get("inputRp");
            string outputRp = parameters.Get("outputRp");
            string date = parameters.Get("date");
            string granularity = parameters.Get("granularity");
            string behavior = parameters.Get("behavior");
            string offset = parameters.Get("offset");

            string result = _treendsContinuousCommissioningProcessor.Get(inputRp, outputRp, date, granularity, behavior, offset);

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
