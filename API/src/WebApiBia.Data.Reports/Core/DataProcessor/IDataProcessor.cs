using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace WebApiBia.Data.Reports.Core.DataProcessor
{
    public interface IDataProcessor
    {
        string Process(object o);
    }
}
