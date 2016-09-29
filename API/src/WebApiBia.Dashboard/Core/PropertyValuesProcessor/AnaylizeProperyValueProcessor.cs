using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Newtonsoft.Json.Linq;
using WebApiBia.Common.Assert;
using WebApiBia.Data.Entities.Bia;
using WebApiBia.Data.Mapper;

namespace WebApiBia.Dashboard.Core.PropertyValuesProcessor
{
    public class AnaylizeProperyValueProcessor
    {
        public readonly List<BiaVBase> Properties = new List<BiaVBase>();
        private readonly AutoMapper _mapper = new AutoMapper();
        private readonly AssertPropertyValues _assertPropertyValues = new AssertPropertyValues();
        private void CreatePropertiesList(string data)
        {
            Properties.Clear();
            dynamic obj = JObject.Parse(data);
            dynamic resultArray = obj["result"][0];
            JArray a = resultArray.value;
            foreach (JObject o in a.Children<JObject>())
            {
                foreach (JProperty p in o.Properties())
                {
                    string name = p.Name;
                    string value = p.Value.ToString();

                    if (name.Equals("@class"))
                    {
                        var property = _mapper.VertexMap(o, value);
                        Properties.Add(property);
                    }

                }
            }
        }

        public string GetPropertyValuesProcessor(string data)
        {
            CreatePropertiesList(data);
            var propertyValuesProcessor = Properties.Find(v => v != null && v.Label == "propertiesProcessor");
            return _assertPropertyValues.AssertStringProperty(propertyValuesProcessor);
        }

    }
}
