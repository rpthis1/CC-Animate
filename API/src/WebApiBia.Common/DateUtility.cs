using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WebApiBia.Data.Entities.Bia;

namespace WebApiBia.Common
{
    public class DateUtility:IDateUtility
    {
        public DateTimeDates GetDates(BiaVReportPropertyDate date)
        {
            DateTimeDates dates;
            string type = date.DateType.ToUpper();

            switch (type)
            {
                case "YEARLYRANGE":
                    dates = ProcessRange(date);
                    break;
                case "RANGE":
                    dates = ProcessRange(date);
                    break;
                case "LM":
                    dates = ProcessLastMonth();
                    break;
                case "1M":
                    dates = ProcessLastMonth();
                    break;
                case "MTD":
                    dates = ProcessMonthToDate();
                    break;
                case "ALL":
                    dates = ProcessAll(date);
                    break;
                default:
                    dates = ProcessLastMonth();
                    break;

            }
            return dates;
        }

        private DateTimeDates ProcessRange(BiaVReportPropertyDate date)
        {
            DateTime end = DateTime.Parse(date.End);
            DateTime start = DateTime.Parse(date.Start);

            DateTimeDates dates = new DateTimeDates();
            dates.StartDateTime = start;
            dates.EndDateTime = end;

            return dates;
        }


        private DateTimeDates ProcessAll(BiaVReportPropertyDate date)
        {
            DateTime end = DateTime.Today;
            DateTime start = DateTime.Parse(date.Start);

            end = end.AddDays(-1);

            DateTimeDates dates = new DateTimeDates
            {
                StartDateTime = start,
                EndDateTime = end
            };

            return dates;
        }

        private DateTimeDates ProcessLastMonth()
        {

            DateTime today = DateTime.Today;
            DateTime start = new DateTime(today.Year, today.Month, 1);
            start = start.AddMonths(-1);

            DateTime end = new DateTime(today.Year, today.Month, 1);
            end = end.AddMonths(-1);
            end = new DateTime(end.Year, end.Month, DateTime.DaysInMonth(end.Year, end.Month));

            DateTimeDates dates = new DateTimeDates();
            dates.StartDateTime = start;
            dates.EndDateTime = end;

            return dates;

        }

        private DateTimeDates ProcessMonthToDate()
        {
            DateTime today = DateTime.Today;
            DateTime start = new DateTime(today.Year, today.Month, 1);
            DateTime end =  DateTime.Today;
            end = end.AddDays(-1);
            DateTimeDates dates = new DateTimeDates();
            dates.StartDateTime = start;
            dates.EndDateTime = end;
            return dates;

        }
    }
}
