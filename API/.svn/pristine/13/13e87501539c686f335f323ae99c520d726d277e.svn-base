using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WebApiBia.Data.Entities.Bia;
using WebApiBia.Data.Mapper;
using WebApiBia.Web.Api.Core.Processors.Controllers.Bia;
using WebApiBia.Web.Models.DataMapper;
using WebApiBia.Web.Models.Factory.DataMapper;

namespace WebApiBia.Web.Api.Controllers.Bia
{
    public class LogicalEdgeController : ApiController
    {
        // GET api/ipmvpd

        private readonly ILogicalEdgeProcessor _processor;
        private readonly IDataMapper _mapper;
        public LogicalEdgeController(ILogicalEdgeProcessor processor, IDataMapper mapper)
        {
            _processor = processor;
            _mapper = mapper;
        }
        public void Get()
        {

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
        public HttpResponseMessage Delete(int cluster, int record, int clusterowner, int recordowner, [FromBody]object p)
        {
            VertexParentPropertiesModel vertexParent = _mapper.MapVertexParent(cluster, record, clusterowner, recordowner);
            string result = _processor.Delete(vertexParent, p);
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(result.ToString(), Encoding.UTF8, "text/html");
            return response;
        }
    }
}
