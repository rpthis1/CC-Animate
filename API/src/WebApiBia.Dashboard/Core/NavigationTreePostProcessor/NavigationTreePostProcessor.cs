using Newtonsoft.Json.Linq;
using WebApiBia.Common.Json;
using WebApiBia.Data.Entities.Bia;
using WebApiBia.Data.Mapper;

namespace WebApiBia.Dashboard.Core.NavigationTreePostProcessor
{
    public class NavigationTreePostProcessor : INavigationTreePostProcessor
    {
        private ResultList results = new ResultList();
        private JsonHelper json = new JsonHelper();
        private readonly AutoMapper _mapper = new AutoMapper();
        public string Process(string data, bool onlyLeafs)
        {
            dynamic obj = JObject.Parse(data);
            dynamic resultArray = obj["result"];


            JArray resultArrayCheck = (JArray)resultArray;

            if (resultArrayCheck.Count > 0)
            {

                resultArray = resultArray[0];
                JArray a = resultArray.value;

                foreach (JObject o in a.Children<JObject>())
                {
                    foreach (JProperty p in o.Properties())
                    {
                        string name = p.Name;
                        string value = p.Value.ToString();

                        if (name.Equals("@class"))
                        {
                            BiaVBase node = _mapper.VertexMap(o, value);

                            if (onlyLeafs)
                            {
                                node.Leaf = "true";
                            }

                            results.Result.Add(node);
                        }

                    }
                }
            }
            return json.Serialize(results);
        }
    }
}