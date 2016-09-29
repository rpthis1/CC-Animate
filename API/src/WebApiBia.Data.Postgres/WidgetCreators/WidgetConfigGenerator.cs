using System;
using System.Collections.Generic;
using System.Data.SqlTypes;
using System.Linq;
using System.Text;
using Newtonsoft.Json.Linq;
using WebApiBia.Data.Entities.Bia;

namespace WebApiBia.Data.Postgres.WidgetCreators
{
    class WidgetConfigGenerator
    {
        public JArray GetMultipleEntiesBiaTypeConfig()
        {
            JArray biaTypeConfigs = new JArray();

            JObject regex = new JObject
            {
                ["configName"] = "regex",
                ["configValue"] = "^(([0-9]+)(,(?=[0-9]))?)+$"


            };

            biaTypeConfigs.Add(regex);


            JObject regexText = new JObject
            {
                ["configName"] = "regexText",
                ["configValue"] = "Invalid Entity List"
            };

            biaTypeConfigs.Add(regexText);

            JObject allowBlank = new JObject
            {
                ["configName"] = "allowBlank",
                ["configValue"] = false
            };


            biaTypeConfigs.Add(allowBlank);
            return biaTypeConfigs;
        }


        public JArray GetNumericOnlyBiaTypeConfig()
        {
            JArray biaTypeConfigs = new JArray();

            JObject regex = new JObject
            {
                ["configName"] = "regex",
                ["configValue"] = "^[0-9]+$"
            };

            biaTypeConfigs.Add(regex);


            JObject regexText = new JObject
            {
                ["configName"] = "regexText",
                ["configValue"] = "invalid value"
            };

            biaTypeConfigs.Add(regexText);

            JObject allowBlank = new JObject
            {
                ["configName"] = "allowBlank",
                ["configValue"] = false
            };


            biaTypeConfigs.Add(allowBlank);
            return biaTypeConfigs;
        }

        public JArray GetSingleEntityOnlyBiaTypeConfig()
        {
            JArray biaTypeConfigs = new JArray();

            JObject regex = new JObject
            {
                ["configName"] = "regex",
                ["configValue"] = "^[0-9]+$"
            };

            biaTypeConfigs.Add(regex);


            JObject regexText = new JObject
            {
                ["configName"] = "regexText",
                ["configValue"] = "Only single entity id is allowed"
            };

            biaTypeConfigs.Add(regexText);

            JObject allowBlank = new JObject
            {
                ["configName"] = "allowBlank",
                ["configValue"] = false
            };


            biaTypeConfigs.Add(allowBlank);
            return biaTypeConfigs;
        }


        public BiaVReportPropertyDates GetBiaVReportPropertyDates()
        {
            BiaVReportPropertyDates datesVertexValue = new BiaVReportPropertyDates()
            {
                Items = new List<BiaVReportPropertyDate>()
                {
                    new BiaVReportPropertyDate()
                    {
                        Label = "Last Month",
                        DateType = "lm",
                        Selected = true
                    },
                     new BiaVReportPropertyDate()
                    {
                        Label = "Month To Date",
                        DateType = "mtd",
                        Selected = false
                    },
                     new BiaVReportPropertyDate()
                    {
                        Label = "Custom",
                        DateType = "custom",
                        Selected = false
                    }

                }

            };

            return datesVertexValue;
        }

        public BiaVReportPropertyDates GetBiaVReportPropertyDatesAll()
        {
            BiaVReportPropertyDates datesVertexValue = new BiaVReportPropertyDates()
            {
                Items = new List<BiaVReportPropertyDate>()
                {
                    new BiaVReportPropertyDate()
                    {
                        Label = "All",
                        DateType = "all",
                        Start = "1/1/2010",
                        Selected = true
                    }

                }

            };
            return datesVertexValue;
        }

        public BiaVReportPropertyDates GetBiaVReportPropertyDatesYearlyRange()
        {
            BiaVReportPropertyDates datesVertexValue = new BiaVReportPropertyDates()
            {
                Items = new List<BiaVReportPropertyDate>()
                {
                    new BiaVReportPropertyDate()
                    {
                        Label = "All",
                        DateType = "yearlyRange",
                        Start = "1/1/2010",
                        End = "1/1/2014",
                        Selected = true
                    }

                }

            };
            return datesVertexValue;
        }

        public BiaVReportPropertyDates GetBiaVReportPropertyDatesYearlyRangeAddDisabled()
        {
            BiaVReportPropertyDates datesVertexValue = GetBiaVReportPropertyDatesYearlyRange();
            datesVertexValue.BiaAddEnabled = false;
            return datesVertexValue;
        }

        public BiaVReportPropertyMVDates GetMvCBiaVReportPropertyMvDates()
        {
            BiaVReportPropertyMVDates datesVertexValue = new BiaVReportPropertyMVDates()
            {
                Items = new List<BiaVReportPropertyDate>()
                {
                    new BiaVReportPropertyDate()
                    {
                         Selected = true,
                        Label = "Building Level ECM",
                        DateType = "mvC",
                        BaselineStarDate = "2013-01-01",
                        BaselineEndDate = "2013-12-31",
                        ReportingStarDate = "2014-01-01",
                        ReportingEndDate= "2014-12-31"

                    }
                }

            };

            return datesVertexValue;
        }


        public BiaVBaseProperties GetBaseOptionBiaVBaseProperties()
        {
            BiaVBaseProperties basePropertiesVertexValue = new BiaVBaseProperties()
            {
                Items = new List<BiaVBaseProperty>()
                    {
                        new BiaVBaseProperty()
                        {
                            ItemId = "barChartType",
                            Label = "Chart Type",
                            Value = "Clustered",
                            BiaType = "combobox",
                            BiaStore = "Stacked,Clustered"
                        }
                    }
            };

            return basePropertiesVertexValue;
        }


        public BiaVBaseProperties GetBaseOptionsChartTypeStackedDisabledBiaVBaseProperties()
        {
            BiaVBaseProperties basePropertiesVertexValue = new BiaVBaseProperties()
            {
                BiaEditable = false,
                Items = new List<BiaVBaseProperty>()
                    {
                        new BiaVBaseProperty()
                        {
                            ItemId = "barChartType",
                            Label = "Chart Type",
                            Value = "Stacked",
                            BiaType = "combobox",
                            BiaStore = "Stacked,Clustered",
                            
                        }
                    }
            };

            return basePropertiesVertexValue;
        }


        public BiaVBaseProperties GetMeteredDataReportMvCOptionBiaVBaseProperties()
        {
            BiaVBaseProperties basePropertiesVertexValue = new BiaVBaseProperties()
            {
                Items = new List<BiaVBaseProperty>()
                    {
                        new BiaVBaseProperty()
                        {
                            ItemId = "enabled",
                            Label = "Enabled",
                            Value = "No",
                            BiaType = "combobox",
                            BiaStore = "Yes,No"
                        },
                        new BiaVBaseProperty()
                        {
                            ItemId = "title",
                            Label = "Report Title",
                            Value = "Metered",
                            BiaType = "textfield"
                        },
                          new BiaVBaseProperty()
                        {
                            ItemId = "meteredAppendLabel",
                            Label = "Appended Label",
                            Value = "- Actual",
                            BiaType = "textfield"
                        }
                          ,
                          new BiaVBaseProperty()
                        {
                          ItemId = "meteredEntityId",
                          Value = "",
                          Label = "Metered Entity ID",
                          BiaType = "textfield",
                          BiaTypeConfigs = GetSingleEntityOnlyBiaTypeConfig()
                        }
                            ,
                          new BiaVBaseProperty()
                        {
                          ItemId = "meteredYearStart",
                          Value = "2010",
                          Label = "Metered Year Start",
                          BiaType = "common-dates-yearlyselection-YearlySelection",
                          YearsBack = 25
                        }
                           ,
                          new BiaVBaseProperty()
                        {
                          ItemId = "selectedMeteredYear",
                          Value = "2015",
                          Label = "Selected Metered Year",
                          BiaType = "common-dates-yearlyselection-YearlySelection",
                          YearsBack = 25
                        }   ,
                          new BiaVBaseProperty()
                        {
                          ItemId = "meteredDataColor",
                          Value = "#00A5FF",
                          Label = "Metered Data Color",
                          BiaType = "colorfield"
                        }
                    }
            };

            return basePropertiesVertexValue;
        }

        public BiaVBaseProperties GetMvCOptionBiaVBaseProperties()
        {
            BiaVBaseProperties basePropertiesVertexValue = new BiaVBaseProperties()
            {
                Items = new List<BiaVBaseProperty>()
                    {
                        
                        new BiaVBaseProperty()
                        {
                            ItemId = "rightAxisSeriesLabel",
                            Label = "Right Axis Series Label",
                            Value = "TMY3 Temperature",
                            BiaType = "textfield"
                        },
                         new BiaVBaseProperty()
                        {
                            ItemId = "rightAxisUnits",
                            Label = "Right Axis Units",
                            Value = "F",
                            BiaType = "combobox",
                            BiaStore = "F,HDD,CDD"
                        },
                         
                         new BiaVBaseProperty()
                        {
                            ItemId = "leftAxisUnits",
                            Label = "Left Axis Units",
                            Value = "kWh",
                            BiaType = "combobox",
                            BiaStore = "kWh,Therms,Gal"
                        },
                           new BiaVBaseProperty()
                        {
                            ItemId = "leftAxisRightSeriesColor",
                            Label = "Left Axis Right Series Color",
                            Value = "#997500",
                            BiaType = "colorfield"
                         }
                           ,
                           new BiaVBaseProperty()
                        {
                            ItemId = "leftAxisLeftSeriesColor",
                            Label = "Left Axis Left Series Color",
                            Value = "#CCCCCC",
                            BiaType = "colorfield"
                         }
                           ,
                           new BiaVBaseProperty()
                        {
                            ItemId = "leftAxisLeftSeriesLabel",
                            Label = "Left Axis Left Series Label",
                            Value = "Baseline",
                            BiaType = "textfield"
                        },
                        new BiaVBaseProperty()
                        {
                            ItemId = "leftAxisRightSeriesLabel",
                            Label = "Left Axis Right Series Label",
                            Value = "Reporting",
                            BiaType = "textfield"
                        },
                        new BiaVBaseProperty()
                        {
                            ItemId = "showPDFExport",
                            Label = "Show PDF Export",
                            Value = "No",
                            BiaType = "combobox",
                            BiaStore = "Yes,No"
                        }


                    }
            };

            return basePropertiesVertexValue;
        }

        public BiaVReportPropertyParameters GetMultipleEntityiesWithDepthBiaVReportPropertyParameters()
        {

            BiaVReportPropertyParameters vertexValue = new BiaVReportPropertyParameters()
            {
                Items = new List<BiaVReportPropertyParameter>()
                {
                    new BiaVReportPropertyParameter()
                    {
                        Id = "parentEntities",
                        Value = "",
                        Label = "Parent Entities",
                        BiaType = "textfield",
                        ToolTip = "Enter parent entities comma delimited",
                        BiaTypeConfigs = GetMultipleEntiesBiaTypeConfig()
                    },
                     new BiaVReportPropertyParameter()
                    {
                        Id = "stopDepth",
                        Value = "0",
                        Label = "Stop Depth",
                        BiaType = "textfield",
                        ToolTip = "Enter stop depth",
                        BiaTypeConfigs = GetNumericOnlyBiaTypeConfig()
                    }

                }

            };
            return vertexValue;
        }


        public BiaVReportPropertyParameters GetMultipleEntityiesWithNoDepthBiaVReportPropertyParameters()
        {

            BiaVReportPropertyParameters vertexValue = GetMultipleEntityiesWithDepthBiaVReportPropertyParameters();
            vertexValue.Items[1].BiaEditable = false;

            return vertexValue;
        }

        public BiaVReportPropertyParameters GetLoadDurationBiaVReportPropertyParameters()
        {

            BiaVReportPropertyParameters vertexValue = new BiaVReportPropertyParameters()
            {
                Items = new List<BiaVReportPropertyParameter>()
                {
                    new BiaVReportPropertyParameter()
                    {
                        Id = "parentEntities",
                        Value = "",
                        Label = "Parent Entity",
                        BiaType = "textfield",
                        ToolTip = "Enter parent entity",
                        BiaTypeConfigs = GetSingleEntityOnlyBiaTypeConfig()
                    },
                     new BiaVReportPropertyParameter()
                    {
                        Id = "SampleCount",
                        Value = "100",
                        Label = "Sample Count",
                        BiaType = "textfield",
                        ToolTip = "Enter sample count",
                        BiaTypeConfigs = GetNumericOnlyBiaTypeConfig()
                    },
                       new BiaVReportPropertyParameter()
                    {
                        Id = "stopDepth",
                        Value = "0",
                        Label = "Stop Depth",
                        BiaType = "textfield",
                        ToolTip = "Enter stop depth",
                        BiaEditable = false,
                        BiaTypeConfigs = GetNumericOnlyBiaTypeConfig()
                    }

                }

            };

            return vertexValue;
        }

        public BiaVReportPropertyParameters GetSingleEntityWithNoDepthBiaVReportPropertyParameters()
        {

            BiaVReportPropertyParameters vertexValue = new BiaVReportPropertyParameters()
            {
                Items = new List<BiaVReportPropertyParameter>()
                {
                    new BiaVReportPropertyParameter()
                    {
                        Id = "parentEntities",
                        Value = "",
                        Label = "Parent Entity",
                        BiaType = "textfield",
                        ToolTip = "Enter parent entity",
                        BiaTypeConfigs = GetNumericOnlyBiaTypeConfig()
                    }

                }

            };

            return vertexValue;
        }

        public BiaVReportPropertyParameters GetSingleEntityWithDisabledDepthBiaVReportPropertyParameters()
        {

            BiaVReportPropertyParameters vertexValue = new BiaVReportPropertyParameters()
            {
                Items = new List<BiaVReportPropertyParameter>()
                {
                    new BiaVReportPropertyParameter()
                    {
                        Id = "parentEntities",
                        Value = "",
                        Label = "Parent Entity",
                        BiaType = "textfield",
                        ToolTip = "Enter parent entity",
                        BiaTypeConfigs = GetSingleEntityOnlyBiaTypeConfig()
                    },
                    
                     new BiaVReportPropertyParameter()
                    {
                        Id = "stopDepth",
                        Value = "0",
                        Label = "Stop Depth",
                        BiaType = "textfield",
                        ToolTip = "Enter stop depth",
                        BiaEditable = false,
                        BiaTypeConfigs = GetNumericOnlyBiaTypeConfig()
                    }


                }

            };

            return vertexValue;
        }


        public BiaVReportPropertyParameters GetMvCBiaVReportPropertyParameters()
        {

            BiaVReportPropertyParameters vertexValue = new BiaVReportPropertyParameters()
            {
                Items = new List<BiaVReportPropertyParameter>()
                {
                    new BiaVReportPropertyParameter()
                    {
                        Id = "parentEntities",
                        Value = "",
                        Label = "Parent Entity",
                        BiaType = "textfield",
                        ToolTip = "Enter parent entity",
                        BiaTypeConfigs = GetSingleEntityOnlyBiaTypeConfig()
                    },

                     new BiaVReportPropertyParameter()
                    {
                        Id = "normalization",
                        Value = "HDD_and_CDD",
                        Label = "Normalization",
                        BiaType = "combobox",
                        ToolTip = "elect Normalization Parameter",
                        BiaStore = "CDD,HDD,HDD_and_CDD,Temperature"
                    }


                }

            };

            return vertexValue;
        }

        public BiaVReportPropertyParameters GetContinuousCommissioningBiaVReportPropertyParameters()
        {

            BiaVReportPropertyParameters vertexValue = new BiaVReportPropertyParameters()
            {
                Items = new List<BiaVReportPropertyParameter>()
                {
                    new BiaVReportPropertyParameter()
                    {
                        Id = "location",
                        Value = "",
                        Label = "Location id",
                        BiaType = "textfield",
                        ToolTip = "Enter parent entity",
                        BiaTypeConfigs = GetSingleEntityOnlyBiaTypeConfig()
                    },

                     new BiaVReportPropertyParameter()
                    {
                        Id = "type",
                        Value = "1",
                        Label = "Type id",
                        BiaType = "textfield",
                        ToolTip = "Specify the Building Commissioning type  ID",
                        BiaTypeConfigs = GetNumericOnlyBiaTypeConfig()
                    }
                     ,

                     new BiaVReportPropertyParameter()
                    {
                        Id = "dataRefresh",
                        Value = "900",
                        Label = "Data refresh (seconds)",
                        BiaType = "textfield",
                        ToolTip = "Set in seconds how often should the data refresh",
                        BiaTypeConfigs = GetNumericOnlyBiaTypeConfig()
                    }
                      ,

                     new BiaVReportPropertyParameter()
                    {
                        Id = "showOutsideTemperature",
                        Value = "No",
                        Label = "Show current outside temperature",
                        BiaType = "combobox",
                        ToolTip = "Specify with Yes or No if you wish to display the current outside temperature",
                        BiaStore = "Yes,No"
                    }
                           ,

                     new BiaVReportPropertyParameter()
                    {
                        Id = "showOverage",
                        Value = "Yes",
                        Label = "Show energy overage",
                        BiaType = "combobox",
                        ToolTip = "Displays energy overage",
                        BiaStore = "Yes,No"
                    }      ,

                     new BiaVReportPropertyParameter()
                    {
                        Id = "realTimeDataGranularity",
                        Value = "Minutely",
                        Label = "Granularity for real time data",
                        BiaType = "combobox",
                        ToolTip = "Controls how the actual real time data overlay is grouped",
                        BiaStore = "Minutely,Hourly"
                    }
                      ,
                     new BiaVReportPropertyParameter()
                    {
                        Id = "realTimeDataBehavior",
                        Value = "Average",
                        Label = "Behavior for real time data",
                        BiaType = "combobox",
                        ToolTip = "Controls how the actual real time data is processed",
                        BiaStore = "Average,Totalized,DeTotalized"
                    }      ,

                     new BiaVReportPropertyParameter()
                    {
                        Id = "leftAxisUnits",
                        Value = "kW",
                        Label = "Left axis units",
                        BiaType = "combobox",
                        ToolTip = "Units to be displayed on the left axis",
                        BiaStore = "kW,therms"
                    }
                      ,

                     new BiaVReportPropertyParameter()
                    {
                        Id = "rightAxisUnits",
                        Value = "F",
                        Label = "Right axis units",
                        BiaType = "combobox",
                        ToolTip = "Units to be displayed on the left axis",
                        BiaStore = "F,HDD,CDD"
                    }      ,

                     new BiaVReportPropertyParameter()
                    {
                        Id = "overageUnits",
                        Value = "kWh",
                        Label = "Overage units",
                        BiaType = "combobox",
                        ToolTip = "Units to be displayed on the overage calculation",
                        BiaStore = "kWh,therms"
                    }

                }

            };

            return vertexValue;
        }

        public BiaVReportPropertyParameterDecorators GetConsumptionReportBiaVReportPropertyParameterDecorators()
        {
            BiaVReportPropertyParameterDecorators parameterDecoratorsVertexValue = new BiaVReportPropertyParameterDecorators()
            {
                Items = new List<BiaVReportPropertyParameterDecorator>()
                {
                     GetDefaultGranularityBiaVReportPropertyParameterDecorator()
                     ,
                     GetDefaultNormalizationBiaVReportPropertyParameterDecorator()
                     ,
                     GetDefaultHourFilterBiaVReportPropertyParameterDecorator()
                     ,
                     GetDefaultEntityValueTypeBiaVReportPropertyParameterDecorator()
                     ,
                     GetDefaultDdAxisBiaVReportPropertyParameterDecorator()
                     ,
                     GetDefaultModeBiaVReportPropertyParameterDecorator()
                }

            };

            return parameterDecoratorsVertexValue;
        }

        public BiaVReportPropertyParameterDecorators GetConsumptionReportYearlyDeltaBiaVReportPropertyParameterDecorators()
        {
            BiaVReportPropertyParameterDecorator granularity = GetDefaultGranularityBiaVReportPropertyParameterDecorator();
            granularity.Decorators[2].Selected = false;
            granularity.Decorators[4].Selected = true;
            granularity.Hidden = true;
            granularity.BiaEditable = false;


            BiaVReportPropertyParameterDecorator ddaxis = GetDefaultDdAxisBiaVReportPropertyParameterDecorator();
            ddaxis.BiaEditable = false;

            BiaVReportPropertyParameterDecorator normalization = GetDefaultNormalizationBiaVReportPropertyParameterDecorator();
            normalization.Hidden = true;
            normalization.BiaEditable = false;

            BiaVReportPropertyParameterDecorator hour = GetDefaultHourFilterBiaVReportPropertyParameterDecorator();
            hour.Hidden = true;



            BiaVReportPropertyParameterDecorators parameterDecoratorsVertexValue = new BiaVReportPropertyParameterDecorators()
            {
                Items = new List<BiaVReportPropertyParameterDecorator>()
                {
                     granularity
                     ,
                     normalization
                     ,
                     hour
                     ,
                     GetDefaultEntityValueTypeBiaVReportPropertyParameterDecorator()
                     ,
                     ddaxis
                     ,
                     GetDefaultModeBiaVReportPropertyParameterDecorator()
                }

            };

            return parameterDecoratorsVertexValue;
        }

        public BiaVReportPropertyParameterDecorators GetConsumptionReportMonthOverYearBiaVReportPropertyParameterDecorators()
        {
            BiaVReportPropertyParameterDecorator granularity = GetDefaultGranularityBiaVReportPropertyParameterDecorator();
            granularity.Decorators[2].Selected = false;
            granularity.Decorators[3].Selected = true;
            granularity.Hidden = true;
            granularity.BiaEditable = false;


            BiaVReportPropertyParameterDecorator ddaxis = GetDefaultDdAxisBiaVReportPropertyParameterDecorator();
            ddaxis.BiaEditable = false;

            BiaVReportPropertyParameterDecorator normalization = GetDefaultNormalizationBiaVReportPropertyParameterDecorator();
            normalization.Hidden = true;
            normalization.BiaEditable = false;

            BiaVReportPropertyParameterDecorator hour = GetDefaultHourFilterBiaVReportPropertyParameterDecorator();
            hour.Hidden = true;



            BiaVReportPropertyParameterDecorators parameterDecoratorsVertexValue = new BiaVReportPropertyParameterDecorators()
            {
                Items = new List<BiaVReportPropertyParameterDecorator>()
                {
                     granularity
                     ,
                     normalization
                     ,
                     hour
                     ,
                     GetDefaultEntityValueTypeBiaVReportPropertyParameterDecorator()
                     ,
                     ddaxis
                     ,
                     GetDefaultModeBiaVReportPropertyParameterDecorator()
                }

            };

            return parameterDecoratorsVertexValue;
        }


        public BiaVReportPropertyParameterDecorators GetConsumptionReportYearsColorCodedKwhBiaVReportPropertyParameterDecorators()
        {
            BiaVReportPropertyParameterDecorators parameterDecoratorsVertexValue = new BiaVReportPropertyParameterDecorators()
            {
                Items = new List<BiaVReportPropertyParameterDecorator>()
                {
                     GetDefaultGranularityDisabledMonthlyYearlyBiaVReportPropertyParameterDecorator()
                     ,
                     GetDefaultNormalizationBiaVReportPropertyParameterDecorator()
                     ,
                     GetDefaultHourFilterBiaVReportPropertyParameterDecorator()
                     ,
                     GetDefaultEntityValueTypeBiaVReportPropertyParameterDecorator()
                     ,
                     GetDefaultDdAxisBiaVReportPropertyParameterDecorator()
                     ,
                     GetDefaultModeBiaVReportPropertyParameterDecorator()
                }

            };

            return parameterDecoratorsVertexValue;
        }

        public BiaVReportPropertyParameterDecorators GetConsumptionReportEntityValueTypeOccupancyBiaVReportPropertyParameterDecorators()
        {
            BiaVReportPropertyParameterDecorators parameterDecoratorsVertexValue = new BiaVReportPropertyParameterDecorators()
            {
                Items = new List<BiaVReportPropertyParameterDecorator>()
                {
                     GetDefaultGranularityBiaVReportPropertyParameterDecorator()
                     ,
                     GetDefaultNormalizationBiaVReportPropertyParameterDecorator()
                     ,
                     GetDefaultHourFilterBiaVReportPropertyParameterDecorator()
                     ,
                     GetDefaultEntityValueTypeOccupancyHoursBiaVReportPropertyParameterDecorator()
                     ,                     
                     GetDefaultDdAxisDisabledBiaVReportPropertyParameterDecorator()
                     ,
                     GetDefaultModeDisabledBiaVReportPropertyParameterDecorator()
                }

            };

            return parameterDecoratorsVertexValue;
        }

        public BiaVReportPropertyParameterDecorators GetOccupancyPercentageBiaVReportPropertyParameterDecorators()
        {
            BiaVReportPropertyParameterDecorators parameterDecoratorsVertexValue = new BiaVReportPropertyParameterDecorators()
            {
                Items = new List<BiaVReportPropertyParameterDecorator>()
                {
                     GetDefaultGranularityBiaVReportPropertyParameterDecorator()
                     ,
                     GetDefaultNormalizationBiaVReportPropertyParameterDecorator()
                     ,
                     GetDefaultHourFilterBiaVReportPropertyParameterDecorator()
                     ,
                     GetDefaultEntityValueTypeOccupancyPercentBiaVReportPropertyParameterDecorator()
                     ,
                     GetDefaultDdAxisDisabledBiaVReportPropertyParameterDecorator()
                     ,                     
                     GetDefaultModeDisabledBiaVReportPropertyParameterDecorator()
                }

            };

            return parameterDecoratorsVertexValue;
        }

        public BiaVReportPropertyParameterDecorators GetOccupancyPercentageByHourBiaVReportPropertyParameterDecorators()
        {
            var normalization =  GetDefaultNormalizationDisabledBiaVReportPropertyParameterDecorator();
            normalization.Decorators[0].Precision = 1;

            BiaVReportPropertyParameterDecorators parameterDecoratorsVertexValue = new BiaVReportPropertyParameterDecorators()
            {
                Items = new List<BiaVReportPropertyParameterDecorator>()
                {
                     GetDefaultGranularityDisabledDailyBiaVReportPropertyParameterDecorator()
                     ,
                     normalization
                     ,
                     GetDefaultHourFilterBiaVReportPropertyParameterDecorator()
                     ,
                     GetDefaultEntityValueTypeOccupancyPercentBiaVReportPropertyParameterDecorator()
                     ,
                     GetDefaultModeDisabledBiaVReportPropertyParameterDecorator()
                }

            };

            return parameterDecoratorsVertexValue;
        }

        public BiaVReportPropertyParameterDecorators GetMeteredDataBiaVReportPropertyParameterDecorators()
        {
            BiaVReportPropertyParameterDecorators parameterDecoratorsVertexValue = new BiaVReportPropertyParameterDecorators()
            {
                Items = new List<BiaVReportPropertyParameterDecorator>()
                {
                    
                     GetDefaultNormalizationBiaVReportPropertyParameterDecorator()
                     ,
                     GetDefaultHourFilterBiaVReportPropertyParameterDecorator()
                     ,
                     GetDefaultEntityValueTypeBiaVReportPropertyParameterDecorator()
                     ,
                     GetDefaultModeDisabledBiaVReportPropertyParameterDecorator()
                }

            };

            return parameterDecoratorsVertexValue;
        }

        public BiaVReportPropertyParameterDecorators GetCo2BiaVReportPropertyParameterDecorators()
        {
            BiaVReportPropertyParameterDecorators parameterDecoratorsVertexValue = new BiaVReportPropertyParameterDecorators()
            {
                Items = new List<BiaVReportPropertyParameterDecorator>()
                {
                     GetDefaultGranularityBiaVReportPropertyParameterDecorator()
                     ,
                     GetDefaultNormalizationBiaVReportPropertyParameterDecorator()
                     ,
                     GetDefaultHourFilterBiaVReportPropertyParameterDecorator()
                     ,
                     GetDefaultEntityValueTypeCo2BiaVReportPropertyParameterDecorator()
                }

            };

            return parameterDecoratorsVertexValue;
        }

        public BiaVReportPropertyParameterDecorators GetLoadDurationBiaVReportPropertyParameterDecorators()
        {
            BiaVReportPropertyParameterDecorators parameterDecoratorsVertexValue = new BiaVReportPropertyParameterDecorators()
            {
                Items = new List<BiaVReportPropertyParameterDecorator>()
                {
                     GetDefaultNormalizationBiaVReportPropertyParameterDecorator()
                     ,
                     GetDefaultHourFilterBiaVReportPropertyParameterDecorator()
                     ,
                     GetDefaultEntityValueTypekWBiaVReportPropertyParameterDecorator()
                }

            };

            return parameterDecoratorsVertexValue;
        }


        public BiaVReportPropertyParameterDecorators GetPowerDemandBiaVReportPropertyParameterDecorators()
        {
            BiaVReportPropertyParameterDecorators parameterDecoratorsVertexValue = new BiaVReportPropertyParameterDecorators()
            {
                Items = new List<BiaVReportPropertyParameterDecorator>()
                {
                     GetDefaultGranularityBiaVReportPropertyParameterDecorator()
                     ,
                     GetDefaultNormalizationBiaVReportPropertyParameterDecorator()
                     ,
                     GetDefaultHourFilterBiaVReportPropertyParameterDecorator()
                     ,
                     GetDefaultEntityValueTypekWBiaVReportPropertyParameterDecorator()
                }

            };

            return parameterDecoratorsVertexValue;
        }

        public BiaVReportPropertyParameterDecorators GetHourFilterBiaVReportPropertyParameterDecorators()
        {
            BiaVReportPropertyParameterDecorators parameterDecoratorsVertexValue = new BiaVReportPropertyParameterDecorators()
            {
                Items = new List<BiaVReportPropertyParameterDecorator>()
                {
                     
                     GetDefaultNormalizationBiaVReportPropertyParameterDecorator()
                     ,
                     GetDefaultEntityValueTypeBiaVReportPropertyParameterDecorator()
                     ,
                     GetDefaultModeBiaVReportPropertyParameterDecorator()
                }

            };

            return parameterDecoratorsVertexValue;
        }


        public BiaVReportPropertyParameterDecorator GetDefaultGranularityBiaVReportPropertyParameterDecorator()
        {
            return new BiaVReportPropertyParameterDecorator()
            {
                ParameterName = "Granularity",
                ParameterValue = "granularity",
                DecoratorLabel = "Granularity",
                Hidden = false,
                Decorators = new List<BiaVReportPropertyParameterDecoratorItem>()
                {
                    new BiaVReportPropertyParameterDecoratorItem()
                    {
                        Selected = false,
                        Label = "Total",
                        Parameter = "None"
                    },
                    new BiaVReportPropertyParameterDecoratorItem()
                    {
                        Selected = false,
                        Label = "Daily",
                        Parameter = "Day"
                    },
                    new BiaVReportPropertyParameterDecoratorItem()
                    {
                        Selected = true,
                        Label = "Weekly",
                        Parameter = "Week"
                    },
                    new BiaVReportPropertyParameterDecoratorItem()
                    {
                        Selected = false,
                        Label = "Monthly",
                        Parameter = "Month"
                    },
                    new BiaVReportPropertyParameterDecoratorItem()
                    {
                        Selected = false,
                        Label = "Yearly",
                        Parameter = "Year"
                    }
                }

            };
        }


        public BiaVReportPropertyParameterDecorator GetDefaultGranularityDisabledDailyBiaVReportPropertyParameterDecorator()
        {
            return new BiaVReportPropertyParameterDecorator()
            {
                ParameterName = "Granularity",
                ParameterValue = "granularity",
                DecoratorLabel = "Granularity",
                Hidden = false,
                BiaEditable = false,
                Decorators = new List<BiaVReportPropertyParameterDecoratorItem>()
                {
                    new BiaVReportPropertyParameterDecoratorItem()
                    {
                        Selected = false,
                        Label = "Total",
                        Parameter = "None"
                    },
                    new BiaVReportPropertyParameterDecoratorItem()
                    {
                        Selected = true,
                        Label = "Daily",
                        Parameter = "Day"
                    },
                    new BiaVReportPropertyParameterDecoratorItem()
                    {
                        Selected = false,
                        Label = "Weekly",
                        Parameter = "Week"
                    },
                    new BiaVReportPropertyParameterDecoratorItem()
                    {
                        Selected = false,
                        Label = "Monthly",
                        Parameter = "Month"
                    },
                    new BiaVReportPropertyParameterDecoratorItem()
                    {
                        Selected = false,
                        Label = "Yearly",
                        Parameter = "Year"
                    }
                }

            };
        }
        public BiaVReportPropertyParameterDecorator GetDefaultGranularityDisabledMonthlyYearlyBiaVReportPropertyParameterDecorator()
        {
            return new BiaVReportPropertyParameterDecorator()
            {
                ParameterName = "Granularity",
                ParameterValue = "granularity",
                DecoratorLabel = "Granularity",
                Hidden = false,
                BiaEditable = false,
                Decorators = new List<BiaVReportPropertyParameterDecoratorItem>()
                {

 
                    new BiaVReportPropertyParameterDecoratorItem()
                    {
                        Selected = true,
                        Label = "Monthly",
                        Parameter = "Month"
                    },
                    new BiaVReportPropertyParameterDecoratorItem()
                    {
                        Selected = false,
                        Label = "Yearly",
                        Parameter = "Year"
                    }
                }

            };
        }

        public BiaVReportPropertyParameterDecorator GetDefaultNormalizationBiaVReportPropertyParameterDecorator()
        {
            return new BiaVReportPropertyParameterDecorator()
            {
                ParameterName = "Normalization",
                ParameterValue = "normalization",
                DecoratorLabel = "Normalization",
                Hidden = false,
                Decorators = new List<BiaVReportPropertyParameterDecoratorItem>()
                {
                    new BiaVReportPropertyParameterDecoratorItem()
                    {
                        Selected = true,
                        Label = "None",
                        Parameter = "None",
                        Precision = 0
                    },
                    new BiaVReportPropertyParameterDecoratorItem()
                    {
                        Selected = false,
                        Label = "Square Footage",
                        Parameter = "Square Footage",
                        Precision = 4
                    },
                    new BiaVReportPropertyParameterDecoratorItem()
                    {
                        Selected = false,
                        Label = "Population",
                        Parameter = "Population",
                        Precision = 4
                    }
                }

            };
        }




        public BiaVReportPropertyParameterDecorator GetDefaultNormalizationDisabledBiaVReportPropertyParameterDecorator()
        {
            return new BiaVReportPropertyParameterDecorator()
            {
                ParameterName = "Normalization",
                ParameterValue = "normalization",
                DecoratorLabel = "Normalization",
                Hidden = true,
                BiaEditable = false,
                Decorators = new List<BiaVReportPropertyParameterDecoratorItem>()
                {
                    new BiaVReportPropertyParameterDecoratorItem()
                    {
                        Selected = true,
                        Label = "None",
                        Parameter = "None",
                        Precision = 0
                    },
                    new BiaVReportPropertyParameterDecoratorItem()
                    {
                        Selected = false,
                        Label = "Square Footage",
                        Parameter = "Square Footage",
                        Precision = 4
                    },
                    new BiaVReportPropertyParameterDecoratorItem()
                    {
                        Selected = false,
                        Label = "Population",
                        Parameter = "Population",
                        Precision = 4
                    }
                }

            };
        }

        public BiaVReportPropertyParameterDecorator GetDefaultHourFilterBiaVReportPropertyParameterDecorator()
        {
            return new BiaVReportPropertyParameterDecorator()
            {
                ParameterName = "Hour Filter",
                ParameterValue = "hourFilter",
                DecoratorLabel = "Hour Filter",
                Hidden = false,
                Decorators = new List<BiaVReportPropertyParameterDecoratorItem>()
                {
                    new BiaVReportPropertyParameterDecoratorItem()
                    {
                        Selected = true,
                        Label = "None",
                        Parameter = "None"
                    },
                    new BiaVReportPropertyParameterDecoratorItem()
                    {
                        Selected = false,
                        Label = "Business Hours",
                        Parameter = "BusinessHour"
                    },
                    new BiaVReportPropertyParameterDecoratorItem()
                    {
                        Selected = false,
                        Label = "Weekday Non Business Hours",
                        Parameter = "WeekdayNonBusinessHour"
                    },
                    new BiaVReportPropertyParameterDecoratorItem()
                    {
                        Selected = false,
                        Label = "Weekend Non Business Hours",
                        Parameter = "WeekendNonBusinessHour"
                    },
                    new BiaVReportPropertyParameterDecoratorItem()
                    {
                        Selected = false,
                        Label = "Holidays",
                        Parameter = "Holiday"
                    }
                }

            };


        }

        public BiaVReportPropertyParameterDecorator GetDefaultEntityValueTypeBiaVReportPropertyParameterDecorator()
        {
            return new BiaVReportPropertyParameterDecorator()
            {
                ParameterName = "Entity Value Type",
                ParameterValue = "EntityValueType",
                DecoratorLabel = "Conversion",
                Hidden = true,
                Decorators = new List<BiaVReportPropertyParameterDecoratorItem>()
                {
                    new BiaVReportPropertyParameterDecoratorItem()
                    {
                        Selected = true,
                        Label = "kWh",
                        Parameter = "kWh",
                        EnergyParameter = "Electricity",
                        Units = "kWh"
                    },
                    new BiaVReportPropertyParameterDecoratorItem()
                    {
                        Selected = false,
                        Label = "thm",
                        Parameter = "thm",
                        EnergyParameter = "Gas",
                        Units = "thm"
                    },
                    new BiaVReportPropertyParameterDecoratorItem()
                    {
                        Selected = false,
                        Label = "kBTU Electrical",
                        Parameter = "kbtuElectrical",
                        EnergyParameter = "None",
                        Units = "kBTU"
                    },
                    new BiaVReportPropertyParameterDecoratorItem()
                    {
                        Selected = false,
                        Label = "kBTU Gas",
                        Parameter = "kbtuGas",
                        EnergyParameter = "None",
                        Units = "kBTU"
                    },
                    new BiaVReportPropertyParameterDecoratorItem()
                    {
                        Selected = false,
                        Label = "kBTU Total",
                        Parameter = "kbtuTotal",
                        EnergyParameter = "None",
                        Units = "kBTU"
                    }
                }

            };
        }

        public BiaVReportPropertyParameterDecorator GetDefaultEntityValueTypeCo2BiaVReportPropertyParameterDecorator()
        {
            return new BiaVReportPropertyParameterDecorator()
            {
                ParameterName = "Entity Value Type",
                ParameterValue = "EntityValueType",
                DecoratorLabel = "Conversion",
                Hidden = true,
                BiaEditable = false,
                Decorators = new List<BiaVReportPropertyParameterDecoratorItem>()
                {

                    new BiaVReportPropertyParameterDecoratorItem()
                    {
                        Selected = true,
                        Label = "CO2",
                        Parameter = "",
                        EnergyParameter = "",
                        Units = "lbs"
                    }
                }

            };
        }

        public BiaVReportPropertyParameterDecorator GetDefaultEntityValueTypeOccupancyHoursBiaVReportPropertyParameterDecorator()
        {
            return new BiaVReportPropertyParameterDecorator()
            {
                ParameterName = "Entity Value Type",
                ParameterValue = "EntityValueType",
                DecoratorLabel = "Conversion",
                Hidden = true,
                BiaEditable = false,
                Decorators = new List<BiaVReportPropertyParameterDecoratorItem>()
                {

                    new BiaVReportPropertyParameterDecoratorItem()
                    {
                        Selected = true,
                        Label = "Occupancy",
                        Parameter = "occupancy",
                        EnergyParameter = "None",
                        Units = "Hours"
                    }
                }

            };
        }

        public BiaVReportPropertyParameterDecorator GetDefaultEntityValueTypeOccupancyPercentBiaVReportPropertyParameterDecorator()
        {
            return new BiaVReportPropertyParameterDecorator()
            {
                ParameterName = "Entity Value Type",
                ParameterValue = "EntityValueType",
                DecoratorLabel = "Conversion",
                Hidden = true,
                BiaEditable = false,
                Decorators = new List<BiaVReportPropertyParameterDecoratorItem>()
                {

                    new BiaVReportPropertyParameterDecoratorItem()
                    {
                        Selected = true,
                        Label = "Occupancy",
                        Parameter = "occupancy",
                        EnergyParameter = "",
                        Units = "%"
                    }
                }

            };
        }

        public BiaVReportPropertyParameterDecorator GetDefaultEntityValueTypekWBiaVReportPropertyParameterDecorator()
        {
            return new BiaVReportPropertyParameterDecorator()
            {
                ParameterName = "Entity Value Type",
                ParameterValue = "EntityValueType",
                DecoratorLabel = "Conversion",
                Hidden = true,
                BiaEditable = false,
                Decorators = new List<BiaVReportPropertyParameterDecoratorItem>()
                {

                    new BiaVReportPropertyParameterDecoratorItem()
                    {
                        Selected = true,
                        Label = "kW",
                        Parameter = "",
                        EnergyParameter = "",
                        Units = "kW"
                    }
                }

            };
        }

        public BiaVReportPropertyParameterDecorator GetDefaultDdAxisDisabledBiaVReportPropertyParameterDecorator()
        {
            var decorator = GetDefaultDdAxisBiaVReportPropertyParameterDecorator();
            decorator.BiaEditable = false;
            return decorator;
           
        }

        public BiaVReportPropertyParameterDecorator GetDefaultDdAxisBiaVReportPropertyParameterDecorator()
        {
           return new BiaVReportPropertyParameterDecorator()
            {
                ParameterName = "DDAxis",
                ParameterValue = "DDAxis",
                DecoratorLabel = "Single Temperature",
                Hidden = true,
                BiaEditable = true,
                Decorators = new List<BiaVReportPropertyParameterDecoratorItem>()
                {
                    new BiaVReportPropertyParameterDecoratorItem()
                    {
                        Selected = true,
                        Label = "None",
                        Parameter = "None",
                        ReconfigureChart = true,
                        SecondarySeriesField = "",
                        SecondarySeriesUnits = "",
                        SecondarySeriesPrecision = 0,
                        SecondarySeriesHidden = true,
                        SecondarySeriesColor = "FFFFFF"
                    },
                    new BiaVReportPropertyParameterDecoratorItem()
                    {
                        Selected = false,
                        Label = "Temperature",
                        Parameter = "temperature",
                        ReconfigureChart = true,
                        SecondarySeriesField = "temperature",
                        SecondarySeriesUnits = "F",
                        SecondarySeriesPrecision = 0,
                        SecondarySeriesHidden = false,
                        SecondarySeriesColor = "FFFF00"
                    },
                    new BiaVReportPropertyParameterDecoratorItem()
                    {
                        Selected = false,
                        Label = "HDD",
                        Parameter = "HDD",
                        ReconfigureChart = true,
                        SecondarySeriesField = "HDD",
                        SecondarySeriesUnits = "HDD",
                        SecondarySeriesPrecision = 0,
                        SecondarySeriesHidden = false,
                        SecondarySeriesColor = "FF0000"
                    },
                    new BiaVReportPropertyParameterDecoratorItem()
                    {
                        Selected = false,
                        Label = "CDD",
                        Parameter = "CDD",
                        ReconfigureChart = true,
                        SecondarySeriesField = "CDD",
                        SecondarySeriesUnits = "CDD",
                        SecondarySeriesPrecision = 0,
                        SecondarySeriesHidden = false,
                        SecondarySeriesColor = "0000FF"
                    }

                }

            };
        }



        public BiaVReportPropertyParameterDecorator GetDefaultModeBiaVReportPropertyParameterDecorator()
        {
            return new BiaVReportPropertyParameterDecorator()
            {
                ParameterName = "Mode",
                ParameterValue = "Mode",
                DecoratorLabel = "Mode",
                Hidden = true,
                Decorators = new List<BiaVReportPropertyParameterDecoratorItem>()
                {
                    new BiaVReportPropertyParameterDecoratorItem()
                    {
                        Selected = true,
                        Label = "Energy",
                        Parameter = "Energy"
                    },
                    new BiaVReportPropertyParameterDecoratorItem()
                    {
                        Selected = false,
                        Label = "Financial",
                        Parameter = "Financial"
                    }

                }

            };
        }

        public BiaVReportPropertyParameterDecorator GetDefaultModeDisabledBiaVReportPropertyParameterDecorator()
        {
            return new BiaVReportPropertyParameterDecorator()
            {
                ParameterName = "Mode",
                ParameterValue = "Mode",
                DecoratorLabel = "Mode",
                Hidden = true,
                BiaEditable = false,
                Decorators = new List<BiaVReportPropertyParameterDecoratorItem>()
                {
                    new BiaVReportPropertyParameterDecoratorItem()
                    {
                        Selected = true,
                        Label = "Energy",
                        Parameter = "Energy"
                    },
                    new BiaVReportPropertyParameterDecoratorItem()
                    {
                        Selected = false,
                        Label = "Financial",
                        Parameter = "Financial"
                    }

                }

            };
        }





    }
}
