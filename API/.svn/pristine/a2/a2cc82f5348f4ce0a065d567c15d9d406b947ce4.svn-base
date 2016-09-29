using System.Text;
using WebApiBia.Dashboard.UiControls.Functions;

namespace WebApiBia.Dashboard.UiControls.Chart.Series.ToolTip.Renderers
{
    public class JavaScriptFunftionMvBarSeriesToolTipRenderer : JavaScripFunctionAxisRenderer
    {
        public JavaScriptFunftionMvBarSeriesToolTipRenderer()
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
            string header = "   html += '<div style=\"padding: 40 10 10 10;text-align: left; font-weight: bold; color:#999999\">' + BIA.Util.getFriendlyMvMonthName(storeItem.get('cat')) + '</div>';";
            string left = "     html += '<div style=\"text-align: left; font-weight: bold; color: ' + options.leftAxisLeftSeriesColor + ' \">' + options.leftAxisLeftSeriesLabel + ': ' + Ext.util.Format.number(storeItem.get('left'), options.formattedPrecision ) + ' (' + options.leftUnits + ')' + '</div>';";
            string right = "    html += '<div style=\"text-align: left; font-weight: bold; color:' + options.leftAxisRightSeriesColor + ' \">' + options.leftAxisRightSeriesLabel + ': ' + Ext.util.Format.number(storeItem.get('right'), options.formattedPrecision ) + ' (' + options.leftUnits + ')' + '</div>';";
           
            string ifStatment = "if( options.hasOwnProperty('hasMeteredData')  &&  options.hasMeteredData === true)";
            string ifOpen = "{";
            string ifBody = "    html += '<div style=\"text-align: left; color:' + options.meteredDataColor + ' \">' + options.meteredEntityName + ' ' + options.meteredAppendLabel + ': ' + Ext.util.Format.number(storeItem.get('metered'), options.meteredDataPrecisionFormatted ) + ' (' + options.meteredDataUnits + ')' + '</div>';";
            string ifClose = "}";



            string closeDiv = " html += '</div>'; ";
            string html =     " this.setHtml(html);  ";


            sb.Append(openDiv);
            sb.Append(header);
            sb.Append(left);
            sb.Append(right);
            sb.Append(ifStatment);
            sb.Append(ifOpen);
            sb.Append(ifBody);
            sb.Append(ifClose);
            sb.Append(closeDiv);
            sb.Append(html);

            Body = sb.ToString();
        }
    }
}