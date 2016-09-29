using System;
using System.Configuration;
using System.Text;
using System.Web.Compilation;
using Newtonsoft.Json.Linq;
using Npgsql;
using WebApiBia.Data.Entities.Bia;
using WebApiBia.Data.Postgres.GenericQueries;
using WebApiBia.Data.Postgres.WidgetCreators;

namespace WebApiBia.Data.Postgres.Clients
{
    public class TemplateReportClientPq 
    {

        private readonly  GenericQueriesPg _genericQueriesPg = new GenericQueriesPg();
        private readonly GenericQueriesPg _genericQueries = new GenericQueriesPg();
        public string Post(int clusterId, int recordId, object p)
        {

            string firstChildType = _genericQueries.GetFirstChildType("vertex_content_navigation", "public", recordId, clusterId);
            return ProcessRequest(firstChildType, clusterId, recordId, p);

        }
        private string ProcessRequest(string firstChildCheck, int clusterId, int recordId, object p)
        {
            JObject resultObj = new JObject();


            switch (firstChildCheck)
            {
                case "BiaVNavTabNavigator":
                    resultObj["errorMessage"] = "Currently a '[TAB NAVIGATOR]' Component is not supported at the same navigation level as a Report or Widget Component";
                    break;
                case "BiaVReport":
                  AddWidget(clusterId, recordId, p);                  
                  break;
                case "":
                    AddWidget(clusterId, recordId, p);
                    break;
            }

            return resultObj.ToString();
        }

        private void AddWidget(int clusterId, int recordId, object p)
        {
            var clientObject = (JObject)p;
            var vertex = clientObject.ToObject<BiaVBase>();
            string constr = ConfigurationManager.AppSettings["postgresconnectionstring"];

            if (!AddWidgetInManagedCode(clusterId, recordId, vertex.Label))
            {
                using (NpgsqlConnection con = new NpgsqlConnection(constr))
                {
                    con.Open();

                    int maxOrder = _genericQueriesPg.GetMaxOrder(con, "vertex_content_navigation", "public", recordId, clusterId);

                    StringBuilder selectQuery = new StringBuilder();
                    selectQuery.Append(" SELECT public.create_widget_" + vertex.Label + "(" + recordId + " , " + ++maxOrder + ")");

                    using (NpgsqlCommand cmd = new NpgsqlCommand(selectQuery.ToString(), con))
                    {
                        cmd.ExecuteNonQuery();
                    }
                }
            }
     
        }

        private bool AddWidgetInManagedCode(int clusterId, int recordId, string widget)
        {
            string path = "WebApiBia.Data.Postgres.WidgetCreators." + widget + "WidgetCreator";
            Type reportDataProcessorType = BuildManager.GetType(path, false);
          

            if (reportDataProcessorType != null)
            {
                IWidgetCreator propertyValuesProcessor = Activator.CreateInstance(reportDataProcessorType) as IWidgetCreator;
                propertyValuesProcessor.CreateWidget(clusterId, recordId);
                return true;
            }

            return false;
        }
    }
}