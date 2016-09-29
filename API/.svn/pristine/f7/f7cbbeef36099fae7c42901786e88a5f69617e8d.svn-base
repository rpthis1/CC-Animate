using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using Newtonsoft.Json.Linq;
using WebApiBia.Common;
using WebApiBia.Common.Assert;
using WebApiBia.Common.Json;
using WebApiBia.Dashboard.Core.Dto.Report;
using WebApiBia.Data.Entities.Bia;
using WebApiBia.Data.Mapper;

namespace WebApiBia.Dashboard.Core.PropertyValuesProcessor
{
    public class ReportPropertyValuesProcessor : IReportPropertyValuesProcessor
    {
        private  List<BiaVBase> _properties;
        private readonly AutoMapper _mapper = new AutoMapper();
        protected readonly JsonHelper _json = new JsonHelper();
        protected readonly ReportConfig Config = new ReportConfig();
        private readonly IDateUtility _dateUtility = new DateUtility();
        private readonly  AssertPropertyValues _assertPropertyValues = new AssertPropertyValues();


 

        public virtual ReportConfig Process(List<BiaVBase> properties)
        {
            _properties = properties;

            ProcessStringProperties();
            ProcessParameterProperties();
            ProcessDatesProperties();
            ProcessMvDatesProperties();
            ProcessParameterDecoratorsProperties();
            ProcessGradientsProperties();
            ProcessOptions();
            return Config;

        }

        private void ProcessStringProperties()
        {

  

            var stringProperty = _properties.Find(v => v != null && v.Label == "leftColor");
            Config.LeftColor = AssertStringProperty(stringProperty);

            stringProperty = _properties.Find(v => v != null && v.Label == "rightColor");
            Config.RightColor = AssertStringProperty(stringProperty);

    

            stringProperty = _properties.Find(v => v != null && v.Label == "categoryDataTipLabelField");
            Config.CategoryDataTipLabelField = AssertStringProperty(stringProperty);

            stringProperty = _properties.Find(v => v != null && v.Label == "rightLabel");
            Config.RightLabel = AssertStringProperty(stringProperty);

            stringProperty = _properties.Find(v => v != null && v.Label == "provider");
            Config.Provider = AssertStringProperty(stringProperty);

            stringProperty = _properties.Find(v => v != null && v.Label == "formatter");
            Config.Formatter = AssertStringProperty(stringProperty);

            stringProperty = _properties.Find(v => v != null && v.Label == "dataDecorator");
            Config.DataDecorator = AssertStringProperty(stringProperty);

            stringProperty = _properties.Find(v => v != null && v.Label == "reportProvider");
            Config.Provider = AssertStringProperty(stringProperty);

            stringProperty = _properties.Find(v => v != null && v.Label == "reportFormatter");
            Config.Formatter = AssertStringProperty(stringProperty);

            stringProperty =_properties.Find(v => v != null && v.Label == "reportDataDecorator");
            Config.DataDecorator = AssertStringProperty(stringProperty);

            stringProperty = _properties.Find(v => v != null && v.Label == "chartType");
            Config.ChartType = AssertStringProperty(stringProperty);

            stringProperty = _properties.Find(v => v != null && v.Label == "propertiesProcessor");
            Config.PropertiesProcessor = AssertStringProperty(stringProperty);

            stringProperty = _properties.Find(v => v != null && v.Label == "dataProcessor");
            AssertReportDataProcessor(stringProperty, Config);

            /*MV START */

            stringProperty = _properties.Find(v => v != null && v.Label == "leftAxisUnits");
            Config.LeftAxisUnits = AssertStringProperty(stringProperty);

            stringProperty = _properties.Find(v => v != null && v.Label == "rightAxisUnits");
            Config.RightAxisUnits = AssertStringProperty(stringProperty);

            stringProperty = _properties.Find(v => v != null && v.Label == "leftAxisLeftSeriesLabel");
            Config.LeftAxisLeftSeriesLabel = AssertStringProperty(stringProperty);

            stringProperty = _properties.Find(v => v != null && v.Label == "leftAxisRightSeriesLabel");
            Config.LeftAxisRightSeriesLabel = AssertStringProperty(stringProperty);

            stringProperty = _properties.Find(v => v != null && v.Label == "leftAxisLeftSeriesColor");
            Config.LeftAxisLeftSeriesColor = AssertStringProperty(stringProperty);

            stringProperty = _properties.Find(v => v != null && v.Label == "leftAxisRightSeriesColor");
            Config.LeftAxisRightSeriesColor = AssertStringProperty(stringProperty);


            stringProperty = _properties.Find(v => v != null && v.Label == "rightAxisSeriesLabel");
            Config.RightAxisSeriesLabel = AssertStringProperty(stringProperty);

            /*MV END */

        }


        private void ProcessGradientsProperties()
        {

            BiaVReportPropertyGradientsVertex gradientProperties = (BiaVReportPropertyGradientsVertex)_properties.Find(v => v.Label == "gradients");

            if (gradientProperties != null)
            {
                Config.Gradients = gradientProperties.GetMergedGradients();

            }

        }


        private void ProcessParameterProperties()
        {

            BiaVReportPropertyParametersVertex parameterProperties = (BiaVReportPropertyParametersVertex)_properties.Find(v => v.Label == "parameters");

            if (parameterProperties != null)
            {
                Config.Parameters = parameterProperties.GetMergedParameters();

            }
            
        }
        private void ProcessMvDatesProperties()
        {
            BiaVReportPropertyDatesVertex datesProperties = (BiaVReportPropertyDatesVertex)_properties.Find(v => v.Label == "mvDates");

            if (datesProperties != null)
            {
                Config.MvDates = datesProperties.GetMergedDates();
            }

        }

        private void ProcessDatesProperties()
        {

           
            BiaVReportPropertyDatesVertex datesProperties = (BiaVReportPropertyDatesVertex)_properties.Find(v => v.Label == "dates");


            Config.Dates = checkIfItsTheFirstOfTheMonth(datesProperties);

            if (Config.Dates != null)
            {

                foreach (BiaVReportPropertyDate date in Config.Dates)
                {
                    if (date.Selected)
                    {
                        DateTimeDates dates = _dateUtility.GetDates(date);
                        dates.Format();

                        BiaVReportPropertyParameter startDateParameter = new BiaVReportPropertyParameter()
                        {
                            Id = "startDate",
                            Value = dates.StartString
                        };

                        BiaVReportPropertyParameter endDateParameter = new BiaVReportPropertyParameter()
                        {
                            Id = "endDate",
                            Value = dates.EndString
                        };


                        if (Config.Parameters != null)
                        {
                            Config.Parameters.Add(startDateParameter);
                            Config.Parameters.Add(endDateParameter);
                        }
                       

                    }
                }
            }

        }

        private List<BiaVReportPropertyDate> checkIfItsTheFirstOfTheMonth(BiaVReportPropertyDatesVertex datesProperties)
        {
            bool makeNewDateDefault = false;
            bool notAbleToFindNewDefaultDate = true;
            BiaVReportPropertyDate mtdDate = null;
            List<BiaVReportPropertyDate> presetDates = null;
            if (datesProperties != null)
            {
                presetDates = datesProperties.GetMergedDates();
                foreach (BiaVReportPropertyDate date in presetDates)
                {
                    if (date.Selected)
                    {

                        if(date.DateType.ToUpper().Equals("MTD"))
                        {
                            DateTime now = DateTime.Now;

                            if (now.Day == 1)
                            {
                                makeNewDateDefault = true;
                                date.Selected = false;
                                mtdDate = date;
                                break;
                            }
                        }
                    }
                }

                if (makeNewDateDefault)
                {
                    foreach (BiaVReportPropertyDate date in presetDates)
                    {

                        if (date.DateType.ToUpper().Equals("LM") || date.DateType.ToUpper().Equals("1M"))
                        {
                            date.Selected = true;
                            notAbleToFindNewDefaultDate = false;
                            break;
                        }
                        
                    }

                    if (notAbleToFindNewDefaultDate)
                    {
                        presetDates.Add(new BiaVReportPropertyDate()
                        {
                            DateType = "lm",
                            Selected =  true,
                            Label = "Last Month"
                        });
                    }
                }
            }

            if (mtdDate != null)
            {
                presetDates.Remove(mtdDate);
            }

            return presetDates;

        }

        private void ProcessParameterDecoratorsProperties()
        {
            BiaVReportPropertyParameterDecoratorsVertex parameterDecoratorsProperties = (BiaVReportPropertyParameterDecoratorsVertex)_properties.Find(v => v.Label == "parameter decorators");

            if (parameterDecoratorsProperties != null)
            {
                Config.Decorators = parameterDecoratorsProperties.GetMergedParametersDecorators();
                PostProcessParameterDecoratoreForDefaultSelect("NORMALIZATION");
                PostProcessParameterDecoratoreForDefaultSelect("GRANULARITY");
                PostProcessParameterDecoratoreForDefaultSelect("HOURFILTER");
                PostProcessParameterDecoratoreForDefaultSelect("DDAXIS");
                PostProcessParameterDecoratoreForDefaultSelect("MODE");
                PostProcessParameterDecoratoreForDefaultSelectAndEnergyParameter("ENTITYVALUETYPE");
                FilterOutHiddenDecorators();
            }

        }


        private void FilterOutHiddenDecorators()
        {
            List<BiaVReportPropertyParameterDecorator> filterHiddenDecorators = new List<BiaVReportPropertyParameterDecorator>();

            foreach (var decoratorCheck in Config.Decorators)
            {
                if (decoratorCheck.Hidden)
                {
                    filterHiddenDecorators.Add(decoratorCheck);
                }

            }

            foreach (var deleteDecorator in filterHiddenDecorators)
            {
                Config.Decorators.Remove(deleteDecorator);
            }
        }

        private void PostProcessParameterDecoratoreForDefaultSelect(string check)
        {
            string filter = String.Empty;

            foreach (var decorator in Config.Decorators)
            {
                if (decorator.ParameterValue.ToUpper().Equals(check))
                {
                    foreach (var decoratorItem in decorator.Decorators)
                    {

                        if (decoratorItem.Selected)
                        {

                            BiaVReportPropertyParameter parameter = new BiaVReportPropertyParameter()
                            {
                                Id = check,
                                Value = decoratorItem.Parameter
                            };

                            if (check.Equals("NORMALIZATION"))
                            {
                                Config.Precision = decoratorItem.Precision;
                            }

                            if (check.Equals("DDAXIS"))
                            {
                                Config.SecondaySeriesFields = new[] {decoratorItem.SecondarySeriesField};
                                Config.SecondaySeriesTitle = new[] { decoratorItem.Label };
                                Config.SecondaySeriesPrecision = decoratorItem.SecondarySeriesPrecision;
                                Config.SecondarySeriesUnits = decoratorItem.SecondarySeriesUnits;
                                Config.SecondarySeriesHidden = decoratorItem.SecondarySeriesHidden;
                                Config.SecondarySeriesColor = decoratorItem.SecondarySeriesColor;
                            }

                            if (check.Equals("MODE"))
                            {
                                Config.Mode = decoratorItem.Parameter;
                            }

                            Config.Parameters.Add(parameter);

                        }
                    }
                }

            }
        }
        
        private void PostProcessParameterDecoratoreForDefaultSelectAndEnergyParameter(string check)
        {
            string filter = String.Empty;

            foreach (var decorator in Config.Decorators)
            {
                if (decorator.ParameterValue.ToUpper().Equals(check))
                {
                    foreach (var decoratorItem in decorator.Decorators)
                    {

                        if (decoratorItem.Selected)
                        {

                            BiaVReportPropertyParameter parameter = new BiaVReportPropertyParameter()
                            {
                                Id = check,
                                Value = decoratorItem.Parameter
                            };

                            Config.Parameters.Add(parameter);

                             BiaVReportPropertyParameter energyparameter = new BiaVReportPropertyParameter()
                            {
                                Id = "Energy",
                                Value = decoratorItem.EnergyParameter
                            };

                            Config.LeftAxisUnits = decoratorItem.Units;

                            Config.Parameters.Add(energyparameter);

                        }
                    }
                }

            }
        }

        private void ProcessOptions()
        {
            var stringProperty = _properties.Find(v => v != null && (v is BiaVBasePropertiesVertex) && (v as BiaVBasePropertiesVertex).RawLabel == "options");
            BiaVBasePropertiesVertex mvcOptionsObject = (BiaVBasePropertiesVertex)stringProperty;

            BiaVBaseProperty barChartType = mvcOptionsObject?.GetPropertyById("barChartType");

            if (barChartType != null)
            {
                Config.ChartType = barChartType.Value;
            }
        }

        private string AssertStringProperty(dynamic prop)
        {
            return _assertPropertyValues.AssertStringProperty(prop);
        }

        private void AssertReportDataProcessor(dynamic prop, ReportConfig config)
        {
            if (prop != null)
            {
                if (prop.Value != null && prop.Value != "")
                {
                    config.DataProcessor = prop.Value;
                }
                
            }
        }

    }
}