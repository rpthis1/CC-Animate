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
    public class ContentTreeFetchAllController : ApiController
    {
        // GET api/ipmvpd

        private readonly IContentTreeFetchAllProcessor _processor;
        private readonly IDataMapper _mapper;
        public ContentTreeFetchAllController(IContentTreeFetchAllProcessor processor, IDataMapper mapper)
        {
           _processor = processor;
           _mapper = mapper;
        }
        public void Get()
        {

        }

        // GET api/ipmvpd/5
        public HttpResponseMessage Get(int cluster, int record, int clusterOwner, int recordOwner)
        {
            VertexParentPropertiesModel vertexParent = _mapper.MapVertexParent(cluster, record, clusterOwner, recordOwner);
            string result = _processor.Get(vertexParent);
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
