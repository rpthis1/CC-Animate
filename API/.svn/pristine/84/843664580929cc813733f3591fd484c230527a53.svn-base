using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Xml.Linq;
using WebApiBia.Dashboard.Core.Dto.Parent;

namespace WebApiBia.Dashboard.Core.FormatterProcessor.DataFormatters
{
    public class ConsumptionFormatter : DataFormatter
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

            foreach (XElement trend in root.Nodes())
            {
                usageRecod = new ExpandoObject();
                usageRecod.cat = trend.Attribute("date").Value;

               var dic = (IDictionary<string, object>)usageRecod;
       
                foreach (XElement entity in trend.Nodes())
                {
                    item = entity.Element("item");

                    if (item != null)
                    {
                        if (!item.Nodes().Any())
                        {
                            ParseConsumptionData(item, fields, dic);

                        }
                        else 
                              /**
                                -Using stopDepth parameter
                                -Retrieves direct children of first <item></item>
                              **/
                         {
                            foreach (var xNode in item.Nodes())
                            {
                                var lowerDepthItem = (XElement) xNode;

                                ParseConsumptionData(lowerDepthItem, fields, dic);
                            }
                        }
                    }
                    else  
                    {
                        /**
                         * Has DDAxis. 
                         * Picks only one entity to use as hdd,cdd or tempature value of a group of entities assuming they have similar values.
                         **/

                        IEnumerable<XElement> axes = entity.Descendants("axis");
                        foreach (XElement axisItem in axes.Nodes())
                        {

                            if (!axisItem.Nodes().Any())
                            {
                                ParseDdAxisData(axisItem, fields, dic);
                            }
                            else
                            {
                                foreach (var xNode in axisItem.Nodes())
                                {
                                    var lowerDepthItem = (XElement)xNode;
                                    ParseDdAxisData(lowerDepthItem, fields, dic);

                                }
                            }
                        }

                    }
   
                }
                list.Add(usageRecod);

            }

            parent.Values = list;
            parent.AllFields = fields;
            return parent;


        }

        private void ParseConsumptionData(XElement item, Dictionary<string, string> fields, IDictionary<string, object> dic)
        {
            if (!fields.ContainsKey(item.Attribute("name").Value))
            {
                fields.Add(item.Attribute("name").Value, item.Attribute("name").Value);
            }
            dic[item.Attribute("name").Value] = item.Attribute("value").Value;

        }

        private void ParseDdAxisData(XElement item, Dictionary<string, string> fields, IDictionary<string, object> dic)
        {
            if (!fields.ContainsKey(item.Attribute("name").Value))
            {
                fields.Add(item.Attribute("name").Value, item.Attribute("name").Value);
            }

            if (item.Attribute("value").Value.Equals(""))
            {
                dic[item.Attribute("name").Value] = 0;

            }
            else
            {
                dic[item.Attribute("name").Value] = item.Attribute("value").Value;

            }

        }


    }
}