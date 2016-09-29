using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WebApiBia.Common.Json;
using WebApiBia.Dashboard.Core.Dto.Parent;
using WebApiBia.Dashboard.Core.Dto.Report;
using WebApiBia.Dashboard.UiControls.Chart;
using WebApiBia.Dashboard.UiControls.Chart.Axes;
using WebApiBia.Dashboard.UiControls.Chart.Interactions;
using WebApiBia.Dashboard.UiControls.Chart.Series;
using WebApiBia.Dashboard.UiControls.Chart.Series.Gradients;
using WebApiBia.Dashboard.UiControls.Chart.Series.Gradients.Triplets;
using WebApiBia.Dashboard.UiControls.Chart.Series.Gradients.Util;
using WebApiBia.Dashboard.UiControls.Chart.Series.Renderers;
using WebApiBia.Dashboard.UiControls.Chart.Series.ToolTip.Renderers;
using WebApiBia.Dashboard.UiControls.Functions;

namespace WebApiBia.Dashboard.Core.DecoratorProcessor.Chart
{
    public abstract class Decorator:IParent
    {
        private IParent _parent;
        protected JsonHelper jsonHelper = new JsonHelper();

        public Decorator(IParent parent)
        {
            _parent = parent;
        }

         [JsonProperty(PropertyName = "parent")]
        public IParent Parent
        {
            set { _parent = value; }
            get { return _parent; }

        }

         [JsonProperty(PropertyName = "chart")]
        public GenericChart Chart
        {
            set { _parent.Chart = value; }
            get { return _parent.Chart; }

        }

         [JsonProperty(PropertyName = "values")]
        public   List<dynamic> Values 
        {
            set { _parent.Values = value; }
            get { return _parent.Values; }

        }

         [JsonProperty(PropertyName = "allFields")]
        public Dictionary<string,string> AllFields
        {
            set { _parent.AllFields = value; }
            get { return _parent.AllFields; }

        }

         [JsonProperty(PropertyName = "fields")]
        public List<string> Fields
        {
            set { _parent.Fields = value; }
            get { return _parent.Fields; }

        }

         public JObject ContinuousCommissioningOptions
         {
             set { _parent.ContinuousCommissioningOptions = value; }
             get { return _parent.ContinuousCommissioningOptions; }

         }

         public JObject Mv
         {
             set { _parent.Mv = value; }
             get { return _parent.Mv; }

         }


        public virtual void Decorate(ReportConfig config)
        {
            DecorateChart(config);
            DecorateCategoryAxis(config);

            DecorateLeftAxis(config);
            DecorateLeftSeries(config);
            DecorateLeftSeriesStyle(config);
            DecorateLeftSeriesGradients(config);
            DecorateLeftSeriesColors(config);
            DecorateLeftSeriesToolTip(config);
            DecorateLeftSeriesMarker(config);
            DecorateLeftSeriesHighlightConfig(config);

            DecorateTopAxis(config);
           
            DecorateRightAxis(config);
            DecorateRightSeries(config);
            DecorateRightSeriesStyle(config);
            DecorateRightSeriesGradients(config);
            DecorateRightSeriesColors(config);
            DecorateRightSeriesToolTip(config);
            DecorateRightSeriesMarker(config);
            DecorateRightSeriesHighlighConfig(config);

            DecoratePieSeries(config);
            DecoratePieSeriesToolTip(config);


            DecorateLegend(config);
            DecoaretInteractions(config);

            DecoaretGridView(config);

        }


        protected virtual void DecorateLegend(ReportConfig config)
        {
            Legend legend = new Legend();

            if (Parent.Fields.Count > 4)
            {
                legend.Docked = "left";
            }
            else
            {
                legend.Docked = "top";
            }

            Chart.Legend = legend;
        }

 

        protected virtual void DecoaretInteractions(ReportConfig config)
        {
          Chart.Interactions = new ChartBaseInteractionsJobject().Generate();
        }

        protected virtual void DecorateChart(ReportConfig config)
        {
            GenericChart chart = new GenericChart();
            chart.BiaChartType = ChartTypes.BiChart;
            chart.Options = new CartesianChartOptions();
            chart.Options.LeftUnits = config.GetLeftUnits();
            chart.Options.RightUnits = config.GetRightUnits();
            chart.Options.OverageUnits = config.OverageUnits;
            chart.Options.CategoryUnits = config.CategoryDataTipLabelField;
            chart.Options.Precision = config.Precision;
            chart.Options.SecondarySeriesPrecision = config.SecondaySeriesPrecision;
            chart.Options.SecondarySeriesUnits = config.SecondarySeriesUnits;
            chart.Options.Mode = config.Mode;

            Parent.Chart = chart;
            Parent.Fields = Parent.AllFields.Select(kpv => kpv.Key).OrderByDescending(x => x).ToList();
        }

        protected virtual void DecorateCategoryAxis(ReportConfig config)
        {
            ChartAxis ca = new ChartAxis();
            Chart.Axes.Add(ca);

        }

        protected virtual void DecorateLeftAxis(ReportConfig config)
        {
            ChartAxis la = new ChartAxis();
            la.Fields = Parent.AllFields.Where(kvp => kvp.Key != "cat").Select(kpv => kpv.Key).ToArray();
            la.Grid = true;
            la.Position = AxisPositionType.Left;
            la.Type = AxisTypes.Numeric;

            JavaScriptFunftionLeftAxesRenderer renderer = new JavaScriptFunftionLeftAxesRenderer();
            la.RendererFunction = renderer; 

            Parent.Chart.Axes.Add(la);

        }

    
     

        protected virtual void DecorateLeftSeries(ReportConfig config)
        {
            ChartSeries series = new ChartSeries();
            series.YField = Parent.AllFields.Where(kvp => kvp.Key != "cat").Select(kvp => kvp.Key).ToArray();
            series.Title = Parent.AllFields.Where(kvp => kvp.Key != "cat").Select(kvp => kvp.Key).ToArray();

            JavaScriptFunftionBarSeriesRenderer renderer = new JavaScriptFunftionBarSeriesRenderer();
            series.RendererFunction = renderer; 
            Chart.Series.Add(series);
             
        }

        protected virtual void DecorateLeftSeriesToolTip(ReportConfig config)
        {
            JavaScriptFunftionSeriesToolTipRenderer renderer = new JavaScriptFunftionSeriesToolTipRenderer();
            Chart.Series[0].Tooltip.RendererFunction = renderer;   
        }

        protected virtual void DecorateLeftSeriesGradients(ReportConfig config)
        {
            string[] fields = Parent.AllFields.Where(kvp => kvp.Key != "cat").Select(kvp => kvp.Key).OrderByDescending(x => x).ToArray();
            Dictionary<string,SeriesGradient> gradients = new Dictionary<string, SeriesGradient>();
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
                        Stops =  new List<SeriesGradientStop>
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

                gradients.Add(field,gradient);

                counter++;
            }

            Chart.Gradients = gradients;
            Chart.Series[0].Colors = colors.ToArray();

        }

        protected virtual void DecorateRightSeries(ReportConfig config)
        {
           
        }

        protected virtual void DecorateRightSeriesColors(ReportConfig config)
        {

        }

        protected virtual void DecorateLeftSeriesColors(ReportConfig config)
        {

        }

        protected virtual void DecorateRightSeriesHighlighConfig(ReportConfig config)
        {

        }

        protected virtual void DecorateLeftSeriesHighlightConfig(ReportConfig config)
        {

        }

        protected virtual void DecorateTopAxis(ReportConfig config)
        {

        }

        protected virtual void DecorateRightSeriesMarker(ReportConfig config)
        {

        }

        protected virtual void DecorateLeftSeriesMarker(ReportConfig config)
        {

        }

        protected virtual void DecorateRightSeriesGradients(ReportConfig config)
        {

        }

        protected virtual void DecorateRightSeriesStyle(ReportConfig config)
        {

        }

        protected virtual void DecorateLeftSeriesStyle(ReportConfig config)
        {

        }
        protected virtual void DecorateRightAxis(ReportConfig config)
        {

        }
        protected virtual void DecorateRightSeriesToolTip(ReportConfig config)
        {

        }

        protected virtual void DecoratePieSeries(ReportConfig config)
        {

 
        }

        protected virtual void DecoratePieSeriesToolTip(ReportConfig config)
        {
            
        }

        protected virtual void DecoaretGridView(ReportConfig config)
        {

        }


    }
}