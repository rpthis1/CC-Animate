using System.Linq;
using WebApiBia.Dashboard.Core.Dto.Parent;
using WebApiBia.Dashboard.Core.Dto.Report;
using WebApiBia.Dashboard.UiControls.Chart.Series;
using WebApiBia.Dashboard.UiControls.Chart.Series.HighlightCfg;
using WebApiBia.Dashboard.UiControls.Chart.Series.Marker;
using WebApiBia.Dashboard.UiControls.Chart.Series.Style;
using WebApiBia.Dashboard.UiControls.Functions;

namespace WebApiBia.Dashboard.Core.DecoratorProcessor.Chart
{
    public class AreaChartDecoratorDesktop:Decorator
    {
        public AreaChartDecoratorDesktop(IParent parent)
            : base(parent)
        {

        }

        protected override void DecorateLeftSeries(ReportConfig config)
        {
            base.DecorateLeftSeries(config);

            Chart.Series.FirstOrDefault().Type = SeriesTypes.Area;
         //   Chart.Series.FirstOrDefault().Colors = new[] { "#00d5ff" };
            Chart.Series.FirstOrDefault().Colors = new[] { "#66CCFF" };
           

        }

        protected override void DecorateLeftSeriesGradients(ReportConfig config)
        {
        }

        protected override void DecorateLeftSeriesStyle(ReportConfig config)
        {
            Chart.Series.FirstOrDefault().Style = new AreaSeriesStyleJobject().Generate();
        }

        protected override void DecorateLeftSeriesMarker(ReportConfig config)
        {
            Chart.Series.FirstOrDefault().Marker = new AreaSeriesMarkerJobject().Generate();
        }

        protected override void DecorateLeftSeriesHighlightConfig(ReportConfig config)
        {
            Chart.Series.FirstOrDefault().HighlightCfg = new AreaSeriesHighlightCfgJobject().Generate();
 
        }

    }
}