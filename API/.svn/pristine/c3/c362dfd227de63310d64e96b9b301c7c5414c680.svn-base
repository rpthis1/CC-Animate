using WebApiBia.Data.QueryProcessors.Bia;
using WebApiBia.Web.Models.DataMapper;

namespace WebApiBia.Web.Api.Core.Processors.Controllers.Bia
{
    class ReportProcessor : IReportProcessor
    {
        private readonly IGenericTreeQueryProcessor _queryProcessor;
        public ReportProcessor( IGenericTreeQueryProcessor queryProcessor )
        {
            _queryProcessor = queryProcessor;
        }

        public string Get(object p)
        {
            VertexPropertiesModel vertex = (VertexPropertiesModel) p;
            return _queryProcessor.Get(vertex.Cluster,vertex.Record);
        }
    }
}