using System;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json.Linq;
using WebApiBia.Dashboard.Core.Dto.Parent;
using WebApiBia.Dashboard.Core.Dto.Report;
using WebApiBia.Dashboard.UiControls.Chart;
using WebApiBia.Dashboard.UiControls.Chart.Axes;
using WebApiBia.Dashboard.UiControls.Chart.Series;
using WebApiBia.Dashboard.UiControls.Chart.Series.Gradients;
using WebApiBia.Dashboard.UiControls.Chart.Series.Gradients.Util;
using WebApiBia.Dashboard.UiControls.Chart.Series.HighlightCfg;
using WebApiBia.Dashboard.UiControls.Chart.Series.Marker;
using WebApiBia.Dashboard.UiControls.Chart.Series.Renderers;
using WebApiBia.Dashboard.UiControls.Chart.Series.Style;
using WebApiBia.Dashboard.UiControls.Chart.Series.ToolTip.Renderers;
using WebApiBia.Dashboard.UiControls.Functions;

namespace WebApiBia.Dashboard.Core.DecoratorProcessor.Chart
{
    public class ContinuousCommissioningDecoratorDesktop : Decorator
    {
        public ContinuousCommissioningDecoratorDesktop(IParent parent)
            : base(parent)
        {

        }

        protected override void DecorateChart(ReportConfig config)
        {
            base.DecorateChart(config);
            Chart.Animation = false;
        }

        protected override void DecorateCategoryAxis(ReportConfig config)
        {
            base.DecorateCategoryAxis(config);
            ChartAxis a = Chart.Axes.FirstOrDefault();
            a.Fields = new[] { "cat" };
        }

        protected override void DecorateLeftAxis(ReportConfig config)
        {
            ChartAxis la = new ChartAxis();
            la.Type = AxisTypes.Numeric;
            la.Position = AxisPositionType.Left;
            la.Minimum = 0;
            la.Fields = new[] { "Minimum", "Maximum", "Actual Usage" };

            JavaScriptFunftionLeftAxesRenderer renderer = new JavaScriptFunftionLeftAxesRenderer();
            la.RendererFunction = renderer; 
          
            Chart.Axes.Add(la);

        }

        protected override void DecorateTopAxis(ReportConfig config)
        {
            ChartAxis ta = new ChartAxis();
            ta.Type = AxisTypes.Time;
            ta.Hidden = true;
            string date = Parent.ContinuousCommissioningOptions["date"].ToString();
            DateTime start = DateTime.Parse(date + " 12:00:00 AM");
            DateTime end = DateTime.Parse(date + " 11:00:00 PM");


            DateTime d1 = new DateTime(1970, 1, 1);
            DateTime d2 = start.ToUniversalTime();
            TimeSpan ts = new TimeSpan(d2.Ticks - d1.Ticks);


            d1 = new DateTime(1970, 1, 1);
            d2 = end.ToUniversalTime();
            ts = new TimeSpan(d2.Ticks - d1.Ticks);

            ta.Position = AxisPositionType.Top;
            ta.Fields = new[] { "actualhour" };
            
            Chart.Axes.Add(ta);

        }

        protected override void DecorateRightAxis(ReportConfig config)
        {
            ChartAxis ra = new ChartAxis();
            ra.Maximum = 120;
            ra.Minimum = 0;
            ra.Type = AxisTypes.Numeric;
            ra.Position = AxisPositionType.Right;
            ra.Fields = new[] { "Actual Temperature" };

            JavaScriptFunftionRightAxesRenderer renderer = new JavaScriptFunftionRightAxesRenderer();
            ra.RendererFunction = renderer; 

            Chart.Axes.Add(ra);

        }

        protected override void DecorateLeftSeries(ReportConfig config)
        {
            JavaScriptFunftionContinuousCommissioningLeftAxisUsageSeriesToolTipRenderer leftAxisUsageSeriesRender = new JavaScriptFunftionContinuousCommissioningLeftAxisUsageSeriesToolTipRenderer();

            JavaScriptFunftionContinuousCommissioningMinMaxSeriesToolTipRenderer renderer = new JavaScriptFunftionContinuousCommissioningMinMaxSeriesToolTipRenderer();


            ChartSeries actualUsagelineSeries = new ChartSeries();
            actualUsagelineSeries.Type = SeriesTypes.Line;
            actualUsagelineSeries.Colors = new[] { "#A52A2A" };
            actualUsagelineSeries.Fill = true;
            actualUsagelineSeries.XField = new[] { "actualhour" };
            actualUsagelineSeries.YField = new[] { "Actual Usage" };
            actualUsagelineSeries.Title = new[] { "Actual Usage" };
            actualUsagelineSeries.XAxis = 2;
            actualUsagelineSeries.YAxis = 1;
            actualUsagelineSeries.Style = new LineSeriesStyleJobject().Generate();
            actualUsagelineSeries.Marker = new LineSeriesMarkerJobject().Generate();
            actualUsagelineSeries.HighlightCfg = new LineSeriesHighlightCfgJobject().Generate();
            actualUsagelineSeries.Tooltip.RendererFunction = leftAxisUsageSeriesRender;
            Chart.Series.Add(actualUsagelineSeries);
            
            
            
            ChartSeries corridorAreaSeries = new ChartSeries();
            corridorAreaSeries.Type = SeriesTypes.Line;
            corridorAreaSeries.XField = new[] { "cat" };
            corridorAreaSeries.YField = new[] { "Minimum" };
            corridorAreaSeries.Title = new[] { "Minimum" };
            corridorAreaSeries.Colors = new[] { "#94A56B" };
            corridorAreaSeries.Fill = true;
            corridorAreaSeries.XAxis = 0;
            corridorAreaSeries.YAxis = 1;
            corridorAreaSeries.Stacked = true;
            corridorAreaSeries.Style = new AreaSeriesStyleContinuousCommissioningJobject().Generate();
            corridorAreaSeries.Marker = new LineSeriesMarkerJobject().Generate();
            corridorAreaSeries.HighlightCfg = new LineSeriesHighlightCfgJobject().Generate();
            corridorAreaSeries.Tooltip.RendererFunction = renderer;
            Chart.Series.Add(corridorAreaSeries);

            ChartSeries corridorAreaSeriesM = new ChartSeries();
            corridorAreaSeriesM.Type = SeriesTypes.Line;
            corridorAreaSeriesM.XField = new[] { "cat" };
            corridorAreaSeriesM.YField = new[] { "Maximum" };
            corridorAreaSeriesM.Title = new[] { "Maximum" };
            corridorAreaSeriesM.Colors = new[] { "#3D8737" };
            corridorAreaSeriesM.Fill = true;
            corridorAreaSeriesM.XAxis = 0;
            corridorAreaSeriesM.YAxis = 1;
            corridorAreaSeriesM.Stacked = true;
            corridorAreaSeriesM.Style = new AreaSeriesStyleContinuousCommissioningJobject().Generate();
            corridorAreaSeriesM.Marker = new LineSeriesMarkerJobject().Generate();
            corridorAreaSeriesM.HighlightCfg = new LineSeriesHighlightCfgJobject().Generate();
            corridorAreaSeriesM.Tooltip.RendererFunction = renderer;
            Chart.Series.Add(corridorAreaSeriesM);

           
          

   
            JavaScriptFunftionContinuousCommissioningRightAxisSeriesToolTipRenderer righAxisSeriesRender = new JavaScriptFunftionContinuousCommissioningRightAxisSeriesToolTipRenderer();

            ChartSeries actualTemperaturelineSeries = new ChartSeries();
            actualTemperaturelineSeries.Type = SeriesTypes.Line;
            actualTemperaturelineSeries.Colors = new[] { "#FFFF00" };
            actualTemperaturelineSeries.Fill = false;
            actualTemperaturelineSeries.XField = new[] { "actualhour" };
            actualTemperaturelineSeries.YField = new[] { "Actual Temperature" };
            actualTemperaturelineSeries.Title = new[] { "Temperature" };
            actualTemperaturelineSeries.XAxis = 2;
            actualTemperaturelineSeries.YAxis = 3;
            actualTemperaturelineSeries.Style = new LineSeriesStyleJobject().Generate();
            actualTemperaturelineSeries.Marker = new LineSeriesMarkerJobject().Generate();
            actualTemperaturelineSeries.HighlightCfg = new LineSeriesHighlightCfgJobject().Generate();
            actualTemperaturelineSeries.Tooltip.RendererFunction = righAxisSeriesRender;

            Chart.Series.Add(actualTemperaturelineSeries);

        }

        protected override void DecorateLeftSeriesGradients(ReportConfig config)
        {

        }

        protected override void DecorateLeftSeriesToolTip(ReportConfig config)
        {

        }

    }
}