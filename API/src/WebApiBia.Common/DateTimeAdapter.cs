using System;

namespace WebApiBia.Common
{
    public sealed class DateTimeAdapter:IDateTime
    {
        public DateTime UtcNow
        {
            get { return DateTime.UtcNow; }
        }
    }
}
