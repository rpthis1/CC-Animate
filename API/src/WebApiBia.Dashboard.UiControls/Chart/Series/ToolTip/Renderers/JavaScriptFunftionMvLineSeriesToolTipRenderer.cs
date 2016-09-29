using System.Text;
using WebApiBia.Dashboard.UiControls.Functions;

namespace WebApiBia.Dashboard.UiControls.Chart.Series.ToolTip.Renderers
{
    public class JavaScriptFunftionMvLineSeriesToolTipRenderer : JavaScripFunctionAxisRenderer
    {
        public JavaScriptFunftionMvLineSeriesToolTipRenderer()
        {
            GenerateFunctionBoby();
            Parameters = new string[] { "storeItem", "item" };
        }
        private void GenerateFunctionBoby()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("var options, value, html = ''; ");
            sb.Append("options = item.series._chart;");
            sb.Append("options = options.getOptions();");
            sb.Append("value = Ext.util.Format.number(storeItem.get(item.field), options.formattedPrecision );");

            string openDiv =  " html += '<div >'; ";
            string header = "  html += '<div style=\"padding: 40; 10 10 10; text-align: left; font-weight: bold; color:#999999\">' + BIA.Util.getFriendlyMvDayName(storeItem.get('date')) + '</div>';";
            string right = " html += '<div style=\"text-align: left; color:#FFFF00\">' + options.rightAxisSeriesLabel + ': ' + Ext.util.Format.number(storeItem.get('variable'), options.formattedPrecision ) + ' (' + options.rightUnits + ')' + '</div>';";
            string closeDiv = " html += '</div>'; ";
            string html =     " this.setHtml(html);  ";


            sb.Append(openDiv);
            sb.Append(header);
            sb.Append(right);
            sb.Append(closeDiv);
            sb.Append(html);

            Body = sb.ToString();
        }
    }
}