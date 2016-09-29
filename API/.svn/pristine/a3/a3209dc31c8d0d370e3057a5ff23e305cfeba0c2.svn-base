using System.Text;
using WebApiBia.Dashboard.UiControls.Functions;

namespace WebApiBia.Dashboard.UiControls.Chart.Series.Renderers
{
    public class JavaScriptFunftionBarSeriesYearsColorCodedRenderer : JavaScripFunctionAxisRenderer
    {
        public JavaScriptFunftionBarSeriesYearsColorCodedRenderer()
        {
            GenerateFunctionBoby();
            Parameters = new string[] { "sprite", "config", "rendererData", "index" };
        }
        private void GenerateFunctionBoby()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("var gradient, gradients,record,cat,date,year;");
           
            sb.Append("record = rendererData.store.getAt(index);");
            sb.Append("if (record !== undefined && record !== null) {");
            sb.Append("cat  = record.get('cat');");
            sb.Append("date = new Date(cat);");
            sb.Append("year = date.getFullYear();");
            sb.Append("gradients = sprite.getParent().ownerCt.getInitialConfig().gradients;");
            sb.Append("gradient = gradients[ year.toString() ];");
            sb.Append("return Ext.apply(config, gradient);");
            sb.Append("}");
            Body = sb.ToString();

        }
    }
}