using System.Text;
using WebApiBia.Dashboard.UiControls.Functions;

namespace WebApiBia.Dashboard.UiControls.Chart.Series.ToolTip.Renderers
{
    public class JavaScriptFunftionPieSeriesToolTipRenderer : JavaScripFunctionAxisRenderer
    {
        public JavaScriptFunftionPieSeriesToolTipRenderer()
        {
            GenerateFunctionBoby();
            Parameters = new string[] { "storeItem", "item" };
        }
        private void GenerateFunctionBoby()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("var options, value;");
            sb.Append("options = item.series._chart;");
            sb.Append("options = options.getOptions();");
            sb.Append("value = Ext.util.Format.number(storeItem.get(item.field), options.formattedPrecision );");
            sb.Append("if( options.mode.toLowerCase() === 'energy')");
            sb.Append("{");
            sb.Append("   this.setHtml(  value + ' ' + options.leftUnits + '  (' + storeItem.get('cat') +')' );");
            sb.Append("}");
            sb.Append("else if( options.mode.toLowerCase() === 'financial')");
            sb.Append("{");
            sb.Append("   this.setHtml( '$' + value  + '  (' + storeItem.get('cat') +')' );");
            sb.Append("}");

            Body = sb.ToString();
        }
    }
}