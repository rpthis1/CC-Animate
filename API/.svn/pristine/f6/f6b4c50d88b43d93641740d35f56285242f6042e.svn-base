using Newtonsoft.Json.Linq;

namespace WebApiBia.Dashboard.UiControls.Chart.Series.Marker
{
    public class LineSeriesMarkerJobject
    {
       public JObject Generate()
        {
            JObject marker = new JObject();
            marker["opacity"] = 0;
            marker["scaling"] = 0.01;

            JObject fxo = new JObject();
            fxo["duration"] = 200;
            fxo["easing"] = "easeOut";

            marker["fx"] = fxo;

            return marker;

           /*
            * marker: {
                opacity: 0,
                scaling: 0.01,
                fx: {
                    duration: 200,
                    easing: 'easeOut'
                     }
                 }
            * 
            */

        }
    }
}
