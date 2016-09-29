using System.Text;

namespace WebApiBia.Dashboard.UiControls.Functions
{
    public class JavaScriptFunftionLeftAxesRenderer:JavaScripFunctionAxisRenderer
    {
        public JavaScriptFunftionLeftAxesRenderer()
        {
            GenerateFunctionBoby();
        }
        private void GenerateFunctionBoby()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("var options, par = this.getParent().ownerCt;");
            sb.Append("options = par.getOptions();");
            sb.Append("label = Ext.util.Format.number(label, options.formattedPrecision); ");
      

            sb.Append("if( options.mode.toLowerCase() === 'energy')");
            sb.Append("{");
            sb.Append("   return label  + ' ' + par.getOptions().leftUnits ;");
            sb.Append("}");
            sb.Append("else if( options.mode.toLowerCase() === 'financial')");
            sb.Append("{");
            sb.Append("   return '$' + label ;");
            sb.Append("}");
            
            Body = sb.ToString();

        }
    }
}