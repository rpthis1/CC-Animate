using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace WebApiBia.Common
{
    public interface IDateTime
    {
        DateTime UtcNow { get; }
    }
}
