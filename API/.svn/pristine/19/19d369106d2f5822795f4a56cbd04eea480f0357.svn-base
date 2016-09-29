using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
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
    public class BarChartDecoratorYearlyDeltaDesktop : BarChartDecoratorDesktop
    {
        public BarChartDecoratorYearlyDeltaDesktop(IParent parent)
            : base(parent)
        {

        }

        protected override void DecorateLeftAxis(ReportConfig config)
        {
            base.DecorateLeftAxis(config);

            JavaScriptFunftionLeftAxesYearlyDeltaRenderer renderer = new JavaScriptFunftionLeftAxesYearlyDeltaRenderer();

            Chart.Axes[1].RendererFunction = renderer;

        }

        protected override void DecorateLeftSeriesToolTip(ReportConfig config)
        {
            JavaScriptFunftionSeriesToolYearlyDeltaTipRenderer renderer = new JavaScriptFunftionSeriesToolYearlyDeltaTipRenderer();
            Chart.Series[0].Tooltip.RendererFunction = renderer;
        }


        protected override void DecorateChart(ReportConfig config)
        {
            base.DecorateChart(config);
            Chart.Options.LeftUnitsFixed = "%";

        }

        protected override void ShowBarChartClusterAndStackedToggle()
        {
             Chart.Options.ShowBarChartClusteredAndStackedToggle = false;
             Chart.Options.ShowExcelExport = false;
        }
        protected override void DecorateLeftSeriesGradients(ReportConfig config)
        {
            string[] fields = Parent.AllFields.Where(kvp => kvp.Key != "cat").Select(kvp => kvp.Key).ToArray();
            Dictionary<string, SeriesGradient> gradients = new Dictionary<string, SeriesGradient>();
            int counter = 0;
            List<string> colors = new List<string>();
            GradientUtil gradientUtil = new GradientUtil();

            foreach (string field in fields)
            {
                var gradientConfig = config.Gradients[counter];
                var triplet = gradientUtil.GetDarkerColorTripplet("#" + gradientConfig.Color);
                colors.Add(triplet.Color2);
                var gradient = new SeriesGradient
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
                                Color = triplet.Color1,
                                Offset = 0
                            },
                            new SeriesGradientStop
                            {
                                Color = triplet.Color2,
                                Offset = 0.5
                            },
                            new SeriesGradientStop
                            {
                                Color = triplet.Color3,
                                Offset = 1
                            }
                        }
                    }

                };

                gradients.Add(field, gradient);

                counter++;
            }

            Chart.Gradients = gradients;
            Chart.Series[0].Colors = colors.ToArray();
        }
    }
}