namespace WebApiBia.Web.Api.Core.Processors.Controllers.Bia
{
    public interface IContentTreeTemplateOwnerProcessor
    {
        string Get(object p, bool onlyLeafs);

    }
}