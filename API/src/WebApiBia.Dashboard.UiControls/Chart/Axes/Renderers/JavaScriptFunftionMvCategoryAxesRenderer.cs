using System.Text;
using WebApiBia.Dashboard.UiControls.Functions;

namespace WebApiBia.Dashboard.UiControls.Chart.Axes.Renderers
{
    public class JavaScriptFunftionMvCategoryAxesRenderer:JavaScripFunctionAxisRenderer
    {
        public JavaScriptFunftionMvCategoryAxesRenderer()
        {
            GenerateFunctionBoby();
        }
        private void GenerateFunctionBoby()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("var options, par = this.getParent().ownerCt;");
            sb.Append("options = par.getOptions();");
            sb.Append("label = BIA.Util.getFriendlyMvMonthName(label); ");
            sb.Append("return label; ");

            
            Body = sb.ToString();

        }
    }
}