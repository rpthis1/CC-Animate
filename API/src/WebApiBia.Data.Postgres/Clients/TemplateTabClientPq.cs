using System;
using System.Collections.Generic;
using System.Net;
using Newtonsoft.Json.Linq;
using WebApiBia.Common.Json;
using WebApiBia.Data.Entities.Bia;
using WebApiBia.Data.Postgres.GenericQueries;
using WebApiBia.Web.Models.TreeMenu.TemplateLibrary;

namespace WebApiBia.Data.Postgres.Clients
{
    public class TemplateTabClientPq 
    {

        private readonly JsonHelper _json = new JsonHelper();
        private readonly GenericQueriesPg _genericQueries = new GenericQueriesPg();

        public string Post(int clusterId, int recordId, object p)
        {
            string vertexLevelJoston = CreateVertexLevelJson(p, clusterId);
            _genericQueries.AddContentNavigationVertex(clusterId, recordId, vertexLevelJoston);

            return string.Empty;
        }
        private string CreateVertexLevelJson(object p, int clusterId)
        {
            var clientObject = (JObject)p;
            var vertex = clientObject.ToObject<BiaVBase>();
             
            var baseProperties = new BiaVBaseProperties()
            {
                Type = "BiaVBaseProperties",
                Items = new List<BiaVBaseProperty>()
                {

                       new BiaVBaseProperty()
                    {
                        Label = "Enabled",
                        Value = "No",
                        BiaType = "combobox",
                        BiaStore = "Yes,No"
                    },

                    new BiaVBaseProperty()
                    {
                        Label = "Title",
                        Value = vertex.Label,
                        BiaType = "textfield"
                    }

                }
            };

            vertex.Cluster = clusterId;
            vertex.Icon = "resources/images/vertex/tab.png";
            vertex.Label = "[TAB]";
            vertex.Class = "BiaVNavTab";
            vertex.Value = JObject.Parse(baseProperties.Serialize());
            return _json.Serialize(vertex);

        }
    }
}