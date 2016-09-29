using System.Text;
using WebApiBia.Dashboard.UiControls.Functions;

namespace WebApiBia.Dashboard.UiControls.Chart.Series.ToolTip.Renderers
{
    public class JavaScriptFunftionLineSeriesDemandDetailToolTipRenderer : JavaScripFunctionAxisRenderer
    {
        public JavaScriptFunftionLineSeriesDemandDetailToolTipRenderer()
        {
            GenerateFunctionBoby();
            Parameters = new string[] { "storeItem", "item" };
        }
        private void GenerateFunctionBoby()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("var value;");
            sb.Append("value = Ext.util.Format.number(storeItem.get(item.field), '0.00' );");
            sb.Append("this.setHtml(item.field + ':  ' + value + ' °F');");
            Body = sb.ToString();
        }
    }
}