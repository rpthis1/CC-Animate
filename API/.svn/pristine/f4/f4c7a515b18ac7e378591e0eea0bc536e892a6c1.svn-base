using System.Text;
using WebApiBia.Dashboard.UiControls.Functions;

namespace WebApiBia.Dashboard.UiControls.Chart.Series.ToolTip.Renderers
{
    public class JavaScriptFunftionPowerDemandToolTipRenderer : JavaScripFunctionAxisRenderer
    {
        public JavaScriptFunftionPowerDemandToolTipRenderer()
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

            string openDiv = "  html += '<div >'; ";
            string header = "   html += '<div style=\"padding: 40 10 10 10;text-align: left; font-weight: bold; color:#999999\">'  + storeItem.get('cat')  + '</div>';";
            string left = "     html += '<div style=\"text-align: left; font-weight: bold \">' +  item.field + ':  ' + value + ' ' + options.leftUnits +  '</div>'  ;";

            string ifStatment = "if( item.field === 'Max Demand' )";
            string ifOpen = "{";
            string ifBody = "     html += '<div style=\"text-align: left; font-weight: bold \"> Recorder:  ' + storeItem.get('Max Demand Recorded') + '</div>'  ;";
            string ifClose = "}";

            string ifStatmentMin = "if( item.field === 'Min Demand' )";
            string ifOpenMin = "{";
            string ifBodyMin = "     html += '<div style=\"text-align: left; font-weight: bold \"> Recorder:  ' + storeItem.get('Min Demand Recorded') + '</div>'  ;";
            string ifCloseMin = "}";


            string closeDiv = " html += '</div>'; ";
            string html = " this.setHtml(html);  ";


            sb.Append(openDiv);
            sb.Append(header);
            sb.Append(left);


            sb.Append(ifStatment);
            sb.Append(ifOpen);
            sb.Append(ifBody);
            sb.Append(ifClose);


            sb.Append(ifStatmentMin);
            sb.Append(ifOpenMin);
            sb.Append(ifBodyMin);
            sb.Append(ifCloseMin);

            sb.Append(closeDiv);
            sb.Append(html);

            Body = sb.ToString();
        }
    }
}