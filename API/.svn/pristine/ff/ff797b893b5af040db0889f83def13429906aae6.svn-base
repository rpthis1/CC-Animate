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
    public class ReportPropertiesClient : IReportPropertiesClient
    {
        private readonly IOrientClient _orient;
        private readonly IJsonHelper _json;
        private readonly AutoMapper _mapper = new AutoMapper();


        public ReportPropertiesClient(IOrientClient orient, IJsonHelper json)
        {
            _orient = orient;
            _json = json;
        }

        public string Get(int cluster, int record, int clusterowner, int recordowner)
        {
            string parameter = String.Format("/RptGetProperites/{0}:{1}/{2}:{3}", clusterowner, recordowner, cluster, record);
            WebRequest request = _orient.GetClientGet("/function", parameter);
            return _orient.ProcessGettRequest(request);
        }

    }
}