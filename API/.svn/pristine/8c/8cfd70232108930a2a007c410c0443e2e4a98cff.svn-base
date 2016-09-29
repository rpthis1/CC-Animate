using Newtonsoft.Json;

namespace WebApiBia.Data.Entities.Bia
{
    public class BiaVReportPropertyGradientsOverrideEDocument : BiaVReportPropertyOverrideEDocument
    {
        [JsonProperty(PropertyName = "content")]
        public BiaVReportPropertyGradients Content { get; set; }

        public override string Serialize()
        {
            Content.Type = null;
            Content.Version = null;
            return base.Serialize();
        }

    }
}