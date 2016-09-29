using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Newtonsoft.Json.Linq;
using Npgsql;
using WebApiBia.Common.Json;
using WebApiBia.Data.Entities.Bia;

namespace WebApiBia.Data.Postgres.GenericQueries
{
     internal sealed class GenericWidgetCreators
    {
        private readonly JsonHelper _json = new JsonHelper();
        public  void CreateBiaVReportPropertyString(NpgsqlConnection con, int lastInsertedVertexContentNavigationId, int maxOrder, int clusterId, string label, string value)
        {
            StringBuilder query = new StringBuilder();

            BiaVBase vertex = new BiaVBase()
            {
                Label = label,
                Class = "BiaVReportPropertyString",
                Icon = "resources/images/vertex/gear.png",
                Cluster = clusterId,
                Value = value,
                Leaf = "true",
                BiaEditable = false
            };


            query.Append(" INSERT INTO vertex_content_navigation");
            query.Append(" ( \"parent\",\"json_data\", \"vertex_order\") ");


            query.Append(" VALUES ");
            query.Append(" ( " + lastInsertedVertexContentNavigationId + " , \'" + _json.Serialize(vertex) + "\' , " + maxOrder + " ) ");


            using (NpgsqlCommand cmd = new NpgsqlCommand(query.ToString(), con))
            {
                cmd.ExecuteNonQuery();
            }
        }

        public void CreateWidgetParent(NpgsqlConnection con, int clusterId, int recordId, int maxOrder, string widgetLabel,string icon, string widgetTitle, string widgetCreator = "missing")
        {
            StringBuilder selectQuery = new StringBuilder();

            BiaVBase vertex = new BiaVBase()
            {
                WidgetCreator = widgetCreator,
                Label = widgetLabel,
                Class = "BiaVReport",
                Icon = icon,
                Cluster = clusterId
            };

            BiaVBaseProperties vertexValue = new BiaVBaseProperties()
            {
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
                        Value = widgetTitle,
                        BiaType = "textfield"
                    }
                }

            };

            vertex.Value = JObject.Parse(_json.Serialize(vertexValue));

            selectQuery.Append(" INSERT INTO vertex_content_navigation");
            selectQuery.Append(" ( \"parent\",\"json_data\", \"vertex_order\") ");


            selectQuery.Append(" VALUES ");
            selectQuery.Append(" ( " + recordId + " , \'" + _json.Serialize(vertex) + "\' , " + ++maxOrder + " ) ");


            using (NpgsqlCommand cmd = new NpgsqlCommand(selectQuery.ToString(), con))
            {
                cmd.ExecuteNonQuery();
            }

        }

        public void CreateWidgetParentWithXtype(NpgsqlConnection con, int clusterId, int recordId, int maxOrder, string widgetLabel, string icon, string widgetTitle, string xtype, string widgetCreator = "missing")
        {
            StringBuilder selectQuery = new StringBuilder();

            BiaVBase vertex = new BiaVBase()
            {
                WidgetCreator = widgetCreator,
                Label = widgetLabel,
                Class = "BiaVReport",
                Icon = icon,
                Cluster = clusterId
            };

            BiaVBaseProperties vertexValue = new BiaVBaseProperties()
            {
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
                        Value = widgetTitle,
                        BiaType = "textfield"
                    },
                       new BiaVBaseProperty()
                    {
                        Label = "BiaXtype",
                        Value = xtype,
                        BiaType = "textfield",
                        Hidden = "true"
                    }
                }
            
            };

            vertex.Value = JObject.Parse(_json.Serialize(vertexValue));

            selectQuery.Append(" INSERT INTO vertex_content_navigation");
            selectQuery.Append(" ( \"parent\",\"json_data\", \"vertex_order\") ");


            selectQuery.Append(" VALUES ");
            selectQuery.Append(" ( " + recordId + " , \'" + _json.Serialize(vertex) + "\' , " + ++maxOrder + " ) ");


            using (NpgsqlCommand cmd = new NpgsqlCommand(selectQuery.ToString(), con))
            {
                cmd.ExecuteNonQuery();
            }

        }


        public void CreateWidgetValuesClass(NpgsqlConnection con, int lastInsertedVertexContentNavigationId, int maxOrder, int clusterId, string widgetLabel, dynamic vertexValue)
        {
            StringBuilder selectQuery = new StringBuilder();

            BiaVBase vertex = new BiaVBase()
            {
                Label = widgetLabel,
                Class = vertexValue.GetType().Name,
                Cluster = clusterId,
                Leaf = "true"
            };

            vertex.Value = JObject.Parse(_json.Serialize(vertexValue));

            selectQuery.Append(" INSERT INTO vertex_content_navigation");
            selectQuery.Append(" ( \"parent\",\"json_data\", \"vertex_order\") ");


            selectQuery.Append(" VALUES ");
            selectQuery.Append(" ( " + lastInsertedVertexContentNavigationId + " , \'" + _json.Serialize(vertex) + "\' , " + ++maxOrder + " ) ");


            using (NpgsqlCommand cmd = new NpgsqlCommand(selectQuery.ToString(), con))
            {
                cmd.ExecuteNonQuery();
            }

        }


    }
}
