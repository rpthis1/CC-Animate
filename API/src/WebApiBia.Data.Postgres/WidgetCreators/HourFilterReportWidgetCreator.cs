﻿using System;
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
    class HourFilterReportWidgetCreator : IWidgetCreator
    {
        private readonly GenericQueriesPg _genericQueriesPg = new GenericQueriesPg();
        private readonly GenericWidgetCreators _genericWidgetCreators = new GenericWidgetCreators();
        private readonly GradientUtil _gradientUtil = new GradientUtil();
        private readonly WidgetConfigGenerator  _widgetConfigGenerator = new WidgetConfigGenerator();

        public void CreateWidget(int clusterId, int recordId)
        {

            string constr = ConfigurationManager.AppSettings["postgresconnectionstring"];

            using (NpgsqlConnection con = new NpgsqlConnection(constr))
            {
                con.Open();
                NpgsqlTransaction transaction =  con.BeginTransaction(IsolationLevel.ReadCommitted);

                int maxOrder =  _genericQueriesPg.GetMaxOrder(con, "vertex_content_navigation", "public", recordId, clusterId);

                _genericWidgetCreators.CreateWidgetParent(con, clusterId, recordId, maxOrder, "HOUR FILTER REPORT", "resources/images/vertex/hourFilter.png", "Hour Filter Report (kWh)", GetType().Name);

                var lastInsertedVertexContentNavigationId = _genericQueriesPg.LastInsertedVertexContentNavigationId(con);

                _genericWidgetCreators.CreateBiaVReportPropertyString(con, lastInsertedVertexContentNavigationId, ++maxOrder, clusterId, "reportProvider", "Hour Filter Report");
                _genericWidgetCreators.CreateBiaVReportPropertyString(con, lastInsertedVertexContentNavigationId, ++maxOrder, clusterId, "reportDataDecorator", "PieChartDecorator");
                _genericWidgetCreators.CreateBiaVReportPropertyString(con, lastInsertedVertexContentNavigationId, ++maxOrder, clusterId, "reportFormatter", "HourFilterReportFormatter");
                _genericWidgetCreators.CreateWidgetValuesClass(con, lastInsertedVertexContentNavigationId, ++maxOrder, clusterId, "parameters", _widgetConfigGenerator.GetSingleEntityWithDisabledDepthBiaVReportPropertyParameters());
                _genericWidgetCreators.CreateWidgetValuesClass(con, lastInsertedVertexContentNavigationId, ++maxOrder, clusterId, "dates", _widgetConfigGenerator.GetBiaVReportPropertyDates());
                _genericWidgetCreators.CreateWidgetValuesClass(con, lastInsertedVertexContentNavigationId, ++maxOrder, clusterId, "parameter decorators", _widgetConfigGenerator.GetHourFilterBiaVReportPropertyParameterDecorators());
                _genericWidgetCreators.CreateWidgetValuesClass(con, lastInsertedVertexContentNavigationId, ++maxOrder, clusterId, "gradients", _gradientUtil.GetHourFilteriaVReportPropertyGradients());

                transaction.Commit();
            }
        }





 
    }
}