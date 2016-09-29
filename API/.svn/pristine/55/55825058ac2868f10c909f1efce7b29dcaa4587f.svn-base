using System.Collections.Generic;
using System.Linq;
using System.Text;
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
using WebApiBia.Dashboard.UiControls.Chart.Series.Style;
using WebApiBia.Dashboard.UiControls.Chart.Series.ToolTip.Renderers;
using WebApiBia.Dashboard.UiControls.Functions;

namespace WebApiBia.Dashboard.Core.DecoratorProcessor.Chart
{
    public class BarChartDemandDetailDecoratorDesktop:BarChartDecoratorDesktop
    {
        public BarChartDemandDetailDecoratorDesktop(IParent parent)
            : base(parent)
        {

        }


        protected override void DecorateLeftAxis(ReportConfig config)
        {
            base.DecorateLeftAxis(config);
            Chart.Axes[1].Fields = new[] { "Min Demand", "Avg Demand", "Max Demand" };
            
        }

        protected override void DecorateLeftSeries(ReportConfig config)
        {
            base.DecorateLeftSeries(config);

            ChartSeries ser = Chart.Series.FirstOrDefault();
            ser.YField = new string[] { "Min Demand", "Avg Demand", "Max Demand" };
            ser.Title = new string[] { "Min Demand", "Avg Demand", "Max Demand" };

            Chart.Series.FirstOrDefault().Stacked = false;


        }

        protected override void DecorateLeftSeriesToolTip(ReportConfig config)
        {
            JavaScriptFunftionPowerDemandToolTipRenderer renderer = new JavaScriptFunftionPowerDemandToolTipRenderer();
            ChartSeries ser = Chart.Series.FirstOrDefault();
            ser.Tooltip.RendererFunction = renderer;
        }
        protected override void DecorateLeftSeriesGradients(ReportConfig config)
        {

            Dictionary<string, SeriesGradient> gradients = new Dictionary<string, SeriesGradient>();
            List<string> colors = new List<string>();
            GradientUtil gradientUtil = new GradientUtil();

            var gradientConfig = config.Gradients[0];
            var minDemandTriplet = gradientUtil.GetDarkerColorTripplet("#" + gradientConfig.Color);
            var minDemandGradient = new SeriesGradient
            {
                Radius = gradientConfig.Radius,
                Opacity = gradientConfig.Opacity,
                FillStyle = new SeriesGradientFill
                {
                    Type = gradientConfig.Gradient,
                    Stops = new List<SeriesGradientStop>
                        {
                            new SeriesGradientStop
                            {
                                Color = minDemandTriplet.Color1,
                                Offset = 0
                            },
                            new SeriesGradientStop
                            {
                                Color = minDemandTriplet.Color2,
                                Offset = 0.5
                            },
                            new SeriesGradientStop
                            {
                                Color = minDemandTriplet.Color3,
                                Offset = 1
                            }
                        }
                }

            };

            gradients.Add("Min Demand", minDemandGradient);
            colors.Add(minDemandTriplet.Color2);

            gradientConfig = config.Gradients[1];
            var averageDemandTriplet = gradientUtil.GetDarkerColorTripplet("#" + gradientConfig.Color);


            var averageDemandGradient = new SeriesGradient
            {
                Radius = gradientConfig.Radius,
                Opacity = gradientConfig.Opacity,
                FillStyle = new SeriesGradientFill
                {
                    Type = gradientConfig.Gradient,
                    Stops = new List<SeriesGradientStop>
                        {
                            new SeriesGradientStop
                            {
                                Color = averageDemandTriplet.Color1,
                                Offset = 0
                            },
                            new SeriesGradientStop
                            {
                                Color = averageDemandTriplet.Color2,
                                Offset = 0.5
                            },
                            new SeriesGradientStop
                            {
                                Color = averageDemandTriplet.Color3,
                                Offset = 1
                            }
                        }
                }

            };

            gradients.Add("Avg Demand", averageDemandGradient);
            colors.Add(averageDemandTriplet.Color2);

            gradientConfig = config.Gradients[2];
            var maxDemandTriplet = gradientUtil.GetDarkerColorTripplet("#" + gradientConfig.Color);
            var maxDemandGradient = new SeriesGradient
            {
                Radius = gradientConfig.Radius,
                Opacity = gradientConfig.Opacity,
                FillStyle = new SeriesGradientFill
                {
                    Type = gradientConfig.Gradient,
                    Stops = new List<SeriesGradientStop>
                        {
                            new SeriesGradientStop
                            {
                                Color = maxDemandTriplet.Color1,
                                Offset = 0
                            },
                            new SeriesGradientStop
                            {
                                Color = maxDemandTriplet.Color2,
                                Offset = 0.5
                            },
                            new SeriesGradientStop
                            {
                                Color = maxDemandTriplet.Color3,
                                Offset = 1
                            }
                        }
                }

            };

            gradients.Add("Max Demand", maxDemandGradient);
            colors.Add(maxDemandTriplet.Color2);



            Chart.Gradients = gradients;
            Chart.Series[0].Colors = colors.ToArray();

        }

        protected override void DecorateRightAxis(ReportConfig config)
        {
            ChartAxis ra = new ChartAxis();
            ra.Fields = new[] { "Avg Temperature" };
            ra.Position = AxisPositionType.Right;
            ra.Type = AxisTypes.Numeric;
            JavaScriptFunftionDemandDetailRightAxesRenderer renderer = new JavaScriptFunftionDemandDetailRightAxesRenderer();
            ra.RendererFunction = renderer; 
            Chart.Axes.Add(ra);
        }

        protected override void DecorateRightSeries(ReportConfig config)
        {
            ChartSeries series = new ChartSeries();
            series.Type = SeriesTypes.Line;
            var gradientConfig = config.Gradients[3];
            GradientUtil gradientUtil = new GradientUtil();
            var avgTempTripplet = gradientUtil.GetDarkerColorTripplet("#" + gradientConfig.Color);
            series.Colors = new[] { avgTempTripplet.Color2 };
            series.YField = new[] { "Avg Temperature" };
            series.Title = new[] { "Avg Temperature" };
            series.Axes = AxisPositionType.Right;
            Chart.Series.Add(series);

        }
        protected override void DecorateRightSeriesStyle(ReportConfig config)
        {
            Chart.Series[1].Style = new LineSeriesPowerDemandDetailStyleJobject().Generate();
        }

        protected override void DecorateRightSeriesMarker(ReportConfig config)
        {
            Chart.Series[1].Marker = new LineSeriesPowerDemandDetailMarkerJobject().Generate();
        }

        protected override void DecorateRightSeriesHighlighConfig(ReportConfig config)
        {
            Chart.Series[1].HighlightCfg = new LineSeriesHighlightCfgJobject().Generate();

        }

        protected override void DecorateRightSeriesToolTip(ReportConfig config)
        {
            JavaScriptFunftionLineSeriesDemandDetailToolTipRenderer renderer = new JavaScriptFunftionLineSeriesDemandDetailToolTipRenderer();
            Chart.Series[1].Tooltip.RendererFunction = renderer;
        }

        protected override void DecorateLegend(ReportConfig config)
        {
            Legend legend = new Legend();

            legend.Docked = "top";
            
            Chart.Legend = legend;
        }

        protected override void DecoaretGridView(ReportConfig config)
        {
            Parent.Chart.Options.ShowGridView = false;
        }

  
    }
}