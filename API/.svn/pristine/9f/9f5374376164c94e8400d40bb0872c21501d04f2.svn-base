using System;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json.Linq;
using WebApiBia.Dashboard.Core.Dto.Parent;
using WebApiBia.Dashboard.Core.Dto.Report;
using WebApiBia.Dashboard.UiControls.Chart;
using WebApiBia.Dashboard.UiControls.Chart.Axes;
using WebApiBia.Dashboard.UiControls.Chart.Axes.Renderers;
using WebApiBia.Dashboard.UiControls.Chart.Series;
using WebApiBia.Dashboard.UiControls.Chart.Series.Gradients;
using WebApiBia.Dashboard.UiControls.Chart.Series.Gradients.Util;
using WebApiBia.Dashboard.UiControls.Chart.Series.HighlightCfg;
using WebApiBia.Dashboard.UiControls.Chart.Series.Marker;
using WebApiBia.Dashboard.UiControls.Chart.Series.Renderers;
using WebApiBia.Dashboard.UiControls.Chart.Series.Style;
using WebApiBia.Dashboard.UiControls.Chart.Series.ToolTip.Renderers;
using WebApiBia.Dashboard.UiControls.Functions;
using JavaScriptFunftionRightAxesRenderer = WebApiBia.Dashboard.UiControls.Functions.JavaScriptFunftionRightAxesRenderer;

namespace WebApiBia.Dashboard.Core.DecoratorProcessor.Chart
{
    public class MvDecoratorDesktop:Decorator
    {
        public MvDecoratorDesktop(IParent parent)
            : base(parent)
        {

        }

        protected override void DecorateChart(ReportConfig config)
        {
            base.DecorateChart(config);

            Chart.Options.LeftAxisLeftSeriesLabel = config.LeftAxisLeftSeriesLabel;
            Chart.Options.LeftAxisRightSeriesLabel = config.LeftAxisRightSeriesLabel;
            Chart.Options.RightAxisSeriesLabel = config.RightAxisSeriesLabel;
            Chart.Options.LeftAxisLeftSeriesColor = config.LeftAxisLeftSeriesColor;
            Chart.Options.LeftAxisRightSeriesColor = config.LeftAxisRightSeriesColor;

            Parent.Mv = new JObject();
            Parent.Mv["mvOptionC"] = config.MvCOptions;
            Parent.Fields.Add("metered");
        }
        
        protected override void DecorateCategoryAxis(ReportConfig config)
        {
            base.DecorateCategoryAxis(config);
            ChartAxis ca = Chart.Axes.FirstOrDefault();
            ca.Fields = new[] { "cat" };

            JavaScriptFunftionMvCategoryAxesRenderer renderer = new JavaScriptFunftionMvCategoryAxesRenderer();
            ca.RendererFunction = renderer;
        }
  

        protected override void DecorateLeftAxis(ReportConfig config)
        {
            ChartAxis la = new ChartAxis();
            la.Type = AxisTypes.Numeric;
            la.Position = AxisPositionType.Left;
            la.Fields = new[] { "left", "right" };

            JavaScriptFunftionLeftAxesRenderer renderer = new JavaScriptFunftionLeftAxesRenderer();
            la.RendererFunction = renderer;

            Chart.Axes.Add(la);
           
        }


        protected override void DecorateTopAxis(ReportConfig config)
        {
            ChartAxis ta = new ChartAxis();
            ta.Type = AxisTypes.Time;
            ta.Hidden = true;

            DateTime start = DateTime.Parse("1/1/2012 12:00:00 AM");
            DateTime end = DateTime.Parse("12/31/2012 11:59:00 PM");


            DateTime d1 = new DateTime(1970, 1, 1);
            DateTime d2 = start.ToUniversalTime();
            TimeSpan ts = new TimeSpan(d2.Ticks - d1.Ticks);

            ta.FromDate = ts.TotalMilliseconds;


            d1 = new DateTime(1970, 1, 1);
            d2 = end.ToUniversalTime();
            ts = new TimeSpan(d2.Ticks - d1.Ticks);

            ta.toDate = ts.TotalMilliseconds;


            ta.Position = AxisPositionType.Top;
            ta.Fields = new[] { "date" };

            Chart.Axes.Add(ta);

        }

        protected override void DecorateRightAxis(ReportConfig config)
        {
            ChartAxis ra = new ChartAxis();
            ra.Type = AxisTypes.Numeric;
            ra.Position = AxisPositionType.Right;
            ra.Fields = new[] { "variable" };

            JavaScriptFunftionRightAxesRenderer renderer = new JavaScriptFunftionRightAxesRenderer();
            ra.RendererFunction = renderer;

            Chart.Axes.Add(ra);

        }

        protected override void DecorateLeftSeries(ReportConfig config)
        {
            ChartSeries barSeries = new ChartSeries();
            barSeries.Type = SeriesTypes.Bar;
            barSeries.XField = new[]  { "cat" };
            barSeries.YField = new[]  { "left", "right" };
            barSeries.Title =  new[]  { config.LeftAxisLeftSeriesLabel, config.LeftAxisRightSeriesLabel};
            barSeries.Colors = new[] { config.LeftAxisLeftSeriesColor, config.LeftAxisRightSeriesColor };
            barSeries.XAxis = 0;
            barSeries.YAxis = 1;
            barSeries.Stacked = false; 

            JavaScriptFunftionBarSeriesRenderer renderer = new JavaScriptFunftionBarSeriesRenderer();
            barSeries.RendererFunction = renderer; 
            Chart.Series.Add(barSeries);

            JavaScriptFunftionMvLineSeriesToolTipRenderer righAxisSeriesRender = new JavaScriptFunftionMvLineSeriesToolTipRenderer();

            ChartSeries variableSeries = new ChartSeries();
            variableSeries.Type = SeriesTypes.Line;
            variableSeries.Colors = new[] { "#FFFF00" };
            
            variableSeries.Fill = false;
            variableSeries.XField = new[] { "date" };
            variableSeries.YField = new[] { "variable" };
            variableSeries.Title = new[] { config.RightAxisSeriesLabel };
            variableSeries.XAxis = 2;
            variableSeries.YAxis = 3;
            variableSeries.Style = new LineSeriesMvStyleJobject().Generate();
            variableSeries.Marker = new LineSeriesMvCMarkerJobject().Generate();
            variableSeries.HighlightCfg = new LineSeriesHighlightCfgJobject().Generate();
            variableSeries.Tooltip.RendererFunction = righAxisSeriesRender;

            Chart.Series.Add(variableSeries);

        }

        protected override void DecorateLeftSeriesToolTip(ReportConfig config)
        {
            JavaScriptFunftionMvBarSeriesToolTipRenderer renderer = new JavaScriptFunftionMvBarSeriesToolTipRenderer();
            Chart.Series[0].Tooltip.RendererFunction = renderer;
        }


        protected override void DecorateLeftSeriesGradients(ReportConfig config)
        {

            Dictionary<string, SeriesGradient> gradients = new Dictionary<string, SeriesGradient>();
            GradientUtil gradientUtil = new GradientUtil();

            gradients.Add("left", gradientUtil.GetGradientByColor(config.LeftAxisLeftSeriesColor));
            gradients.Add("right", gradientUtil.GetGradientByColor(config.LeftAxisRightSeriesColor));
           
            Chart.Gradients = gradients;

        }

        protected override void DecorateRightSeries(ReportConfig config)
        {

        }
        protected override void DecorateLegend(ReportConfig config)
        {
            Legend legend = new Legend
            {
                Docked = "top"
            };


            Chart.Legend = legend;

        }
        protected override void DecorateRightSeriesStyle(ReportConfig config)
        {
           
        }
        protected override void DecorateRightSeriesMarker(ReportConfig config)
        {
        }

        protected override void DecorateRightSeriesHighlighConfig(ReportConfig config)
        {

        }
        protected override void DecorateRightSeriesToolTip(ReportConfig config)
        {
 
        }

    }
}