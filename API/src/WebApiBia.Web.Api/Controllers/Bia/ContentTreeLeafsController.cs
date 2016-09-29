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
    public class ContentTreeLeafsController : ApiController
    {
        // GET api/ipmvpd

        private readonly IContentTreeProcessor _processor;
        private readonly IContentTreeTemplateOwnerProcessor _templateOwnerProcessor;
        private readonly IDataMapper _mapper;
        public ContentTreeLeafsController(IContentTreeProcessor processor, IDataMapper mapper, IContentTreeTemplateOwnerProcessor templateOwnerProcessor)
        {
           _processor = processor;
           _mapper = mapper;
            _templateOwnerProcessor = templateOwnerProcessor;
        }
        public void Get()
        {

        }
        public HttpResponseMessage Get(int cluster, int record, int clusterowner, int recordowner)
        {
            VertexParentPropertiesModel vertexParent = _mapper.MapVertexParent(cluster, record, clusterowner, recordowner);

            string result = _templateOwnerProcessor.Get(vertexParent,true);
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(result.ToString(), Encoding.UTF8, "text/html");
            return response;
        }

       // GET api/ipmvpd/5
        public void Get(int cluster, int record)
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
