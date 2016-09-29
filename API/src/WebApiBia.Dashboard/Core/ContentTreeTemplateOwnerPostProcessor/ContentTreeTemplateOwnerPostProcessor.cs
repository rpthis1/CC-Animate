using log4net.Util;
using Newtonsoft.Json.Linq;
using WebApiBia.Common.Json;
using WebApiBia.Data.Entities.Bia;
using WebApiBia.Data.Mapper;
using WebApiBia.Web.Models.DataMapper;

namespace WebApiBia.Dashboard.Core.ContentTreeTemplateOwnerPostProcessor
{
    public class ContentTreeTemplateOwnerPostProcessor : IContentTreeTemplateOwnerPostProcessor
    {
        private ResultList results = new ResultList();
        private JsonHelper json = new JsonHelper();
        private readonly AutoMapper _mapper = new AutoMapper();
        public string Process(string data, bool onlyLeafs, object vertexProperties)
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
                            dynamic node = _mapper.VertexMap(o, value);

                            node.HasTemplateOwner= HasValidClusterAndRecord(vertexProperties);
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

        private bool HasValidClusterAndRecord(object vertex)
        {
            VertexParentPropertiesModel vertexParent = (VertexParentPropertiesModel)vertex;

            if (vertexParent.ClusterOwner == -1 && vertexParent.RecordOwner == -1)
            {
                return false;
            }
            return true;
        }
    }
}