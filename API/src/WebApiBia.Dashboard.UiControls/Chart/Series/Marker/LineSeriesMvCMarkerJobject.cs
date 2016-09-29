using Newtonsoft.Json.Linq;

namespace WebApiBia.Dashboard.UiControls.Chart.Series.Marker
{
    public class LineSeriesMvCMarkerJobject
    {
       public JObject Generate()
        {
            JObject marker = new JObject();
            marker["radius"] = 1;
            marker["color"] = "#FFFF00";
            marker["stroke"] = "FFFF00";


            return marker;

            /*
             *
         marker : {
             radius : 1,
             color : "#FFFF00",
             stroke : "#FFFF00"
         }
             * 
             */

        }
    }
}
