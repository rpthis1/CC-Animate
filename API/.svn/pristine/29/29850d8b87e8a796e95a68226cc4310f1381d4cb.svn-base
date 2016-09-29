using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Web.Http;
using Newtonsoft.Json.Linq;
using WebApiBia.Web.Api.Core.Processors.Controllers.IBIS;

namespace WebApiBia.Web.Api.Controllers.IBISRealTime
{
    public class TreeRootController : ApiController
    {
        // GET api/ipmvpd


        public TreeRootController()
        {
           
        }
        public HttpResponseMessage Get()
        {
            JObject obj = new JObject
            {
                ["text"] = "IBIS Manager",
                ["children"] = true,
                ["id"] = 1
            };
            JArray arr = new JArray { obj };

            string result = arr.ToString();

            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(result.ToString(), Encoding.UTF8, "text/html");
            response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/json");

            return response;
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
        public void Delete(int cluster, int record)
        {

        }
    }
}
