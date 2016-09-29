using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace WebApiBia.Common
{
    public class DateTimeDates
    {
        public DateTime StartDateTime { get; set; }
        public DateTime EndDateTime { get; set; }
        public string StartString { get; set; }
        public string EndString { get; set; }

        public void Format()
        {
            StartString = StartDateTime.ToString("MM/dd/yy");
            EndString = EndDateTime.ToString("MM/dd/yy");
        }
    }
}
