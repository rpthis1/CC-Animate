using Newtonsoft.Json;

namespace WebApiBia.Data.Entities.Bia
{
    public class BiaVReportPropertyDatesOverrideEDocument : BiaVReportPropertyOverrideEDocument
    {
        [JsonProperty(PropertyName = "content")]
        public BiaVReportPropertyDates Content { get; set; }

        public override string Serialize()
        {
            Content.Type = null;
            Content.Version = null;
            return base.Serialize();
        }

    }
}