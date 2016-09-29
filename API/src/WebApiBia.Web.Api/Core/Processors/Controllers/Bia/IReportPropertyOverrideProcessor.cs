namespace WebApiBia.Web.Api.Core.Processors.Controllers.Bia
{
    public interface IReportPropertyOverrideProcessor
    {
        string Get(object p);
        string Post(object p, object o);
        string Put(object p, object o);
    }
}