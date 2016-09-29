using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Text;
using Newtonsoft.Json.Linq;
using Npgsql;
using WebApiBia.Common.Json;
using WebApiBia.Dashboard.UiControls.Chart.Series.Gradients.Util;
using WebApiBia.Data.Entities.Bia;
using WebApiBia.Data.Postgres.GenericQueries;

namespace WebApiBia.Data.Postgres.WidgetCreators
{
    class MVOptionCWidgetCreator : IWidgetCreator
    {
        private readonly GenericQueriesPg _genericQueriesPg = new GenericQueriesPg();
        private readonly GenericWidgetCreators _genericWidgetCreators = new GenericWidgetCreators();
        private readonly WidgetConfigGenerator  _widgetConfigGenerator = new WidgetConfigGenerator();

        public void CreateWidget(int clusterId, int recordId)
        {

            string constr = ConfigurationManager.AppSettings["postgresconnectionstring"];

            using (NpgsqlConnection con = new NpgsqlConnection(constr))
            {
                con.Open();
                NpgsqlTransaction transaction =  con.BeginTransaction(IsolationLevel.ReadCommitted);

                int maxOrder =  _genericQueriesPg.GetMaxOrder(con, "vertex_content_navigation", "public", recordId, clusterId);

                _genericWidgetCreators.CreateWidgetParentWithXtype(con, clusterId, recordId, maxOrder, "MV OPTION C", "resources/images/vertex/letterC.png", "MV Option C", "reporting-reportbase-mv-MV", GetType().Name);

                var lastInsertedVertexContentNavigationId = _genericQueriesPg.LastInsertedVertexContentNavigationId(con);

                _genericWidgetCreators.CreateBiaVReportPropertyString(con, lastInsertedVertexContentNavigationId, ++maxOrder, clusterId, "reportProvider", "Ipmvp Normalized Delta OAT Report");
                _genericWidgetCreators.CreateBiaVReportPropertyString(con, lastInsertedVertexContentNavigationId, ++maxOrder, clusterId, "propertiesProcessor", "MvProperitesProcessor");
                _genericWidgetCreators.CreateBiaVReportPropertyString(con, lastInsertedVertexContentNavigationId, ++maxOrder, clusterId, "reportFormatter", "MvOptionCFormatter");
                _genericWidgetCreators.CreateBiaVReportPropertyString(con, lastInsertedVertexContentNavigationId, ++maxOrder, clusterId, "reportDataDecorator", "MvDecorator");

                _genericWidgetCreators.CreateWidgetValuesClass(con, lastInsertedVertexContentNavigationId, ++maxOrder, clusterId, "mvDates", _widgetConfigGenerator.GetMvCBiaVReportPropertyMvDates());
                _genericWidgetCreators.CreateWidgetValuesClass(con, lastInsertedVertexContentNavigationId, ++maxOrder, clusterId, "parameters", _widgetConfigGenerator.GetMvCBiaVReportPropertyParameters());
                _genericWidgetCreators.CreateWidgetValuesClass(con, lastInsertedVertexContentNavigationId, ++maxOrder, clusterId, "meteredDataReport", _widgetConfigGenerator.GetMeteredDataReportMvCOptionBiaVBaseProperties());
                _genericWidgetCreators.CreateWidgetValuesClass(con, lastInsertedVertexContentNavigationId, ++maxOrder, clusterId, "mvcOptions", _widgetConfigGenerator.GetMvCOptionBiaVBaseProperties());
                _genericWidgetCreators.CreateWidgetValuesClass(con, lastInsertedVertexContentNavigationId, ++maxOrder, clusterId, "metered parameter decorators", _widgetConfigGenerator.GetMeteredDataBiaVReportPropertyParameterDecorators());



                transaction.Commit();
            }
        }





 
    }
}