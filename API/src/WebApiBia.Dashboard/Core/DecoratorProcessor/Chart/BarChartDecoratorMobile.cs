using System.Linq;
using WebApiBia.Dashboard.Core.Dto.Parent;
using WebApiBia.Dashboard.Core.Dto.Report;
using WebApiBia.Dashboard.UiControls.Chart;
using WebApiBia.Dashboard.UiControls.Chart.Axes;
using WebApiBia.Dashboard.UiControls.Chart.Axes.Renderers;
using WebApiBia.Dashboard.UiControls.Chart.Series;
using WebApiBia.Dashboard.UiControls.Chart.Series.HighlightCfg;
using WebApiBia.Dashboard.UiControls.Chart.Series.Marker;
using WebApiBia.Dashboard.UiControls.Chart.Series.Style;
using WebApiBia.Dashboard.UiControls.Chart.Series.ToolTip.Renderers;

namespace WebApiBia.Dashboard.Core.DecoratorProcessor.Chart
{
    public class BarChartDecoratorMobile : Decorator
    {
        public BarChartDecoratorMobile(IParent parent)
            : base(parent)
        {

        }

        protected override void DecorateChart(ReportConfig config)
        {
            base.DecorateChart(config);
            Chart.Background = null;

        }

        protected override void DecorateLeftSeriesStyle(ReportConfig config)
        {
            Chart.Series.FirstOrDefault().Style = new BarSeriesStyleJobject().Generate();
        }

        protected override void DecorateLeftSeriesToolTip(ReportConfig config)
        {
            Chart.Series[0].Tooltip = null;
        }

        protected override void DecorateLeftAxis(ReportConfig config)
        {
            base.DecorateLeftAxis(config);
            ChartAxis axis = Chart.Axes[1];
            if (config.SecondaySeriesFields != null && config.SecondaySeriesFields[0] != null)
            {
                axis.Fields =
                    Parent.AllFields.Where(kvp => kvp.Key != "cat" && kvp.Key != config.SecondaySeriesFields[0])
                        .Select(kpv => kpv.Key)
                        .ToArray();
            }
            axis.RendererFunction = null;
        }

        protected override void DecorateLeftSeries(ReportConfig config)
        {
            base.DecorateLeftSeries(config);

            ChartSeries ser = Chart.Series[0];
            ser.Type = SeriesTypes.Bar;
            ser.RendererFunction = null;

            if (config.ChartType == "stacked")
            {
                ser.Stacked = true;
            }
            else if (config.ChartType == "clustered")
            {
                ser.Stacked = false;
            }
            if (config.SecondaySeriesFields != null && config.SecondaySeriesFields[0] != null)
            {
                ser.YField = Parent.AllFields.Where(kvp => kvp.Key != "cat" && kvp.Key != config.SecondaySeriesFields[0]).Select(kpv => kpv.Key).ToArray();

                if (config.SecondarySeriesHidden == true)
                {
                    ser.Title = Parent.AllFields.Where(kvp => kvp.Key != "cat" && kvp.Key != config.SecondaySeriesFields[0]).Select(kpv => kpv.Key).ToArray();
                }

            }

            
        }
        protected override void DecorateRightAxis(ReportConfig config)
        {
            base.DecorateRightAxis(config);

            if (config.SecondaySeriesFields != null && config.SecondaySeriesFields[0] != null)
            {
                ChartAxis ra = new ChartAxis();
                ra.Fields = config.SecondaySeriesFields;
                ra.Position = AxisPositionType.Right;
                ra.Type = AxisTypes.Numeric;


                if (config.SecondarySeriesHidden == true)
                {
                    ra.Fields = null;
                }
                ra.Hidden = config.SecondarySeriesHidden;
                Chart.Axes.Add(ra);


                
            }
        }
        protected override void DecorateRightSeries(ReportConfig config)
        {
            base.DecorateRightSeries(config);
            if (config.SecondaySeriesFields != null && config.SecondaySeriesFields[0] != null)
            {

                ChartSeries series = new ChartSeries();
                series.Hidden = config.SecondarySeriesHidden;
                series.Type = SeriesTypes.Line;
                series.YField = config.SecondaySeriesFields;
                series.Title = config.SecondaySeriesTitle;
                series.Colors = new[] {"#"+config.SecondarySeriesColor};
                series.Axes = AxisPositionType.Right;
               

                if (config.SecondarySeriesHidden == true)
                {
                    series.Title = null;
                    series.Colors = null;
                    series.YField = null;
                    series.ShowInLegend = false;
                }

                Chart.Series.Add(series);
            }
        }
  
        protected override void DecorateRightSeriesStyle(ReportConfig config)
        {
            Chart.Series[1].Style = new LineSeriesStyleJobject().Generate();
        }
        protected override void DecorateRightSeriesMarker(ReportConfig config)
        {
            Chart.Series[1].Marker = new LineSeriesMarkerJobject().Generate();
        }

        protected override void DecorateRightSeriesHighlighConfig(ReportConfig config)
        {
            Chart.Series[1].HighlightCfg = new LineSeriesHighlightCfgJobject().Generate();

        }
        protected override void DecorateRightSeriesToolTip(ReportConfig config)
        {
            Chart.Series[1].Tooltip = null;
        }
        protected override void DecorateLegend(ReportConfig config)
        {
            Chart.Legend = null;
        }

   

    }
}