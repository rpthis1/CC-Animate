using System;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using IBIS.Infrastructure.Compression;
using Newtonsoft.Json.Linq;
using WebApiBia.Web.Api.Core.Processors.Controllers.BiaMobile;
using WebApiBia.Web.Api.Core.Processors.Controllers.IBIS;
using WebApiBia.Web.Models.DataMapper;
using WebApiBia.Web.Models.Factory.DataMapper;

namespace WebApiBia.Web.Api.Controllers.IBIS
{
    public class CompressAndBase64Controller : ApiController
    {
        // GET api/ipmvpd


        public void Get()
        {

        }

        // GET api/ipmvpd/5
        public void Get(int cluster, int record, int clusterowner, int recordowner)
        {
  
        }

        // POST api/ipmvpd
        public HttpResponseMessage Post([FromBody]object p)
        {
            JObject parameter = (JObject) p;
            string data = parameter["data"].ToString();
            byte[] decodedData = Convert.FromBase64String(data);
            data = Encoding.UTF8.GetString(decodedData);
            string result = CompressionUtil.CompressAndBase64(data);

            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(result.ToString(), Encoding.UTF8, "text/html");
            return response;

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
