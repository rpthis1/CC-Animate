using System;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using WebApiBia.Data.Entities.Bia;
using WebApiBia.Web.Api.Core.Processors.Controllers.Bia;

namespace WebApiBia.Web.Api.Controllers.Bia
{
    public class ProjectsTreeStageTagController : ApiController
    {
        private readonly IProjectsTreeStageTagProcessor _processor;
        private readonly IVerticesProcessor _verticesProcessor;
        // GET api/ipmvpd

        public ProjectsTreeStageTagController(IProjectsTreeStageTagProcessor processor, IVerticesProcessor verticesProcessor)
        {
            _processor = processor;
            _verticesProcessor = verticesProcessor;
        }
        public void Get()
        {
 
        }

        // GET api/ipmvpd/5
        public void Get(int cluster, int record)
        {
            
        }

        // POST api/ipmvpd
        public HttpResponseMessage Post(int cluster, int record, [FromBody]object p)
        {
            string result = _processor.Post(cluster, record, p);
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(result.ToString(), Encoding.UTF8, "text/html");
            return response;
        }

        // PUT api/ipmvpd/17/2
        public void Put(int cluster, int record, [FromBody]object p)
        {
          

        }

        // DELETE api/ipmvpd/17/2
        public HttpResponseMessage Delete(int cluster, int record)
        {
            string result = _verticesProcessor.Delete(cluster, record);
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(result.ToString(), Encoding.UTF8, "text/html");
            return response;
         
        }
    }
}
