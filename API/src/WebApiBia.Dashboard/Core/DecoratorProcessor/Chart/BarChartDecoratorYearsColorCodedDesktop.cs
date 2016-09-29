using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Runtime.InteropServices;
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

namespace WebApiBia.Dashboard.Core.DecoratorProcessor.Chart
{
    public class BarChartDecoratorYearsColorCodedDesktop : BarChartDecoratorDesktop
    {
        public BarChartDecoratorYearsColorCodedDesktop(IParent parent)
            : base(parent)
        {

        }

        protected override void DecorateLeftSeries(ReportConfig config)
        {
            base.DecorateLeftSeries(config);

            JavaScriptFunftionBarSeriesYearsColorCodedRenderer renderer = new JavaScriptFunftionBarSeriesYearsColorCodedRenderer();
            Chart.Series.FirstOrDefault().RendererFunction = renderer;
 
        }


        protected override void DecorateLeftSeriesGradients(ReportConfig config)
        {
            Dictionary<String,String> years = new Dictionary<string, string>();
            FindYears(years);

            Dictionary<string, SeriesGradient> gradients = new Dictionary<string, SeriesGradient>();
            int counter = 0;
            List<string> colors = new List<string>();
            GradientUtil gradientUtil = new GradientUtil();



            foreach (var item in years)
            {
                //var triplet = gradientUtil[counter];
                 var gradientConfig = config.Gradients[counter];
                 var triplet = gradientUtil.GetDarkerColorTripplet("#"+gradientConfig.Color);
                colors.Add(triplet.Color1);
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

                gradients.Add(item.Key, gradient);

                counter++;
            }

            Chart.Gradients = gradients;
            Chart.Series[0].Colors = colors.ToArray();

        }

        private void FindYears( Dictionary<String,String> years)
        {
            foreach (ExpandoObject value in Parent.Values)
            {
                var dic = (IDictionary<string, object>) value;
                string cat = (String) dic["cat"];
                DateTime date = DateTime.Parse(cat);
                string year = date.Year.ToString();

                if (!years.ContainsKey(year))
                {
                    years.Add(year, year);
                }
        }
        }

  
    }
}