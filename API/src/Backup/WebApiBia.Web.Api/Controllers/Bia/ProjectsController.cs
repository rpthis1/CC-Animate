using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApiBia.Web.Api.Controllers.Bia
{
    public class ProjectsController : ApiController
    {

         private readonly IBiaVertexProxy _vertexProxy;

        public BiaProjectsController()
        {
            
        }

        public BiaProjectsController(IBiaVertexProxy vertexProxy)
        {
            this._vertexProxy = vertexProxy;
        }
        public HttpResponseMessage Get()
        {
            string result = _vertexProxy.Get();
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(result.ToString(), Encoding.UTF8, "text/html");
            return response;
        }

        // GET api/ipmvpd/5
        public string Get(string id)
        {
            return "value";
        }

        // POST api/ipmvpd
        public HttpResponseMessage Post([FromBody]BiaVProject p)
        {
            string result = _vertexProxy.Post(p);
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(result.ToString(), Encoding.UTF8, "text/html");
            return response;
        }

        // PUT api/ipmvpd/17/2
        public HttpResponseMessage Put(int cluster,int record, [FromBody]BiaVProject p)
        {
            string result = _vertexProxy.Put(cluster,record,p);
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(result.ToString(), Encoding.UTF8, "text/html");
            return response;

        }

        // DELETE api/ipmvpd/17/2
        public HttpResponseMessage Delete(int cluster, int record)
        {
            string result = _vertexProxy.Delete(cluster, record);
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(result.ToString(), Encoding.UTF8, "text/html");
            return response;
        }
    }
}
