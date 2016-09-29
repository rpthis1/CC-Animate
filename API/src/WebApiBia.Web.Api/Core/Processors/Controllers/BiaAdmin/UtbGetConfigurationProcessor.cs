using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml.Linq;
using WebApiBia.Common.Json;
using WebApiBia.Data.Reports.BI;

namespace WebApiBia.Web.Api.Core.Processors.Controllers.BiaAdmin
{
    public class UtbGetConfigurationProcessor : IUtbGetConfigurationProcessor
    {
        private readonly JsonHelper _jsonHelper = new JsonHelper();
        public string Get(string utbEntityId)
        {

            //< Data >
            //   < Configuration configurationType = "Gas" value = "cuft" />
            //   < Configuration configurationType = "Electricity" value = "kWh" />
            //   < Configuration configurationType = "kbtu Electricity" value = "kbtuElectrical" />
            //   < Configuration configurationType = "kbtu Gas" value = "kbtuGas" />   
            //   < Configuration configurationType = "kbtu Total" value = "kbtuTotal" />         
            //   < Configuration configurationType = "importIdentifier" value = "B1" />             
            //   < Configuration configurationType = "importDatesBy" value = "billing period" />
            //</ Data >


            BISIntelligenceSoapClient client = new BISIntelligenceSoapClient();
            string configuration = client.Utb_GetConfiguration(utbEntityId);
            JArray configurationsArray = new JArray();
            XElement xmlEntities = XElement.Parse(configuration);

            foreach (var xNode in xmlEntities.Nodes())
            {
                var xmlConfiguration = (XElement) xNode;
                JObject configurationChild = new JObject();
                configurationChild["id"] = xmlConfiguration.Attribute("configurationType").Value;
                configurationChild["value"] = xmlConfiguration.Attribute("value").Value;
                configurationsArray.Add(configurationChild);
            }

            return _jsonHelper.Serialize(configurationsArray);
        }
    }
}