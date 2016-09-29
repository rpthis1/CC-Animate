﻿using System;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Web.Http;
using System.Web.Services.Protocols;
using System.Xml;
using System.Xml.Linq;
using IBIS.Infrastructure.Compression;
using Newtonsoft.Json.Linq;
using WebApiBia.Data.Reports.FlexService;
using WebApiBia.Web.Api.Core.Processors.Controllers.IBIS;
using WebApiBia.Web.Api.Core.Processors.Controllers.IBISRealTime;

namespace WebApiBia.Web.Api.Controllers.IBISRealTime
{
    public class CompressedObjectController : ApiController
    {
        // GET api/ipmvpd

        private readonly ICompressedObjectProcessor _processor;
        public CompressedObjectController(ICompressedObjectProcessor processor)
        {
            _processor = processor;
        }
        public HttpResponseMessage Get()
        {
            var parameters = Request.RequestUri.ParseQueryString();
            string path = parameters.Get("rp");
            string result = _processor.Get(path);


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
        public void Put([FromBody]object p)
        {

        }

        // DELETE api/ipmvpd/17/2
        public void Delete(int cluster, int record)
        {

        }
    }
}