using System.Collections.Generic;
using System.Dynamic;
using System.Xml.Linq;
using WebApiBia.Dashboard.Core.Dto.Parent;

namespace WebApiBia.Dashboard.Core.FormatterProcessor.DataFormatters
{
    public class LoadDurationFormatter : DataFormatter
    {
        public override Parent FormatData(string data)
        {
            XElement root = XElement.Parse(data);

            Parent parent = new Parent();
            List<dynamic> list = new List<dynamic>();
            dynamic usageRecod;
          
            Dictionary<string, string> fields = new Dictionary<string, string>();
            root = root.Element("parent").Element("item");

            fields.Add("cat", "cat");
            fields.Add(root.Attribute("name").Value, root.Attribute("name").Value);
       
                foreach (XElement entity in root.Nodes())
                {
                    usageRecod = new ExpandoObject();
                    var dic = (IDictionary<string, object>)usageRecod;
                    usageRecod.cat = entity.Attribute("percent").Value;
                    dic[root.Attribute("name").Value] = entity.Attribute("value").Value;
                    list.Add(usageRecod);
                }

            parent.Values = list;
            parent.AllFields = fields;
            return parent;
        }


    }
}