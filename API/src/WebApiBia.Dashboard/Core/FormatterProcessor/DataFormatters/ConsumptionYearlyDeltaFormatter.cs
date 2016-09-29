using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Xml.Linq;
using WebApiBia.Common.Assert;
using WebApiBia.Dashboard.Core.Dto.Parent;

namespace WebApiBia.Dashboard.Core.FormatterProcessor.DataFormatters
{
    public class ConsumptionYearlyDeltaFormatter : DataFormatter
    {
        private readonly AssertUtil _assertUtil = new AssertUtil();
        public override Parent FormatData(string data)
        {
            XElement root = XElement.Parse(data);
            XElement before = root.Elements("datum").FirstOrDefault();
            XElement after = root.Elements("datum").ToList()[1];

            Parent parent = new Parent();
            List<dynamic> list = new List<dynamic>();

            Dictionary<string, string> fields = new Dictionary<string, string>();

            fields.Add("cat", "cat");


            foreach (XElement beforeItem in before.Descendants("item"))
            {
                dynamic usageRecod = new ExpandoObject();
               
                var dic = (IDictionary<string, object>)usageRecod;

                string i = beforeItem.Attribute("id").Value;
                string n = beforeItem.Attribute("name").Value;
                usageRecod.cat = n;
                fields.Add(n, n);
                       
                double beforeValue = Convert.ToDouble( _assertUtil.AssertIsNullOrEmptyReturnZero( beforeItem.Attribute("value").Value)  );
                XElement afterItem = after.Descendants("item").FirstOrDefault(obj => obj.Attribute("id").Value == i);
                double afterValue = Convert.ToDouble(_assertUtil.AssertIsNullOrEmptyReturnZero( afterItem.Attribute("value").Value ) );

                double percentage = beforeValue - afterValue;

                percentage = percentage / beforeValue;

                if (double.IsNaN(percentage) || double.IsInfinity(percentage))
                {
                    percentage = 0;
                }
                else
                {
                    percentage = percentage * 100;
                }

                dic[n] = percentage;

                list.Add(usageRecod);

            }



            parent.Values = list;
            parent.AllFields = fields;
            return parent;


        }


    }
}