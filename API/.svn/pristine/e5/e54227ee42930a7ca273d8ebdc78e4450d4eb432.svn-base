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
    public class ReorderTreeController : ApiController
    {
        // GET api/ipmvpd

        private readonly IReorderTreeProcessor _processor;

        public ReorderTreeController(IReorderTreeProcessor processor)
        {
           _processor = processor;
        }
        public void Get()
        {

        }
        public void Get(int cluster, int record, int clusterowner, int recordowner)
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
        public HttpResponseMessage Put([FromBody]object p)
        {
            string result = _processor.Put(p);
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(result.ToString(), Encoding.UTF8, "text/html");
            return response;

        }

        // DELETE api/ipmvpd/17/2
        public void Delete(int cluster, int record)
        {
            
        }
    }
}
