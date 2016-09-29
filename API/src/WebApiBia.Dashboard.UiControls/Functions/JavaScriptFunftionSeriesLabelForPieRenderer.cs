using System.Text;

namespace WebApiBia.Dashboard.UiControls.Functions
{
    public class JavaScriptFunftionSeriesLabelForPieRenderer : JavaScripFunctionSeriesLabelRenderer
    {
        public JavaScriptFunftionSeriesLabelForPieRenderer()
        {
            GenerateFunctionBoby();
        }
        private void GenerateFunctionBoby()
        {
            StringBuilder sb = new StringBuilder();

            sb.Append("var label, percent, current, total = 0, record, options, par = this.getParent().ownerCt;");
            sb.Append("options = par.getOptions();");
            sb.Append("record = rendererData.store.getAt(index);");
            sb.Append("current = record.get('data');  ");
            sb.Append("label = record.get('data');  ");
            sb.Append("label = Ext.util.Format.number(label, options.formattedPrecision); ");
            sb.Append("if( options.mode.toLowerCase() === 'energy')");
            sb.Append("{");
            sb.Append("   label = label  + ' ' + par.getOptions().leftUnits ;");
            sb.Append("}");
            sb.Append("else if( options.mode.toLowerCase() === 'financial')");
            sb.Append("{");
            sb.Append("   label = '$' + label ;");
            sb.Append("}");

            sb.Append(" label = text + '\\n' + label ;");



            sb.Append("for ( var i = 0, len = rendererData.store.count(); i< len; i++ )" );
            sb.Append("{");
            sb.Append(" total += Number( Ext.util.Format.number(rendererData.store.getAt(i).get('data'), '0.0000')); ");
            sb.Append("}");
            sb.Append("percent = current/total;");
            sb.Append("percent = percent * 100;");
            sb.Append("percent = Ext.util.Format.number(percent, '0,0000');");
            sb.Append("percent = percent + '%';");


            sb.Append(" label = label + '\\n' + percent ;");

            sb.Append("   return label ;");
            

            
            Body = sb.ToString();

        }
    }
}