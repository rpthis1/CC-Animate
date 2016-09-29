using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApiBia.Data.QueryProcessors.Bia;
using WebApiBia.Web.Common;

namespace WebApiBia.Web.Api.Core.Processors.Controllers.Bia
{
    public sealed class VerticesProcessor: IVerticesProcessor
    {
        private readonly IVerticesQueryProcessor _verticesQueryProcessor;


        public VerticesProcessor()
        {
            _verticesQueryProcessor = WebContainerManager.Get<IVerticesQueryProcessor>();
        }

        public string Get(Object type)
        {
            return _verticesQueryProcessor.Get(type);
        }

        public string Post(object type)
        {
            return _verticesQueryProcessor.Post(type);
        }

        public string Put(int cluster, int record, object type)
        {
            return _verticesQueryProcessor.Put(cluster, record, type);
        }

        public string Delete(int cluster, int record)
        {
            return _verticesQueryProcessor.Delete(cluster, record);
        }

    }
}