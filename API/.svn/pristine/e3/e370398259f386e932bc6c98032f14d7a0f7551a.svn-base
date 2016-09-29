using System.Collections.Generic;
using System.Dynamic;
using System.Xml.Linq;
using WebApiBia.Dashboard.Core.Dto.Parent;

namespace WebApiBia.Dashboard.Core.FormatterProcessor.DataFormatters
{
    public class HourFilterReportFormatter : DataFormatter
    {
        public override Parent FormatData(string data)
        {
            XElement root = XElement.Parse(data);

            Parent parent = new Parent();
            List<dynamic> list = new List<dynamic>();
            dynamic usageRecod;
            XElement item;

            Dictionary<string, string> fields = new Dictionary<string, string>();

            fields.Add("cat", "cat");
            fields.Add("data", "data");

            foreach (XElement trend in root.Element("parent").Nodes())
            {
                usageRecod = new ExpandoObject();
                usageRecod.cat = trend.Attribute("type").Value;

               var dic = (IDictionary<string, object>)usageRecod;

               dic["data"] = trend.Attribute("value").Value;
       
               list.Add(usageRecod);

            }

            parent.Values = list;
            parent.AllFields = fields;
            return parent;


        }


    }
}