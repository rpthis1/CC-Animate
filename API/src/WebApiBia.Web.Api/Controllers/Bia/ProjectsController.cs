using System;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using WebApiBia.Common;
using WebApiBia.Data.Entities.Bia;
using WebApiBia.Web.Api.Core.Processors.Controllers.Bia;

namespace WebApiBia.Web.Api.Controllers.Bia
{
    public class ProjectsController : ApiController
    {

        private readonly IVerticesProcessor _verticesProcessor;

        public ProjectsController( IVerticesProcessor verticesProcessor)
        {
           _verticesProcessor = verticesProcessor;
        }
        public HttpResponseMessage Get()
        {
            string result = _verticesProcessor.Get(new BiaVProject());
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(result.ToString(), Encoding.UTF8, "text/html");
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            return response;
        }

        // GET api/ipmvpd/5
        public string Get(string id)
        {
            return "value";
        }

        // POST api/ipmvpd
        public HttpResponseMessage Post([FromBody]Object p)
        {
            string result = _verticesProcessor.Post(p);
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(result.ToString(), Encoding.UTF8, "text/html");
            return response;
        }

        // PUT api/ipmvpd/17/2
        public HttpResponseMessage Put(int cluster, int record, [FromBody]Object p)
        {
            string result = _verticesProcessor.Put(cluster, record, p);
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(result.ToString(), Encoding.UTF8, "text/html");
            return response;

        }

        //DELETE api/ipmvpd/17/2
        public HttpResponseMessage Delete(int cluster, int record)
        {
            string result = _verticesProcessor.Delete(cluster, record);
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(result.ToString(), Encoding.UTF8, "text/html");
            return response;
        }
    }
}
