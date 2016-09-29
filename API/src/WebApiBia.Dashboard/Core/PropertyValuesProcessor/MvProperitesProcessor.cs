using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Newtonsoft.Json.Linq;
using WebApiBia.Common;
using WebApiBia.Dashboard.Core.Dto.Report;
using WebApiBia.Dashboard.UiControls.Chart.Series.Gradients.Util;
using WebApiBia.Data.Entities.Bia;

namespace WebApiBia.Dashboard.Core.PropertyValuesProcessor
{
    public class MvProperitesProcessor : ReportPropertyValuesProcessor
    {
        private readonly  FormatUtility _format = new FormatUtility();
        private readonly GradientUtil _gradient = new GradientUtil();
        public override ReportConfig Process(List<BiaVBase> properties)
        {

           base.Process(properties);
           BiaVReportPropertyDate selectedDate = null;

           BiaVReportPropertyParameter startDateParameter = new BiaVReportPropertyParameter()
           {
               Id = "startDate",
               Value = "1/1/2012"
           };

           BiaVReportPropertyParameter endDateParameter = new BiaVReportPropertyParameter()
           {
               Id = "endDate",
               Value = "12/31/2012"
           };

           BiaVReportPropertyParameter granularity = new BiaVReportPropertyParameter()
           {
               Id = "granularity",
               Value = "Month"
           };


           foreach (BiaVReportPropertyDate date in Config.MvDates)
           {
               if (date.Selected)
               {
                   selectedDate = date;
                   break;
               }
           }


           BiaVReportPropertyParameter baselineStarDate = new BiaVReportPropertyParameter()
           {
               Id = "BaselineStartDate",
               Value = DateTime.Parse(selectedDate.BaselineStarDate).ToString("MM/dd/yyyy")
           };

           BiaVReportPropertyParameter baselineEndDate = new BiaVReportPropertyParameter()
           {
               Id = "BaselineEndDate",
               Value = DateTime.Parse(selectedDate.BaselineEndDate).ToString("MM/dd/yyyy")
           };

           BiaVReportPropertyParameter reportingStarDate = new BiaVReportPropertyParameter()
           {
               Id = "ReportingStartDate",
               Value = DateTime.Parse(selectedDate.ReportingStarDate).ToString("MM/dd/yyyy")
           };

           BiaVReportPropertyParameter reportingEndDate = new BiaVReportPropertyParameter()
           {
               Id = "ReportingEndDate",
               Value = DateTime.Parse(selectedDate.ReportingEndDate).ToString("MM/dd/yyyy")
           };

           Config.Parameters.Add(startDateParameter);
           Config.Parameters.Add(endDateParameter);
           Config.Parameters.Add(granularity);

           Config.Parameters.Add(baselineStarDate);
           Config.Parameters.Add(baselineEndDate);
           Config.Parameters.Add(reportingStarDate);
           Config.Parameters.Add(reportingEndDate);
           Config.Precision = 0;


            AddMvCReports(properties);
            AddMvCOptions(properties);

            return Config;
        }

        private void AddMvCOptions(List<BiaVBase> properties)
        {
            var stringProperty = properties.Find(v => v != null && (v is BiaVBasePropertiesVertex) && (v as BiaVBasePropertiesVertex).RawLabel == "mvcOptions");
            BiaVBasePropertiesVertex mvcOptionsObject = (BiaVBasePropertiesVertex)stringProperty;

            BiaVBaseProperty showPdfExport = mvcOptionsObject?.GetPropertyById("showPDFExport");

            if (showPdfExport != null && Config.MvCOptions != null)
            {
                Config.MvCOptions["showPDFExport"] = showPdfExport.Value;
            }

            BiaVBaseProperty leftAxisUnits = mvcOptionsObject?.GetPropertyById("leftAxisUnits");

            if (leftAxisUnits != null)
            {
                Config.LeftAxisUnits = leftAxisUnits.Value;
            }

            BiaVBaseProperty rightAxisUnits = mvcOptionsObject?.GetPropertyById("rightAxisUnits");

            if (rightAxisUnits != null)
            {
                Config.RightAxisUnits = rightAxisUnits.Value;
            }

            BiaVBaseProperty leftAxisLeftSeriesLabel = mvcOptionsObject?.GetPropertyById("leftAxisLeftSeriesLabel");

            if (leftAxisLeftSeriesLabel != null)
            {
                Config.LeftAxisLeftSeriesLabel = leftAxisLeftSeriesLabel.Value;
            }

            BiaVBaseProperty leftAxisRightSeriesLabel = mvcOptionsObject?.GetPropertyById("leftAxisRightSeriesLabel");

            if (leftAxisRightSeriesLabel != null)
            {
                Config.LeftAxisRightSeriesLabel = leftAxisRightSeriesLabel.Value;
            }


            BiaVBaseProperty leftAxisLeftSeriesColor = mvcOptionsObject?.GetPropertyById("leftAxisLeftSeriesColor");

            if (leftAxisLeftSeriesColor != null)
            {
                Config.LeftAxisLeftSeriesColor = _gradient.VerifyHexFormat(leftAxisLeftSeriesColor.Value);
            }

            BiaVBaseProperty leftAxisRightSeriesColor = mvcOptionsObject?.GetPropertyById("leftAxisRightSeriesColor");

            if (leftAxisRightSeriesColor != null)
            {
                Config.LeftAxisRightSeriesColor = _gradient.VerifyHexFormat(leftAxisRightSeriesColor.Value);
            }

            BiaVBaseProperty rightAxisSeriesLabel = mvcOptionsObject?.GetPropertyById("rightAxisSeriesLabel");

            if (rightAxisSeriesLabel != null)
            {
                Config.RightAxisSeriesLabel = rightAxisSeriesLabel.Value;
            }
        }

        private void AddMvCReports(List<BiaVBase> properties)
        {

            var stringProperty = properties.Find(v => v != null && (v is BiaVBasePropertiesVertex) && (v as BiaVBasePropertiesVertex).RawLabel == "meteredDataReport");
            BiaVBasePropertiesVertex meteredReportObject = (BiaVBasePropertiesVertex)stringProperty;

            
            JObject mvCOptions = new JObject();
            JArray reports = new JArray();

            mvCOptions["reports"] = reports;

            JObject mvCReport = new JObject();
            mvCReport["label"] = "MV";
            mvCReport["type"] = "mv";
            mvCReport["selected"] = true;

            reports.Add(mvCReport);

            if (meteredReportObject != null && meteredReportObject.IsEnabled())
            {
                BiaVBaseProperty meteredEntityId = meteredReportObject.GetPropertyById("meteredEntityId");
                BiaVBaseProperty title = meteredReportObject.GetPropertyById("title");
                BiaVBaseProperty meteredYearStart = meteredReportObject.GetPropertyById("meteredYearStart");
                BiaVBaseProperty selectedMeteredYear = meteredReportObject.GetPropertyById("selectedMeteredYear");
                BiaVBaseProperty meteredDataColor = meteredReportObject.GetPropertyById("meteredDataColor");
                BiaVBaseProperty meteredAppendLabel = meteredReportObject.GetPropertyById("meteredAppendLabel");

                mvCOptions["meteredDataColor"] = meteredDataColor.Value;

                JObject meteredReport = new JObject();
                meteredReport["label"] = title.Value;
                meteredReport["type"] = meteredReportObject.RawLabel;

                if (!meteredEntityId.Value.Equals(""))
                {
                    GradientUtil gradientUtil = new GradientUtil();
                    meteredReport["meteredEntityId"] = meteredEntityId.Value;
                    meteredReport["meteredYearStart"] = meteredYearStart.Value;
                    meteredReport["selectedMeteredYear"] = selectedMeteredYear.Value;
                    meteredReport["parameters"] = AddMeteredDataParameters(properties, meteredReport);
                    meteredReport["meteredDataColor"] = meteredDataColor.Value;
                    meteredReport["meteredDataGradient"] = _json.Serialize(gradientUtil.GetGradientByColor("#" + meteredDataColor.Value));
                    meteredReport["meteredAppendLabel"] = meteredAppendLabel.Value;
                    meteredReport["selected"] = false;
                    reports.Add(meteredReport);
                }

            }

            Config.MvCOptions = mvCOptions;
        }

        private JArray AddMeteredDataParameters(List<BiaVBase> properties, JObject meteredReport)
        {
            List<BiaVReportPropertyParameter> parameters = new List<BiaVReportPropertyParameter>();
            BiaVReportPropertyParameterDecoratorsVertex parameterDecoratorsProperties = (BiaVReportPropertyParameterDecoratorsVertex)properties.Find(v => v.Label == "metered parameter decorators");
            List<BiaVReportPropertyParameterDecorator> paramaterDecorators = parameterDecoratorsProperties.GetMergedParametersDecorators();

            return PostProcessParameterDecoratoreForDefaultSelect(paramaterDecorators, meteredReport);

        }

        private JArray PostProcessParameterDecoratoreForDefaultSelect(List<BiaVReportPropertyParameterDecorator> paramaterDecorators, JObject meteredReport)
        {
            JArray jArray = new JArray();

            foreach (var decorator in paramaterDecorators)
            {
                    foreach (var decoratorItem in decorator.Decorators)
                    {
                        if (decoratorItem.Selected)
                        {
                            BiaVReportPropertyParameter parameter = new BiaVReportPropertyParameter()
                            {
                                Id = decorator.ParameterValue,
                                Value = decoratorItem.Parameter,
                                Precision = decoratorItem.Precision
                             
                            };

                            jArray.Add(JObject.Parse(_json.Serialize(parameter)));

                            if (decorator.ParameterValue.ToUpper().Equals("NORMALIZATION"))
                            {
                                meteredReport["meteredDataPrecisionFormatted"] = _format.FormattedPrecision(decoratorItem.Precision);
                            }

                            if (decorator.ParameterValue.ToUpper().Equals("ENTITYVALUETYPE"))
                            {
                                BiaVReportPropertyParameter energyParameter = new BiaVReportPropertyParameter()
                                {
                                    Id = "Energy",
                                    Value = decoratorItem.EnergyParameter
                                };

                                meteredReport["meteredDataUnits"] = decoratorItem.Units;
                                jArray.Add(JObject.Parse(_json.Serialize(energyParameter)));
                            }
                        }
                    }
                
            }
            return jArray;
        }
    }
}
