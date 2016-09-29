using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Xml.Linq;
using WebApiBia.Dashboard.Core.Dto.Parent;

namespace WebApiBia.Dashboard.Core.FormatterProcessor.DataFormatters
{
    public class OccupancyPercentageByHourFormatter : DataFormatter
    {
        readonly Dictionary<string, ExpandoObject> _hourRecorded = new Dictionary<string, ExpandoObject>();
        readonly List<dynamic> _list = new List<dynamic>();
        public override Parent FormatData(string data)
        {
            XElement root = XElement.Parse(data);

            Parent parent = new Parent();

            Dictionary<string, string> fields = new Dictionary<string, string>();

            fields.Add("cat", "cat");
            fields.Add("Occupancy", "Occupancy");

            PreBuildCorridor();

            foreach (XElement trend in root.Nodes())
            {

                foreach (XElement entity in trend.Nodes())
                {
                    var item = entity.Element("item");

                    if (item != null)
                    {
                        foreach (var xNode in item.Nodes())
                        {
                            var lowerDepthItem = (XElement)xNode;
                            dynamic record = _hourRecorded[lowerDepthItem.Attribute("hour").Value];
                            var recordDic = (IDictionary<string, object>)record;
                            recordDic["Occupancy"] = lowerDepthItem.Attribute("value").Value;
                        }

                    }
                }
            }

            parent.Values = _list;
            parent.AllFields = fields;
            return parent;


        }

        private void PreBuildCorridor()
        {
            int hours = 24;

            for (int i = 0; i < hours; i++)
            {
                dynamic usageRecod = new ExpandoObject();
                var dic = (IDictionary<string, object>)usageRecod;
                dic["Occupancy"] = "null";
                usageRecod.cat = HourMap(i.ToString());
                _hourRecorded.Add(i.ToString(), usageRecod);
                _list.Add(usageRecod);
            }

        }

        private string HourMap(string hour)
        {

            switch (hour)
            {
                case "0":
                    return "12 AM";
                case "1":
                    return "1 AM";
                case "2":
                    return "2 AM";
                case "3":
                    return "3 AM";
                case "4":
                    return "4 AM";
                case "5":
                    return "5 AM";
                case "6":
                    return "6 AM";
                case "7":
                    return "7 AM";
                case "8":
                    return "8 AM";
                case "9":
                    return "9 AM";
                case "10":
                    return "10 AM";
                case "11":
                    return "11 AM";
                case "12":
                    return "12 PM";
                case "13":
                    return "1 PM";
                case "14":
                    return "2 PM";
                case "15":
                    return "3 PM";
                case "16":
                    return "4 PM";
                case "17":
                    return "5 PM";
                case "18":
                    return "6 PM";
                case "19":
                    return "7 PM";
                case "20":
                    return "8 PM";
                case "21":
                    return "9 PM";
                case "22":
                    return "10 PM";
                case "23":
                    return "11 PM";


            }
            return null;
        }


    }
}