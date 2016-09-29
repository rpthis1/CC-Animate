using Newtonsoft.Json.Linq;

namespace WebApiBia.Dashboard.UiControls.Chart.Series.Style
{
    public class LineSeriesStyleJobject
    {
       public JObject Generate()
        {
            JObject obj = new JObject();
           obj["lineWidth"] = 2;
           obj["opacity"] = 0.8;
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
