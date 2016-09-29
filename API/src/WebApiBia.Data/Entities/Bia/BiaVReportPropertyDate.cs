using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using Newtonsoft.Json;

namespace WebApiBia.Data.Entities.Bia
{
    public class BiaVReportPropertyDate
    {

        [JsonProperty(PropertyName = "label")]
        public string Label { get; set; }
        [JsonProperty(PropertyName = "datetype")]
        public string DateType { get; set; }
        [JsonProperty(PropertyName = "selected")]
        public bool Selected { get; set; }
        [JsonProperty(PropertyName = "yearsBack")]
        public int? YearsBack { get; set; }

        [JsonProperty(PropertyName = "start")]
        public string Start {

            get
            {
                if (_start == null)
                {
                    return null;
                }
                return String.Format("{0:yyyy-MM-dd}", _start);
            }

            set
            {
                if (value != null)
                {
                    _start = DateTime.Parse(value);
                }
            }
        }


        [JsonProperty(PropertyName = "end")]
        public string End
        {

            get
            {
                if (_end == null)
                {
                    return null;
                }
                return String.Format("{0:yyyy-MM-dd}", _end);
            }

            set
            {
                if (value != null)
                {
                    _end = DateTime.Parse(value);
                }
            }
        }



        [JsonProperty(PropertyName = "baselineStarDate")]
        public string BaselineStarDate
        {

            get
            {
                if (_baselineStarDate == null)
                {
                    return null;
                }
                return String.Format("{0:yyyy-MM-dd}", _baselineStarDate);
            }

            set
            {
                if (value != null)
                {
                    _baselineStarDate = DateTime.Parse(value);
                }
            }
        }



        [JsonProperty(PropertyName = "baselineEndDate")]
        public string BaselineEndDate
        {

            get
            {
                if (_baselineEndDate == null)
                {
                    return null;
                }
                return String.Format("{0:yyyy-MM-dd}", _baselineEndDate);
            }

            set
            {
                if (value != null)
                {
                    _baselineEndDate = DateTime.Parse(value);
                }
            }
        }



        [JsonProperty(PropertyName = "reportingStarDate")]
        public string ReportingStarDate
        {

            get
            {
                if (_reportingStarDate == null)
                {
                    return null;
                }
                return String.Format("{0:yyyy-MM-dd}", _reportingStarDate);
            }

            set
            {
                if (value != null)
                {
                    _reportingStarDate = DateTime.Parse(value);
                }
            }
        }


        [JsonProperty(PropertyName = "reportingEndDate")]
        public string ReportingEndDate
        {

            get
            {
                if (_reportingEndDate == null)
                {
                    return null;
                }
                return String.Format("{0:yyyy-MM-dd}", _reportingEndDate);
            }

            set
            {
                if (value != null)
                {
                    _reportingEndDate = DateTime.Parse(value);
                }
            }
        }





        public string GetStartParmaterFriendly()
        {
            return String.Format("{0:MM/dd/yyyy}", _start);
        }
        public string GetEndParmaterFriendly()
        {
            return String.Format("{0:MM/dd/yyyy}", _end);
        }


        /* MV start */
        public string GetBaselineStarDateParmaterFriendly()
        {
            return String.Format("{0:MM/dd/yyyy}", _baselineStarDate);
        }
        public string GetBaselineEndDateParmaterFriendly()
        {
            return String.Format("{0:MM/dd/yyyy}", _baselineEndDate);
        }

        public string GetReportingStarDateParmaterFriendly()
        {
            return String.Format("{0:MM/dd/yyyy}", _reportingStarDate);
        }
        public string GetreportingEndDateParmaterFriendly()
        {
            return String.Format("{0:MM/dd/yyyy}", _reportingEndDate);
        }

        /* MV end */
        private DateTime? _start;
        private DateTime? _end;

        /* MV start */
        private DateTime? _baselineStarDate;
        private DateTime? _baselineEndDate;
        private DateTime? _reportingStarDate;
        private DateTime? _reportingEndDate;
        /* MV end */
    }
}
