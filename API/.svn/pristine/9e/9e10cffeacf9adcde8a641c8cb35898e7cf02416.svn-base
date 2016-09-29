using System;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using WebApiBia.Data.Entities.Bia;
using WebApiBia.Web.Api.Core.Processors.Controllers.Bia;

namespace WebApiBia.Web.Api.Controllers.Bia
{
    public class NavigationTreeController : ApiController
    {
        // GET api/ipmvpd

        private readonly INavigaionTreeProcessor _processor;
        public NavigationTreeController(INavigaionTreeProcessor processor)
        {
            _processor = processor;
        }
        public void Get()
        {

        }

        // GET api/ipmvpd/5
        public HttpResponseMessage Get(int cluster, int record)
        {
            string result = _processor.Get(cluster, record, false);
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
