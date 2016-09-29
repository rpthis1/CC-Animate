using System.Text;
using WebApiBia.Dashboard.UiControls.Functions;

namespace WebApiBia.Dashboard.UiControls.Chart.Series.ToolTip.Renderers
{
    public class JavaScriptFunftionRightSeriesToolTipRenderer : JavaScripFunctionAxisRenderer
    {
        public JavaScriptFunftionRightSeriesToolTipRenderer()
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
            sb.Append("value = Ext.util.Format.number(storeItem.get(item.field), options.formattedSecondarySeriesPrecision );");
            sb.Append("this.setHtml(item.field + ':  ' + value + ' ' + options.secondarySeriesUnits);");
            Body = sb.ToString();
        }
    }
}