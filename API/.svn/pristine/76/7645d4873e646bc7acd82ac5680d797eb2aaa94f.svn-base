using Newtonsoft.Json.Linq;
using WebApiBia.Data.QueryProcessors.Bia;
using WebApiBia.Web.Models.DataMapper;

namespace WebApiBia.Web.Api.Core.Processors.Controllers.Bia
{
    class ReportPropertyOverrideProcessor : IReportPropertyOverrideProcessor
    {
        private readonly IReportPropertyOverrideQueryProcessor _queryProcessor;
        private readonly IReportPropertyQueryProcessor _reportQueryProcessor;

        public ReportPropertyOverrideProcessor(IReportPropertyOverrideQueryProcessor queryProcessor, IReportPropertyQueryProcessor reportQueryProcessor)
        {
            _queryProcessor = queryProcessor;
            _reportQueryProcessor = reportQueryProcessor;

        }
        public string Get(object p)
        {
            return _queryProcessor.Get(p);
        }



        public string Post(object p, object o)
        {
            VertexParentPropertiesModel vertexParent = (VertexParentPropertiesModel) p;
            _reportQueryProcessor.Put(vertexParent.Cluster, vertexParent.Record, o);
            return _queryProcessor.Post(p, o);
        }

        public string Put(object p, object o)
        {
            VertexParentPropertiesModel vertexParent = (VertexParentPropertiesModel)p;
            _reportQueryProcessor.Put(vertexParent.Cluster, vertexParent.Record, o);
           return _queryProcessor.Put(p,o);
        }
    }
}