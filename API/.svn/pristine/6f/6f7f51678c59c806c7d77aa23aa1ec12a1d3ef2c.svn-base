using System.Text;
using WebApiBia.Dashboard.UiControls.Functions;

namespace WebApiBia.Dashboard.UiControls.Chart.Series.Renderers
{
    public class JavaScriptFunftionBarSeriesRenderer : JavaScripFunctionAxisRenderer
    {
        public JavaScriptFunftionBarSeriesRenderer()
        {
            GenerateFunctionBoby();
            Parameters = new string[] { "sprite", "config", "rendererData", "index" };
        }
        private void GenerateFunctionBoby()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("var gradient, gradients;");
            sb.Append("gradients = sprite.getParent().ownerCt.getInitialConfig().gradients;");
            sb.Append("gradient = gradients[ sprite.getField() ];");
            sb.Append("return Ext.apply(config, gradient);");
            Body = sb.ToString();

        }
    }
}