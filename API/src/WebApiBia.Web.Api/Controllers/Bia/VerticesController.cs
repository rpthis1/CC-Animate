using System;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using Newtonsoft.Json.Linq;
using WebApiBia.Dashboard.Core.FormatterProcessor.DataFormatters;
using WebApiBia.Data.Mapper;
using WebApiBia.Web.Api.Core.Processors.Controllers.Bia;
using WebApiBia.Web.Models.Factory.DataMapper;

namespace WebApiBia.Web.Api.Controllers.Bia
{
    public class VerticesController : ApiController
    {
        // GET api/ipmvpd

        private readonly IVerticesProcessor _processor;
        private readonly AutoMapper _autoMapper = new AutoMapper();
        public VerticesController(IVerticesProcessor processor)
        {
            _processor = processor;
        }
        public void Get()
        {
            
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
            dynamic o = (JObject) p;
            string cls = o.Class;
            _processor.Put(cluster, record, _autoMapper.VertexMap(o, cls));
        }

        // DELETE api/ipmvpd/17/2
        public HttpResponseMessage Delete(int cluster, int record)
        {
            string result = _processor.Delete(cluster, record);
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(result.ToString(), Encoding.UTF8, "text/html");
            return response;
        }
    }
}
