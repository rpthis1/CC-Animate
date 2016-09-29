using System.Collections.Generic;
using System.Dynamic;
using System.Runtime.Serialization;
using System.Xml.Linq;
using WebApiBia.Common.Assert;
using WebApiBia.Dashboard.Core.Dto.Parent;

namespace WebApiBia.Dashboard.Core.FormatterProcessor.DataFormatters
{
    public class DemandDetailFormatter : DataFormatter
    {
        /*
         * DemandDetailReport.xml
         */

        private AssertUtil _assertUtil = new AssertUtil();

        public override Parent FormatData(string data)
        {
            XElement root = XElement.Parse(data);
            XElement items;
            Parent parent = new Parent();
            List<dynamic> list = new List<dynamic>();
            dynamic usageRecod;
            string recorded = "Recorded";

            Dictionary<string, string> fields = new Dictionary<string, string>();


            fields.Add("cat", "cat");
            fields.Add(recorded, recorded);


            foreach (XElement trend in root.Nodes())
            {
                usageRecod = new ExpandoObject();
                var dic = (IDictionary<string, object>)usageRecod;
                usageRecod.cat = trend.Attribute("date").Value;

                items = trend.Element("parent").Element("item");

                if (items != null)
                {

                    foreach (XElement item in items.Nodes())
                    {
                        if (!fields.ContainsKey(item.Attribute("name").Value))
                        {
                            fields.Add(item.Attribute("name").Value, item.Attribute("name").Value);
                        }

                        dic[item.Attribute("name").Value] = _assertUtil.AssertIsNullOrEmptyReturnZero(item.Attribute("value").Value);

                        if (item.Attribute("date") != null)
                        {

                            if (!fields.ContainsKey(item.Attribute("name").Value + " " + recorded))
                            {
                                fields.Add(item.Attribute("name").Value + " " + recorded, item.Attribute("name").Value + " " + recorded);
                            }

                            dic[item.Attribute("name").Value + " " + recorded] = item.Attribute("date").Value;
                        }
                    }
                    list.Add(usageRecod);
                }


            }

            parent.Values = list;
            parent.AllFields = fields;
            return parent;


        }


    }
}