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
using WebApiBia.Dashboard.UiControls.Functions;

namespace WebApiBia.Dashboard.Core.DecoratorProcessor.Chart
{
    public class BarChartDecoratorMonthOverYearDesktop : BarChartDecoratorDesktop
    {
        public BarChartDecoratorMonthOverYearDesktop(IParent parent)
            : base(parent)
        {

        }

        protected override void DecorateLeftSeries(ReportConfig config)
        {
            base.DecorateLeftSeries(config);

            ChartSeries ser = Chart.Series[0];

           // ser.YField = ser.YField.Reverse().ToArray();

           // ser.Title = ser.Title.Reverse().ToArray();

        }

        protected override void DecorateLeftSeriesGradients(ReportConfig config)
        {
            base.DecorateLeftSeriesGradients(config);

            ChartSeries ser = Chart.Series[0];

            ser.Colors = ser.Colors.Reverse().ToArray();

        }
    }
}