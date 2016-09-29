using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Xml.Linq;
using Newtonsoft.Json.Linq;
using WebApiBia.Dashboard.Core.Dto.Parent;

namespace WebApiBia.Dashboard.Core.FormatterProcessor.DataFormatters
{
    public class ContinuousCommissioningFormatter : DataFormatter
    {
        readonly Dictionary<string, string> _fields = new Dictionary<string, string>();
        readonly Dictionary<string, ExpandoObject> _hourRecorded = new Dictionary<string, ExpandoObject>();
        readonly  List<dynamic> _list = new List<dynamic>();
        public override Parent FormatData(string data)
        {

            XElement root = XElement.Parse(data);

            Parent parent = new Parent();
           
            dynamic usageRecod;
            XElement item;
            string offset = string.Empty;
            int hours = 0;

        

            _fields.Add("cat", "cat");
            _fields.Add("Minimum", "Minimum");
            _fields.Add("Maximum", "Maximum");

            PreBuildCorridor();

            foreach (XElement trend in root.Descendants("corridor").Nodes())
            {

                dynamic record = _hourRecorded[trend.Attribute("hours").Value];
                var recordDic = (IDictionary<string, object>)record;

                recordDic["Minimum"] = trend.Attribute("minimum").Value;
                recordDic["Maximum"] = trend.Attribute("maximum").Value;

                offset = trend.Attribute("offset").Value;
            }

            JObject options = new JObject();
            options["input_value"] = AssertXmlAttribute(root.Attribute("input_value"));
            options["date"] =  AssertXmlAttribute(root.Attribute("date"));
            options["entityId"] =  AssertXmlAttribute(root.Attribute("entityId"));
            options["location_name"] = AssertXmlAttribute(root.Attribute("location_name"));
            options["zip_code"] = AssertXmlAttribute(root.Attribute("zip_code"));
            options["over_use_energy"] = AssertXmlAttribute(root.Attribute("over_use_energy"));
            options["input_rp"] = AssertXmlAttribute(root.Attribute("input_rp"));
            options["output_rp"] = AssertXmlAttribute(root.Attribute("output_rp"));
            options["offset"] = Convert.ToInt32(offset)/60;

            parent.Values = _list;
            parent.AllFields = _fields;
            parent.ContinuousCommissioningOptions = options;
            return parent;


        }

        private void PreBuildCorridor()
        {
            int hours = 24;

            for (int i = 0; i < hours; i++)
            {
                dynamic usageRecod = new ExpandoObject();
                var dic = (IDictionary<string, object>)usageRecod;
                dic["Minimum"] = "null";
                dic["Maximum"] = "null";
                usageRecod.cat = i.ToString();
                _hourRecorded.Add(i.ToString(), usageRecod);
                _list.Add(usageRecod);
            }

        }


}
}