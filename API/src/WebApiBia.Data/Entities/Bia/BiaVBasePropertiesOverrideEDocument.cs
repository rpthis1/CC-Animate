using Newtonsoft.Json;

namespace WebApiBia.Data.Entities.Bia
{
    public class BiaVBasePropertiesOverrideEDocument : BiaVReportPropertyOverrideEDocument
    {
        [JsonProperty(PropertyName = "content")]
        public BiaVBaseProperties Content { get; set; }

        public override string Serialize()
        {
            Content.Type = null;
            Content.Version = null;
            return base.Serialize();
        }

    }
}