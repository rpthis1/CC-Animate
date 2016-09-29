using System;
using System.Xml.Linq;
using Newtonsoft.Json.Linq;
using WebApiBia.Common.Json;
using WebApiBia.Data.Reports.BI;

namespace WebApiBia.Web.Api.Core.Processors.Controllers.BiaAdmin
{
    class UtbEntriesProcessor : IUtbEntriesProcessor
    {
        private readonly JsonHelper _jsonHelper = new JsonHelper();
        public string Get(string utbEntityId, string entityValueType)
        {


  //< Data >
  //     < UtilityBill startDate = "7/15/2015" endDate = "8/14/2015" value = "1200" />
  //     < UtilityBill startDate = "8/15/2015" endDate = "9/14/2015" value = "2000" />
  //     < UtilityBill startDate = "9/15/2015" endDate = "10/14/2015" value = "3000" />      
  //     < UtilityBill startDate = "10/15/2015" endDate = "11/14/2015" value = "4000" />           
  //     < UtilityBill startDate = "11/15/2015" endDate = "12/14/2015" value = "5000" />                
  //     < UtilityBill startDate = "12/15/2015" endDate = "1/14/2016" value = "6000" />                     
  //     < UtilityBill startDate = "1/15/2016" endDate = "2/14/2016" value = "7000" />                          
  //     < UtilityBill startDate = "2/15/2016" endDate = "3/14/2016" value = "8000" />
  // </ Data >


            BISIntelligenceSoapClient client = new BISIntelligenceSoapClient();
            string entries = client.Utb_GetEntries(utbEntityId,entityValueType);
            JArray entriesArray = new JArray();
            XElement xmlEntries = XElement.Parse(entries);

            foreach (var xNode in xmlEntries.Nodes())
            {
                var xmlConfiguration = (XElement)xNode;
                JObject configurationChild = new JObject
                {
                    ["startDate"] = xmlConfiguration.Attribute("startDate").Value,
                    ["endDate"] = xmlConfiguration.Attribute("endDate").Value,
                    ["value"] = xmlConfiguration.Attribute("value").Value
                };
                entriesArray.Add(configurationChild);
            }

            return _jsonHelper.Serialize(entriesArray);

        }

        public string Put(object p)
        {
            JObject jo = JObject.FromObject(p);
            BISIntelligenceSoapClient client = new BISIntelligenceSoapClient();
            string result = client.Utb_UpdateEntry(jo["utbEntityId"].ToString(), jo["type"].ToString(), jo["oldStartDate"].ToString(), jo["oldEndDate"].ToString(), jo["newStartDate"].ToString(), jo["newEndDate"].ToString(), jo["value"].ToString());
            return result;

        }

        public string Post(object p)
        {
            JObject jo = JObject.FromObject(p);
            BISIntelligenceSoapClient client = new BISIntelligenceSoapClient();
            string result = client.Utb_AddEntry(jo["utbEntityId"].ToString(), jo["type"].ToString(), jo["startDate"].ToString(), jo["endDate"].ToString(), jo["value"].ToString());
            return result;
        }

        public string Delete(object p)
        {
            JObject jo = JObject.FromObject(p);
            BISIntelligenceSoapClient client = new BISIntelligenceSoapClient();
            string result = client.Utb_DeleteEntry(jo["utbEntityId"].ToString(), jo["type"].ToString(), jo["startDate"].ToString(), jo["endDate"].ToString());
            return result;
        }
    }
}