using System.Linq;
using Newtonsoft.Json.Linq;
using WebApiBia.Dashboard.Core.Dto.Parent;
using WebApiBia.Dashboard.Core.Dto.Report;
using WebApiBia.Dashboard.UiControls.Chart;
using WebApiBia.Dashboard.UiControls.Chart.Series;
using WebApiBia.Dashboard.UiControls.Chart.Series.HighlightCfg;
using WebApiBia.Dashboard.UiControls.Chart.Series.Marker;
using WebApiBia.Dashboard.UiControls.Chart.Series.Renderers;
using WebApiBia.Dashboard.UiControls.Chart.Series.Style;
using WebApiBia.Dashboard.UiControls.Chart.Series.ToolTip.Renderers;
using WebApiBia.Dashboard.UiControls.Functions;
using JavaScriptFunftionRightAxesRenderer = WebApiBia.Dashboard.UiControls.Chart.Axes.Renderers.JavaScriptFunftionRightAxesRenderer;

namespace WebApiBia.Dashboard.Core.DecoratorProcessor.Chart
{
    public class PieChartDecoratorDesktop:Decorator
    {
        public PieChartDecoratorDesktop(IParent parent)
            : base(parent)
        {

        }

        protected override void DecorateChart(ReportConfig config)
        {
            base.DecorateChart(config);

            Parent.Chart.BiaChartType  = ChartTypes.BiPieChart;

            Parent.Chart.InsetPadding = 50;
            Parent.Chart.InnerPadding = 20;
            Parent.Chart.Animation = true;

        }

        protected override void DecorateLeftSeries(ReportConfig config)
        {
        
        }

        protected override void DecorateLeftSeriesGradients(ReportConfig config)
        {

        }

        protected override void DecorateLeftSeriesStyle(ReportConfig config)
        {
            
        }
        protected override void DecorateLeftSeriesToolTip(ReportConfig config)
        {

        }

        protected override void DecorateLeftSeriesMarker(ReportConfig config)
        {
            
        }

        protected override void DecorateLeftSeriesHighlightConfig(ReportConfig config)
        {
           
        }

        protected override void DecorateLegend(ReportConfig config)
        {
            Chart.Legend = null;
        }

        protected override void DecoaretInteractions(ReportConfig config)
        {
            Chart.Interactions = new JArray("rotate","itemhighlight");
        }
        protected override void DecoratePieSeries(ReportConfig config)
        {
            ChartSeries series = new ChartSeries();
            series.Type = SeriesTypes.Pie;
            series.Rotation = 45;
            series.Highlight = true;
            series.Colors = new[] { "#" + config.Gradients[0].Color, "#" + config.Gradients[1].Color, "#" + config.Gradients[2].Color, "#" + config.Gradients[3].Color };
            series.AngleField = "data";


            JObject label = new JObject();
            label["field"] = "cat";
            label["font"] = "20px Arial";
            label["display"] = "outside";
            label["color"] = "#FFFFFF";


            JObject callOutLine = new JObject();
            label["length"] = 60;
            label["width"] = 6;

            label["calloutLine"] = callOutLine;


            JavaScriptFunftionSeriesLabelForPieRenderer renderer = new JavaScriptFunftionSeriesLabelForPieRenderer();

            JObject rendererFunction = new JObject();
            rendererFunction["fname"] = renderer.Fname;

            JArray parameters = JArray.FromObject(renderer.Parameters);
            rendererFunction["parameters"] = parameters;
            rendererFunction["body"] = renderer.Body;
            label["rendererFunction"] = rendererFunction;

            series.Label = label;


            Chart.Series.Add(series);
        }

        protected override void DecoratePieSeriesToolTip(ReportConfig config)
        {
            JavaScriptFunftionPieSeriesToolTipRenderer renderer = new JavaScriptFunftionPieSeriesToolTipRenderer();
            Chart.Series[0].Tooltip.RendererFunction = renderer;   
        }


    }
}