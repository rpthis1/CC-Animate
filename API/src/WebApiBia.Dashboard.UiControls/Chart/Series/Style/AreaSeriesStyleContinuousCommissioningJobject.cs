using Newtonsoft.Json.Linq;

namespace WebApiBia.Dashboard.UiControls.Chart.Series.Style
{
    public class AreaSeriesStyleContinuousCommissioningJobject
    {
       public JObject Generate()
        {
            JObject obj = new JObject();


            obj["opacity"] = .5;
            obj["stroke"] = "#60D11B";
            obj["stroke-width"] = 3;


      

            return obj;

            /*
            * style: {
                opacity: 0.5,
             * stroke: "#A52A2A",
             * stroke-width: 2
             * 
            * 
            */

        }
    }
}
