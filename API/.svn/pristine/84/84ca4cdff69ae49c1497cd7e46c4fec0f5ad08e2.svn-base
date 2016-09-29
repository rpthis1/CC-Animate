using Newtonsoft.Json;

namespace WebApiBia.Data.Entities.Bia
{
    public class BiaVReportPropertyParametersOverrideEDocument : BiaVReportPropertyOverrideEDocument
    {
        [JsonProperty(PropertyName = "content")]
        public BiaVReportPropertyParameters Content { get; set; }

        public override string Serialize()
        {
            Content.Type = null;
            Content.Version = null;
            return base.Serialize();
        }

    }
}