using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WebApiBia.Common.Json;
using WebApiBia.Data.Entities;
using WebApiBia.Web.Common;

namespace WebApiBia.Data.OrientDb.Commands
{
    public class GenericCommands : IGenericCommands
    {
        private readonly IJsonHelper _jsonHelper;

        public GenericCommands()
        {
            _jsonHelper = WebContainerManager.Get<IJsonHelper>();
        }

        public string SelectFrom(Object type)
        {
            string cmd = String.Format("select from {0}", type.GetType().Name);
            return cmd;
        }

        public string AddVertex(Object type)
        {
            string cmd = String.Format("create vertex  {0} content {1}", type.GetType().Name, _jsonHelper.Serialize(type));
            return cmd;
        }

        public string UpdateVertex(int cluster, int record, Object type)
        {
            string cmd = String.Format("update #{0}:{1} content {2} ", cluster, record, _jsonHelper.Serialize(type));
            return cmd;
        }

        public string DeleteVertex(int cluster, int record)
        {

            string cmd = String.Format("delete vertex #{0}:{1}", cluster, record);
            return cmd;
        }

        public string DeleteEdge(int cluster, int record)
        {
              string cmd = String.Format("delete edge #{0}:{1}", cluster, record);
              return cmd;
        }
        
    }
}