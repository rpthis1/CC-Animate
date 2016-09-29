using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml.Linq;
using WebApiBia.Common.Json;
using WebApiBia.Data.Reports.BI;

namespace WebApiBia.Web.Api.Core.Processors.Controllers.BiaAdmin
{
    public class UtbGetEntitiesProcessor : IUtbGetEntitiesProcessor
    {
        private readonly JsonHelper _jsonHelper = new JsonHelper();
        public string Get()
        {
            //    < Data >
            //           < Entity utbEntityId = "1" entityName = "B1 Utility Bill" entityId = "3" />
            //   </ Data >

            BISIntelligenceSoapClient client = new BISIntelligenceSoapClient();
            string entities = client.Utb_GetEntities();
            JArray entitiesArray = new JArray();
            JObject entitiesTreeRoot = new JObject();
            entitiesTreeRoot["text"] = "Tree Root";
            entitiesTreeRoot["children"] = entitiesArray;
            XElement xmlEntities = XElement.Parse(entities);

            foreach (var xNode in xmlEntities.Nodes())
            {
                var xmlEntity = (XElement) xNode;
                JObject entityChild = new JObject();
                entityChild["utbEntityId"] = xmlEntity.Attribute("utbEntityId").Value;
                entityChild["text"] = xmlEntity.Attribute("entityName").Value;
                entityChild["entityId"] = xmlEntity.Attribute("entityId").Value;
                entityChild["icon"] = "resources/images/vertex/productionTreeNavIcon.png";
                entityChild["leaf"] = true;
                entitiesArray.Add(entityChild);
            }
            return _jsonHelper.Serialize(entitiesTreeRoot);
        }
    }
}