using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web.Script.Serialization;
using Newtonsoft.Json;
using WebApiBia.Data.Entities.Bia;

namespace WebApiBia.Data.Mapper
{
    public class AutoMapper
    {
        public Object Map(dynamic clientObject, string cls)
        {
            switch (cls)
            {
                case "BiaVReportPropertyString":
                    return clientObject.ToObject<BiaVReportPropertyString>();
                case "BiaVReportPropertyDates":
                    return clientObject.ToObject<BiaVReportPropertyDates>();
                case "BiaVReportPropertyParameters":
                    return clientObject.ToObject<BiaVReportPropertyParameters>();
                case "BiaVBaseProperties":
                    return clientObject.ToObject<BiaVBaseProperties>();
                case "BiaVReportPropertyParameterDecorators":
                    return clientObject.ToObject<BiaVReportPropertyParameterDecorators>();
                case "BiaVReportPropertyGradients":
                    return clientObject.ToObject<BiaVReportPropertyGradients>();



                case "BiaVReportPropertyStringOverrideEDocument":
                    return clientObject.ToObject<BiaVReportPropertyStringOverrideEDocument>();
                case "BiaVReportPropertyParametersOverrideEDocument":
                    return clientObject.ToObject<BiaVReportPropertyParametersOverrideEDocument>();
                case "BiaVReportPropertyDatesOverrideEDocument":
                    return clientObject.ToObject<BiaVReportPropertyDatesOverrideEDocument>();
                case "BiaVReportPropertyParameterDecoratorsOverrideEDocument":
                    return clientObject.ToObject<BiaVReportPropertyParameterDecoratorsOverrideEDocument>();
                case "BiaVBasePropertiesOverrideEDocument":
                    return clientObject.ToObject<BiaVBasePropertiesOverrideEDocument>();
                case "BiaVReportPropertyGradientsOverrideEDocument":
                    return clientObject.ToObject<BiaVReportPropertyGradientsOverrideEDocument>();

            }

            return null;
        }

        public BiaVBase VertexMap(dynamic clientObject, string cls)
        {
            switch (cls)
            {
                case "BiaVTreeNode":
                    return clientObject.ToObject<BiaVBasePropertiesNavTreeNodeVertex>();
                case "BiaVReportPropertyString":
                    return clientObject.ToObject<BiaVReportPropertyStringVertex>();
                case "BiaVReportPropertyParameters":
                    return clientObject.ToObject<BiaVReportPropertyParametersVertex>();
                case "BiaVReportPropertyParameterDecorators":
                    return clientObject.ToObject<BiaVReportPropertyParameterDecoratorsVertex>();
                case "BiaVReportPropertyDates":
                    return clientObject.ToObject<BiaVReportPropertyDatesVertex>();
                case "BiaVReportPropertyMVDates":
                    return clientObject.ToObject<BiaVReportPropertyDatesVertex>();
                case "BiaVReportPropertyGradients":
                    return clientObject.ToObject<BiaVReportPropertyGradientsVertex>();


                    

                case "BiaVTemplate":
                return clientObject.ToObject<BiaVBasePropertiesVertex>();
                case "BiaVReport":
                return clientObject.ToObject<BiaVBasePropertiesVertex>();
                case "BiaVNavTabNavigator":
                return clientObject.ToObject<BiaVBasePropertiesVertex>();
                case "BiaVNavTab":
                return clientObject.ToObject<BiaVBasePropertiesVertex>();
                case "BiaVBasePropertiesVertex":
                return clientObject.ToObject<BiaVBasePropertiesVertex>();
                case "BiaVBaseProperties":
                return clientObject.ToObject<BiaVBasePropertiesVertex>();

            }

            return null;
        }
    }
}
