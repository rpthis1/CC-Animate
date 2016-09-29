using System.Text;
using WebApiBia.Dashboard.UiControls.Functions;

namespace WebApiBia.Dashboard.UiControls.Chart.Axes.Renderers
{
    public class JavaScriptFunftionLeftAxesYearlyDeltaRenderer:JavaScripFunctionAxisRenderer
    {
        public JavaScriptFunftionLeftAxesYearlyDeltaRenderer()
        {
            GenerateFunctionBoby();
        }
        private void GenerateFunctionBoby()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("var options, par = this.getParent().ownerCt;");
            sb.Append("options = par.getOptions();");
            sb.Append("label = Ext.util.Format.number(label, options.formattedPrecision); ");
            sb.Append("return label  + ' ' + par.getOptions().leftUnitsFixed ");

            
            Body = sb.ToString();

        }
    }
}