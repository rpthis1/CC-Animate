using System;
using System.Net;
using System.Web;
using Newtonsoft.Json.Linq;
using WebApiBia.Common.Json;
using WebApiBia.Data.Entities.Bia;
using WebApiBia.Data.Mapper;
using WebApiBia.Web.Models.DataMapper;

namespace WebApiBia.Data.OrientDb.Clients
{
    public class ReportPropertyOverrideClient : IReportPropertyOverrideClient
    {
        private readonly IOrientClient _orient;
        private readonly IJsonHelper _json;
        private readonly AutoMapper _mapper = new AutoMapper();


        public ReportPropertyOverrideClient(IOrientClient orient, IJsonHelper json)
        {
            _orient = orient;
            _json = json;
        }

        public string Get(int cluster, int record, int clusterowner, int recordowner)
        {
            string parameter = String.Format("/ConTreeGetOverride/{0}:{1}/{2}:{3}", clusterowner, recordowner, cluster, record);
            WebRequest request = _orient.GetClientGet("/function", parameter);
            return _orient.ProcessGettRequest(request);
        }

        public string Post(int cluster, int record, int clusterowner, int recordowner, object o)
        {
            dynamic clientObject = (JObject)o;
            dynamic overr = clientObject.Override;
            string cls = (string)overr["Class"];
            BiaVReportPropertyOverrideEDocument property = _mapper.Map(overr, cls);
            string propertyId = property.GetDbFriendlyPropertyRid();
            string json = property.Serialize();
            json = HttpUtility.UrlEncode(json);
            string parameter = String.Format("/ConTreeCreateOverride/{0}:{1}/{2}/{3}", clusterowner, recordowner, json, propertyId);
            WebRequest request = _orient.GetClientPost("/function", parameter);
            string result = _orient.ProcessPostRequest(request, "");
            return result;

        }

        public string Put(int cluster, int record, int clusterowner, int recordowner, object o)
        {
            dynamic clientObject = (JObject)o;
            dynamic overr = clientObject.Override;
            string cls = (string)overr["Class"];
            BiaVReportPropertyOverrideEDocument property = _mapper.Map(overr, cls);
            string json = property.Serialize();
            json = HttpUtility.UrlEncode(json);
            string overrideRid = (string)clientObject.OverrideRid;
            overrideRid = overrideRid.Replace("#", "");
            string parameter = String.Format("/ConTreeUpdateOverride/{0}/{1}", overrideRid, json);
            WebRequest request = _orient.GetClientPost("/function", parameter);
            string result = _orient.ProcessPostRequest(request, "");

            return result;
        }
    }
}