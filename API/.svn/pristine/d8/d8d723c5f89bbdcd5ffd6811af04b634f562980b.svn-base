using System.Text;

namespace WebApiBia.Dashboard.UiControls.Functions
{
    public class JavaScriptFunftionCategoryAxesRenderer : JavaScripFunctionAxisRenderer
    {
        public JavaScriptFunftionCategoryAxesRenderer()
        {
            GenerateFunctionBoby();
        }
        private void GenerateFunctionBoby()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("var par = this.getParent().getParent();");
            sb.Append("return label  + ' ' + par.getInitialConfig().Options.categoryUnits ");
            Body = sb.ToString();

        }
    }
}