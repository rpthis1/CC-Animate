using Newtonsoft.Json.Linq;

namespace WebApiBia.Dashboard.UiControls.Chart.Background
{
    public class ImageBackground
    {
        public dynamic Generate()
        {
            JObject obj = new JObject();
            obj["type"] = "image";
            obj["src"] = "resources/images/charts/darkBack.png";
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
