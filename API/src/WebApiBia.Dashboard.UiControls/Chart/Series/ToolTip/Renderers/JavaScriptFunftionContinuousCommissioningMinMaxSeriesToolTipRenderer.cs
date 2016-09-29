using System.Text;
using WebApiBia.Dashboard.UiControls.Functions;

namespace WebApiBia.Dashboard.UiControls.Chart.Series.ToolTip.Renderers
{
    public class JavaScriptFunftionContinuousCommissioningMinMaxSeriesToolTipRenderer : JavaScripFunctionAxisRenderer
    {
        public JavaScriptFunftionContinuousCommissioningMinMaxSeriesToolTipRenderer()
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

            string openDiv = " html += '<div >'; ";
            string header = "   html += '<div style=\"padding: 40 10 10 10;text-align: left; font-weight: bold; color:#999999\"> Projected Usage:</div>';";
            string left = "     html += '<div style=\"text-align: left; color: #3D8737; font-weight: bold \"> Maximum' + ': ' + Ext.util.Format.number(storeItem.get('Maximum'), options.formattedPrecision ) + ' (' + options.leftUnits + ')' + '</div>';";
            string right = "    html += '<div style=\"text-align: left; color: #94A56B; font-weight: bold  \"> Minimum' + ': ' + Ext.util.Format.number(storeItem.get('Minimum'), options.formattedPrecision ) + ' (' + options.leftUnits + ')' + '</div>';";
            string hour = "   html += '<div style=\"padding: 40 10 10 10;text-align: left; font-weight: bold; color:#999999\"> ' +    '  ( Hour ' + storeItem.get('cat') +' )'       + '</div>';";

            string closeDiv = " html += '</div>'; ";
            string html = " this.setHtml(html);  ";


            sb.Append(openDiv);
            sb.Append(header);
            sb.Append(left);
            sb.Append(right);
            sb.Append(hour);
            sb.Append(closeDiv);
            sb.Append(html);


            Body = sb.ToString();
        }
    }
}