using System.Linq;
using System.Runtime.InteropServices;
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
    public class BarChartDecoratorDesktop:Decorator
    {
        public BarChartDecoratorDesktop(IParent parent)
            : base(parent)
        {
            
        }
  
        protected override void DecorateLeftSeriesStyle(ReportConfig config)
        {
            Chart.Series.FirstOrDefault().Style = new BarSeriesStyleJobject().Generate();
        }

        protected override void DecorateLeftAxis(ReportConfig config)
        {
            base.DecorateLeftAxis(config);

            if (config.SecondaySeriesFields != null && config.SecondaySeriesFields[0] != null)
            {
                ChartAxis axis = Chart.Axes[1];
              
                axis.Fields =
                Parent.AllFields.Where(kvp => kvp.Key != "cat" && kvp.Key != config.SecondaySeriesFields[0])
                        .Select(kpv => kpv.Key).OrderByDescending(x => x).ToArray();
                      

                
            }
        }

        protected override void DecorateLeftSeries(ReportConfig config)
        {
            base.DecorateLeftSeries(config);

            ChartSeries ser = Chart.Series[0];
            ser.Type = SeriesTypes.Bar;
           


            if (config.ChartType != null)
            {
                if (config.ChartType.ToUpper() == "STACKED")
                {
                    ser.Stacked = true;
                }
                else if (config.ChartType.ToUpper() == "CLUSTERED")
                {
                    ser.Stacked = false;
                }
            }

          
            if (config.SecondaySeriesFields != null && config.SecondaySeriesFields[0] != null)
            {
                ser.YField = Parent.AllFields.Where(kvp => kvp.Key != "cat" && kvp.Key != config.SecondaySeriesFields[0]).Select(kpv => kpv.Key).OrderByDescending(x => x).ToArray();

                if (config.SecondarySeriesHidden == true)
                {
                    ser.Title = Parent.AllFields.Where(kvp => kvp.Key != "cat" && kvp.Key != config.SecondaySeriesFields[0]).Select(kpv => kpv.Key).OrderByDescending(x => x).ToArray();
                }

            }

            ShowBarChartClusterAndStackedToggle();

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


                JavaScriptFunftionRightAxesRenderer renderer = new JavaScriptFunftionRightAxesRenderer();
                ra.RendererFunction = renderer;

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
        protected override void DecorateLegend(ReportConfig config)
        {
            Legend legend = new Legend();

            if (Parent.Fields.Count > 3)
            {
                legend.Docked = "left";
            }
            else
            {
                legend.Docked = "top";
            }

            Chart.Legend = legend;
        }
        protected override void DecorateRightSeriesStyle(ReportConfig config)
        {
            if (HasRightSeries())
            {
                Chart.Series[1].Style = new LineSeriesStyleJobject().Generate();
            }
           
        }
        protected override void DecorateRightSeriesMarker(ReportConfig config)
        {
            if (HasRightSeries())
            {
                Chart.Series[1].Marker = new LineSeriesMarkerJobject().Generate();
            }
           
        }

        protected override void DecorateRightSeriesHighlighConfig(ReportConfig config)
        {
            if (HasRightSeries())
            {
                Chart.Series[1].HighlightCfg = new LineSeriesHighlightCfgJobject().Generate();
            }
           

        }
        protected override void DecorateRightSeriesToolTip(ReportConfig config)
        {
            if (HasRightSeries())
            {
                JavaScriptFunftionRightSeriesToolTipRenderer renderer = new JavaScriptFunftionRightSeriesToolTipRenderer();
                Chart.Series[1].Tooltip.RendererFunction = renderer;   
            }
          
        }

        protected override void DecoaretGridView(ReportConfig config)
        {
            Parent.Chart.Options.ShowGridView = true;
        }

        protected virtual void ShowBarChartClusterAndStackedToggle()
        {
        
            if (Parent.Fields.Count > 2)
            {
                Chart.Options.ShowBarChartClusteredAndStackedToggle = true;
            }

        }

        private bool HasRightSeries()
        {
            if ( Chart.Series != null &&  Chart.Series.Count > 1)
            {
                return true;
            }
            return false;
        }

    }
}