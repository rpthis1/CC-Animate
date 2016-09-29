using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApiBia.Data.QueryProcessors.Bia;
using WebApiBia.Web.Common;

namespace WebApiBia.Web.Api.Core.Processors.Controllers.Bia
{
    public class GenericTreeProcessor : IGenericTreeProcessor
    {
        private readonly IGenericTreeQueryProcessor _genericTreeQueryProcessor;
        public GenericTreeProcessor()
        {
            _genericTreeQueryProcessor = WebContainerManager.Get<IGenericTreeQueryProcessor>();
        }

        public string Get(object type)
        {
            return _genericTreeQueryProcessor.Get(type);
        }

        public string Get(int cluster, int record)
        {
            return _genericTreeQueryProcessor.Get(cluster, record);
        }
    }
}