using System.Text;
using WebApiBia.Dashboard.UiControls.Functions;

namespace WebApiBia.Dashboard.UiControls.Chart.Axes.Renderers
{
    public class JavaScriptFunftionDemandDetailRightAxesRenderer:JavaScripFunctionAxisRenderer
    {
        public JavaScriptFunftionDemandDetailRightAxesRenderer()
        {
            GenerateFunctionBoby();
        }
        private void GenerateFunctionBoby()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("var temp;");
            sb.Append("temp = Ext.util.Format.number(label, '0.'); ");
            sb.Append("return temp  + ' ' + '°F' ");

            
            Body = sb.ToString();

        }
    }
}