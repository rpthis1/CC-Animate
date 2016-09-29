using Newtonsoft.Json;

namespace WebApiBia.Data.Entities.Bia
{
    public class BiaVReportPropertyParameterDecoratorsOverrideEDocument : BiaVReportPropertyOverrideEDocument
    {
        [JsonProperty(PropertyName = "content")]
        public BiaVReportPropertyParameterDecorators Content { get; set; }

        public override string Serialize()
        {
            Content.Type = null;
            Content.Version = null;
            return base.Serialize();
        }

    }
}