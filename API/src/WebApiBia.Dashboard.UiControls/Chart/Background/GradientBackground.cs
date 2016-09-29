using Newtonsoft.Json.Linq;

namespace WebApiBia.Dashboard.UiControls.Chart.Background
{
    public class GradientBackground
    {
        public dynamic Generate()
        {
            JObject obj = new JObject();
            obj["type"] = "radial";
            obj["degrees"] = 0;

            JArray stops = new JArray();


            JObject stop1 = new JObject();
            stop1["offset"] = 0;
            stop1["color"] = "#2a2a2a";

            stops.Add(stop1);

            JObject stop2 = new JObject();
            stop2["offset"] = .5;
            stop2["color"] = "#444444";

            stops.Add(stop2);

            JObject stop3 = new JObject();
            stop3["offset"] = 1;
            stop3["color"] = "#2a2a2a";

            stops.Add(stop3);

            


            obj["stops"] = stops;


            return obj;




            /*
             * 
         background: '#ccc'
              }
             * 
             */





            /*
 * 
background: {
    type: 'image',
    src: "resources/images/charts/darkBack.png";
}
  }
 * 
 */





            /*
 * 
background: {
    type: 'linear',
    degrees: 0,
    stops: [
        {
            offset: 0,
            color: 'white'
        },
        {
            offset: 1,
            color: 'blue'
        }
    ]
}
 * 
 */


        }
    }
}
