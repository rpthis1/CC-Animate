using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Xml.Linq;
using WebApiBia.Dashboard.Core.Dto.Parent;
using WebApiBia.Dashboard.Core.Dto.Report;

namespace WebApiBia.Dashboard.Core.FormatterProcessor.DataFormatters
{
    public class ConsumptionOverYearFormatter : DataFormatter
    {
        public override Parent FormatData(string data)
        {
            XElement root = XElement.Parse(data);

            Parent parent = new Parent();
            List<dynamic> list = new List<dynamic>();
            dynamic usageRecod;
            DateTime date;

            Dictionary<string, string> totalYears = new Dictionary<string, string>();
            Dictionary<string, string> fields = new Dictionary<string, string>();
            Dictionary<string, ExpandoObject> months = new Dictionary<string, ExpandoObject>();

            CreateUsageObjects(months, list);

            fields.Add("cat", "cat");

            foreach (XElement trend in root.Nodes())
            {
            
                date = DateTime.Parse(trend.Attribute("date").Value);
                string shortMoth = date.ToString("MMM");
                string year = date.Year.ToString();
                AddToTotalYears(totalYears, year);
                usageRecod = months[shortMoth];

                var dic = (IDictionary<string, object>)usageRecod;
                XElement item = (XElement)trend.Element("parent").FirstNode;

                    if (item != null)
                    {
                        if (!fields.ContainsKey(year))
                        {
                            fields.Add(year, year);
                        }
                        dic[year] = item.Attribute("value").Value;
                    }

            }


            SetMissingYearsToZero(totalYears, list);
            parent.Values = list;
            parent.AllFields = fields;
            return parent;


        }

   


        private void CreateUsageObjects(Dictionary<string, ExpandoObject> months, List<dynamic> list)
        {
            dynamic usageRecod = new ExpandoObject();
            usageRecod.cat = "Jan";
            months.Add("Jan",usageRecod);
            list.Add(usageRecod);

            usageRecod = new ExpandoObject();
            usageRecod.cat = "Feb";
            months.Add("Feb", usageRecod);
            list.Add(usageRecod);

            usageRecod = new ExpandoObject();
            usageRecod.cat = "Mar";
            months.Add("Mar", usageRecod);
            list.Add(usageRecod);

            usageRecod = new ExpandoObject();
            usageRecod.cat = "Apr";
            months.Add("Apr", usageRecod);
            list.Add(usageRecod);

            usageRecod = new ExpandoObject();
            usageRecod.cat = "May";
            months.Add("May", usageRecod);
            list.Add(usageRecod);

            usageRecod = new ExpandoObject();
            usageRecod.cat = "Jun";
            months.Add("Jun", usageRecod);
            list.Add(usageRecod);

            usageRecod = new ExpandoObject();
            usageRecod.cat = "Jul";
            months.Add("Jul", usageRecod);
            list.Add(usageRecod);

            usageRecod = new ExpandoObject();
            usageRecod.cat = "Aug";
            months.Add("Aug", usageRecod);
            list.Add(usageRecod);

            usageRecod = new ExpandoObject();
            usageRecod.cat = "Sep";
            months.Add("Sep", usageRecod);
            list.Add(usageRecod);

            usageRecod = new ExpandoObject();
            usageRecod.cat = "Oct";
            months.Add("Oct", usageRecod);
            list.Add(usageRecod);

            usageRecod = new ExpandoObject();
            usageRecod.cat = "Nov";
            months.Add("Nov", usageRecod);
            list.Add(usageRecod);

            usageRecod = new ExpandoObject();
            usageRecod.cat = "Dec";
            months.Add("Dec", usageRecod);
            list.Add(usageRecod);


        }

        private void AddToTotalYears(Dictionary<string, string> totalYears, string year)
        {
            if (!totalYears.ContainsKey(year))
            {
                totalYears.Add(year,year);
            }
        }

        private void SetMissingYearsToZero(Dictionary<string, string> totalYears, List<dynamic> list)
        {

            foreach (var expando in list)
            {
                foreach (var year in totalYears)
                {
                    var dic = ((IDictionary<String, object>) expando);
                    if (!dic.ContainsKey(year.Key))
                    {
                        dic[year.Key] = 0;
                    }
                }

               
            }

        }


    }
}