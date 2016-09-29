using System.Reflection;
using System.Web.Http.Filters;
using log4net;

namespace WebApiBia.Web.Api.Exceptions
{
    public class ExceptionHandlingAttribute : ExceptionFilterAttribute
    {
        private readonly ILog logger = LogManager.GetLogger(MethodBase.GetCurrentMethod().DeclaringType);
        public override void OnException(HttpActionExecutedContext context)
        {
            logger.Error(context.Exception.ToString());
        }
    }
}