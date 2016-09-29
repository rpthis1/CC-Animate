using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Xml.Linq;
using Newtonsoft.Json.Linq;
using WebApiBia.Dashboard.Core.Dto.Parent;

namespace WebApiBia.Dashboard.Core.FormatterProcessor.DataFormatters
{
    public class MvOptionCFormatter : DataFormatter
    {
        public override Parent FormatData(string data)
        {
            XElement root = XElement.Parse(data);

            Parent parent = new Parent();
            List<dynamic> list = new List<dynamic>();
            dynamic usageRecod;
            XElement item;
            double left = 0;
            double right = 0;
            


            Dictionary<string, string> fields = new Dictionary<string, string>();

            fields.Add("cat", "cat");
            fields.Add("left", "left");
            fields.Add("right", "right");
            fields.Add("date", "date");
            fields.Add("variable", "variable");

            foreach (XElement trend in root.Descendants("datum").ToList()[0].Nodes())
            {
                usageRecod = new ExpandoObject();
                usageRecod.cat = trend.Attribute("date").Value;

                var dic = (IDictionary<string, object>) usageRecod;

                foreach (XElement entity in trend.Elements("parent").Elements("item").Nodes())
                {

                    if (entity.Attribute("name").Value.Equals("Baseline"))
                    {
                        if (Double.IsNaN(Convert.ToDouble(entity.Attribute("value").Value)))
                        {
                            dic["left"] = 0;
                            left = 0;
                        }
                        else
                        {
                            dic["left"] = entity.Attribute("value").Value;
                            left = Convert.ToDouble(entity.Attribute("value").Value);
                        }
                        
                    }
                    if (entity.Attribute("name").Value.Equals("Reporting"))
                    {

                        if (Double.IsNaN(Convert.ToDouble(entity.Attribute("value").Value)))
                        {
                            dic["right"] = 0;
                            right = 0;
                        }
                        else
                        {
                            dic["right"] = entity.Attribute("value").Value;
                            right = Convert.ToDouble(entity.Attribute("value").Value);
                        }


                   
                    }

                }
                var delta = left - right;
                dic["delta"] = delta;

                double percent = delta/left;

                if (Double.IsInfinity(percent) || Double.IsNaN(percent))
                {
                    percent = 0;
                    dic["percent"] = percent;
                }
                else
                {
                    percent = percent * 100;
                    dic["percent"] = percent;
                }
                
                list.Add(usageRecod);

            }

            foreach (XElement trend in root.Descendants("datum").ToList()[1].Nodes())
            {
                usageRecod = new ExpandoObject();
                usageRecod.date = trend.Attribute("date").Value;

                var dic = (IDictionary<string, object>)usageRecod;

                XElement entity = trend.Element("item");

                dic["variable"] = entity.Attribute("value").Value;
                          
                list.Add(usageRecod);

            }

            parent.Values = list;
            parent.AllFields = fields;

          
            return parent;


        }


    }
}