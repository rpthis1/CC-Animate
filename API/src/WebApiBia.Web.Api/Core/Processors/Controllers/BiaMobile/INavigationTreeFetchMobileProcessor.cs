namespace WebApiBia.Web.Api.Core.Processors.Controllers.BiaMobile
{
    public interface INavigationTreeFetchMobileProcessor
    {
        string Get(object p, bool includeOnlyEnabled);
    }
}