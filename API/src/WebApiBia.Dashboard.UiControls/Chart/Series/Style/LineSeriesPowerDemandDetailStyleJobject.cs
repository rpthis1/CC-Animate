using Newtonsoft.Json.Linq;

namespace WebApiBia.Dashboard.UiControls.Chart.Series.Style
{
    public class LineSeriesPowerDemandDetailStyleJobject
    {
       public JObject Generate()
        {
            JObject obj = new JObject();
           obj["lineWidth"] = 4;
            return obj;

            /*
            *  style: {
            *  -- opacity: 0.5 --
            *  lineWidth: 4
            * 
            */

        }
    }
}
