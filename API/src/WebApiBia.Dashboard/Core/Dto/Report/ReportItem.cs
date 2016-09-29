using Newtonsoft.Json;

namespace WebApiBia.Dashboard.Core.Dto.Report
{
    public class ReportItem
    {
          [JsonProperty(PropertyName = "label")]
        public string Label { get; set; }
          [JsonProperty(PropertyName = "reportId")]
        public string ReportId { get; set; }
          [JsonProperty(PropertyName = "model")]
        public string Model { get; set; }
          [JsonProperty(PropertyName = "behavior")]
        public string Behavior { get; set; }
          [JsonProperty(PropertyName = "store")]
        public string Store { get; set; }
          [JsonProperty(PropertyName = "parentEntities")]
        public string ParentEntities { get; set; }
          [JsonProperty(PropertyName = "gradient1")]
        public string Gradient1 { get; set; }
          [JsonProperty(PropertyName = "gradient2")]
        public string Gradient2 { get; set; }
          [JsonProperty(PropertyName = "gradient3")]
        public string Gradient3 { get; set; }


        // actual data reports //
          [JsonProperty(PropertyName = "leftGradient1")]
        public string LeftGradient1 { get; set; }
          [JsonProperty(PropertyName = "leftGradient2")]
        public string LeftGradient2 { get; set; }
          [JsonProperty(PropertyName = "leftGradient3")]
        public string LeftGradient3 { get; set; }
          [JsonProperty(PropertyName = "rightGradient1")]
        public string RightGradient1 { get; set; }
          [JsonProperty(PropertyName = "rightGradient2")]
        public string RightGradient2 { get; set; }
          [JsonProperty(PropertyName = "rightGradient3")]
        public string RightGradient3 { get; set; }
          [JsonProperty(PropertyName = "labelAppend")]
        public string LabelAppend { get; set; }
          [JsonProperty(PropertyName = "ddaxis")]
        public string Ddaxis { get; set; }
          [JsonProperty(PropertyName = "yearsBack")]
        public string YearsBack { get; set; }
          [JsonProperty(PropertyName = "yearSelectionLabel")]
        public string YearSelectionLabel { get; set; }
          [JsonProperty(PropertyName = "legendLabel")]
        public string LegendLabel { get; set; }
          [JsonProperty(PropertyName = "image")]
        public string Image { get; set; }
    }
}