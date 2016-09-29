using System;
using System.Xml.Linq;
using WebApiBia.Dashboard.Core.Dto.Parent;
using WebApiBia.Dashboard.Core.FormatterProcessor.DataFormatters;

namespace WebApiBia.Dashboard.Core.FormatterProcessor
{
    public class FormatterProcessor : IFormatterProcessor
    {
        public Parent Process(string data, string formatter)
        {
            Type formatterType = Type.GetType("WebApiBia.Dashboard.Core.FormatterProcessor.DataFormatters."+formatter);
            DataFormatter fm = Activator.CreateInstance(formatterType) as DataFormatter;
            return fm.Format(data);
        }
    }
}