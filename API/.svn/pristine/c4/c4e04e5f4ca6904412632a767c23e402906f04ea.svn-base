using System;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using Newtonsoft.Json.Linq;
using WebApiBia.Data.Entities.Bia;
using WebApiBia.Web.Api.Core.Processors.Controllers.Bia;
using WebApiBia.Web.Models.DataMapper;
using WebApiBia.Web.Models.Factory.DataMapper;

namespace WebApiBia.Web.Api.Controllers.Bia
{
    public class ReportPropertyOverrideController : ApiController
    {
        // GET api/ipmvpd

        private readonly IReportPropertyOverrideProcessor _processor;
        private readonly IDataMapper _mapper;

        public ReportPropertyOverrideController(IReportPropertyOverrideProcessor processor, IDataMapper mapper)
        {
            _processor = processor;
            _mapper = mapper;
        }
        public void Get()
        {
 
        }

        // GET api/ipmvpd/5
        public HttpResponseMessage Get(int cluster, int record, int clusterowner, int recordowner)
        {
            VertexParentPropertiesModel vertexParent = _mapper.MapVertexParent(cluster, record, clusterowner, recordowner);
            string result = _processor.Get(vertexParent);
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(result, Encoding.UTF8, "text/html");
            return response;
           
        }

        // POST api/ipmvpd
        public HttpResponseMessage Post(int cluster, int record, int clusterowner, int recordowner, [FromBody]object p)
        {
            VertexParentPropertiesModel vertexParent = _mapper.MapVertexParent(cluster, record, clusterowner, recordowner);
            string result = _processor.Post(vertexParent,p);
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(result, Encoding.UTF8, "text/html");
            return response;
          
        }

        // PUT api/ipmvpd/17/2
        public HttpResponseMessage Put(int cluster, int record, int clusterowner, int recordowner, [FromBody]object p)
        {
            VertexParentPropertiesModel vertexParent = _mapper.MapVertexParent(cluster, record, clusterowner, recordowner);
            string result = _processor.Put(vertexParent, p);
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
