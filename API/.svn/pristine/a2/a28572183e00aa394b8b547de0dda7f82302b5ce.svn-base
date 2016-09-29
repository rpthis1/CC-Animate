using System;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using WebApiBia.Web.Api.Core.Processors.Controllers.Bia;

namespace WebApiBia.Web.Api.Controllers.Bia
{
    public class ProjectsTreeController : ApiController
    {
        // GET api/ipmvpd

        private readonly IProjectsTreeProcessor _projectsTreeProcessor;

 
        public ProjectsTreeController(IProjectsTreeProcessor projectsTreeProcessor)
        {
            _projectsTreeProcessor = projectsTreeProcessor;
        }

        public HttpResponseMessage Get()
        {
            var parameters = Request.RequestUri.ParseQueryString();
            string cluster = parameters.Get("cluster");
            string record = parameters.Get("record");
            string result = _projectsTreeProcessor.Get(Convert.ToInt32(cluster), Convert.ToInt32(record));
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(result.ToString(), Encoding.UTF8, "text/html");

            return response;
        }

        // GET api/ipmvpd/5
        public HttpResponseMessage Get(int cluster, int record)
        {
            string result = _projectsTreeProcessor.Get(cluster, record);
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(result.ToString(), Encoding.UTF8, "text/html");


            return response;
        }

        // POST api/ipmvpd
        public HttpResponseMessage Post([FromBody]object p)
        {
            string result = "";
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(result.ToString(), Encoding.UTF8, "text/html");
            return response;
        }

        // PUT api/ipmvpd/17/2
        public HttpResponseMessage Put(int cluster, int record, [FromBody]object p)
        {
            string result = "";
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(result.ToString(), Encoding.UTF8, "text/html");
            return response;

        }

        // DELETE api/ipmvpd/17/2
        public HttpResponseMessage Delete(int cluster, int record)
        {
            string result = "";
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(result.ToString(), Encoding.UTF8, "text/html");
            return response;
        }
    }
}
