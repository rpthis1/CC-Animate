using Newtonsoft.Json.Linq;

namespace WebApiBia.Dashboard.UiControls.Chart.Interactions
{
    public class ChartBaseInteractionsJobject
    {
       public JArray Generate()
        {

             JArray interactions = new JArray();
            
          
           JObject panzoom = new JObject();
           panzoom["type"] = "panzoom";
           panzoom["enabled"] = false;
           panzoom["zoomOnPanGesture"] = true;
          
           

           JObject panzoomAxes = new JObject();
   
           JObject panzoomAxesLeft = new JObject();
           panzoomAxesLeft["allowPan"] = false;
           panzoomAxesLeft["allowZoom"] = false;

          
           JObject panzoomAxesBottom = new JObject();
           panzoomAxesBottom["allowPan"] = true;
           panzoomAxesBottom["allowZoom"] = true;
           
           
           panzoomAxes["left"] = panzoomAxesLeft;
           panzoomAxes["bottom"] = panzoomAxesBottom;
           panzoom["axes"] = panzoomAxes;


           JObject crosshair = new JObject();
           crosshair["type"] = "crosshair";
           crosshair["enabled"] = false;

           JObject crosshairAxes = new JObject();
 
           JObject crosshairAxesLabel = new JObject();
           crosshairAxesLabel["fillStyle"] = "white";


   
           JObject crosshairAxesRect = new JObject();
           crosshairAxesRect["fillStyle"] = "#344459";
           crosshairAxesRect["opacity"] = 0.7;
           crosshairAxesRect["radius"] = 5;

           crosshairAxes["rect"] = crosshairAxesRect;
           crosshairAxes["label"] = crosshairAxesLabel;
           crosshair["axes"] = crosshairAxes;

           interactions.Add(panzoom);
           interactions.Add(crosshair);
            return interactions;

            /*
             * 
             *      interactions: [
              {
                  type: 'panzoom',
                  enabled: false,
                  zoomOnPanGesture: false,
                  axes: {
                      left: {
                          allowPan: false,
                          allowZoom: false
                      },
                      bottom: {
                          allowPan: true,
                          allowZoom: true
                      }
                  }
              },
              {
                  type: 'crosshair',
                  axes: {
                      label: {
                          fillStyle: 'white'
                      },
                      rect: {
                          fillStyle: '#344459',
                          opacity: 0.7,
                          radius: 5
                      }
                  }
              }
         ]
             * 
             */

        }
    }
}
