using System;
using System.Collections.Generic;
using System.Configuration;
using System.Net;
using System.Text;
using Newtonsoft.Json.Linq;
using Npgsql;
using WebApiBia.Common.Json;
using WebApiBia.Data.Entities.Bia;
using WebApiBia.Data.Postgres.GenericQueries;
using WebApiBia.Data.Postgres.Mapper;
using WebApiBia.Web.Models.TreeMenu.TemplateLibrary;

namespace WebApiBia.Data.Postgres.Clients
{
    public class TemplateTabNavigatorClientPq 
    {

        private readonly JsonHelper _json = new JsonHelper();
        private readonly GenericQueriesPg _genericQueries = new GenericQueriesPg();

        public string Post(int clusterId, int recordId, object p)
        {
            string vertexLevelJson = CreateVertexLevelJson(p, clusterId);
            string firstChildType =  _genericQueries.GetFirstChildType("vertex_content_navigation", "public", recordId, clusterId);
            return ProcessRequest(firstChildType, clusterId, recordId, vertexLevelJson);

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
                    }
                }
            };

            vertex.Cluster = clusterId;
            vertex.Icon = "resources/images/vertex/tabnavigator.png";
            vertex.Label = "[TAB NAVIGATOR]";
            vertex.Class = "BiaVNavTabNavigator";
            vertex.Value = JObject.Parse(baseProperties.Serialize());
            return _json.Serialize(vertex);

        }


        private string  ProcessRequest(string firstChildCheck, int clusterId, int recordId, string vertexLevelJson)
        {
            JObject resultObj = new JObject();


            switch (firstChildCheck)
            {
                case "BiaVNavTabNavigator":
                    resultObj["errorMessage"] = "Currently only as single '[TAB NAVIGATOR]' Component is supported at the same navigation level";
                    break;
                case "BiaVReport":
                    resultObj["errorMessage"] = "Currently a '[TAB NAVIGATOR]' Component is not supported at the same navigation level as a Report or Widget Component";
                    break;
                case "":
                    _genericQueries.AddContentNavigationVertex(clusterId, recordId, vertexLevelJson);
                    break;
            }

            return resultObj.ToString();
        }


    }
}