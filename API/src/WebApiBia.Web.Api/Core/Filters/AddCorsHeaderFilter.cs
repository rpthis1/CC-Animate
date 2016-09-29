using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Http.Filters;

namespace WebApiBia.Web.Api.Core.Filters
{
    public class AddCorsHeaderFilter: ActionFilterAttribute
    {
        public override void OnActionExecuted(HttpActionExecutedContext actionExecutedContext)
        {
       
            string devMode = ConfigurationManager.AppSettings["devMode"];
            if (devMode != null && devMode.ToUpper().Equals("TRUE"))
            {
                actionExecutedContext.Response.Headers.Remove("Access-Control-Allow-Origin");
                actionExecutedContext.Response.Headers.Add("Access-Control-Allow-Origin", "*");
            }
        }
    }
}