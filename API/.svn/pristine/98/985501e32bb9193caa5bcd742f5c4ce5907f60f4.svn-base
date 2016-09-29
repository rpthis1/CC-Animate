using System;
using System.Collections.Generic;
using System.Linq;
using WebApiBia.Common;
using WebApiBia.Dashboard.Core.Dto.Parent;
using WebApiBia.Dashboard.Core.Dto.Report;
using WebApiBia.Dashboard.UiControls;
using WebApiBia.Dashboard.UiControls.Button;
using WebApiBia.Dashboard.UiControls.Field;
using WebApiBia.Dashboard.UiControls.Form;
using WebApiBia.Dashboard.UiControls.Reporting;
using WebApiBia.Data.Entities.Bia;

namespace WebApiBia.Dashboard.Core.DecoratorProcessor.Controls
{
    public class DesktopPlatformControlsDecorator :IControlsDecorator
    {
        private ReportConfig _config;
        private readonly  DateUtility _dateUtility = new DateUtility();
        public void Decorate(Parent parent, ReportConfig config)
        {
            _config = config;
            DecorateData(parent, config);
            DecorateUiControls(parent, config);
            DecorateUiControlsDates(parent, config);
            DecorateUiControlsMvDates(parent, config);

        }



        private void DecorateData(Parent parent, ReportConfig config)
        {
            parent.Parameters = config.Parameters;
            parent.Provider = config.Provider;
            parent.Formatter = config.Formatter;
            parent.DataProcessor = config.DataProcessor;
        }

        private void DecorateUiControls(Parent parent, ReportConfig config)
        {
            parent.Decorators = config.Decorators;
        }


        private void DecorateUiControlsDates(Parent parent, ReportConfig config)
        {
            parent.FooterDecorators = new List<UiComponent>();

            if (config.Dates != null)
            {
                foreach (BiaVReportPropertyDate item in config.Dates)
                {
                    var button = new UiButton();
                    var dates = _dateUtility.GetDates(item);
                    dates.Format();
                    button.Text = item.Label;
                    button.Type = item.DateType;
                    button.Dates = String.Format("{0}-{1}", dates.StartString, dates.EndString);
                    button.Parameter = "dates";
                    button.Pressed = IsSelected(item);
                    button.ControlType = UiControlType.DesktopDecoratorDate;
                    parent.FooterDecorators.Add(button);

                }
            }
        }
        private void DecorateUiControlsMvDates(Parent parent, ReportConfig config)
        {
            parent.MvDecorators = new List<UiComponent>();
            if (config.MvDates != null)
            {
                foreach (BiaVReportPropertyDate item in config.MvDates)
                {
                    var button = new UiButton();
                    var dates = _dateUtility.GetDates(item);
                    dates.Format();
                    button.Text = item.Label;
                    button.Type = item.DateType;
                    button.Parameter = "mvdates";
                    button.Dates = String.Format("{0}-{1}-{2}-{3}", item.GetBaselineStarDateParmaterFriendly(),
                        item.GetBaselineEndDateParmaterFriendly(), item.GetReportingStarDateParmaterFriendly(),
                        item.GetreportingEndDateParmaterFriendly());
                    button.Pressed = IsSelected(item);
                    button.ControlType = UiControlType.DesktopDecoratorDate;
                    parent.MvDecorators.Add(button);

                }
            }
        }


        private bool IsSelected(BiaVReportPropertyDate item)
        {
            if (item.Selected)
            {
                return true;
            }
            return false;
        }


    }
}