using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Media;
using WebApiBia.Dashboard.UiControls.Chart.Series.Gradients.Triplets;
using WebApiBia.Data.Entities.Bia;

namespace WebApiBia.Dashboard.UiControls.Chart.Series.Gradients.Util
{
    public class GradientUtil
    {
        private readonly List<SeriesColorTriplet> _triplets = new List<SeriesColorTriplet>();

        public string VerifyHexFormat(string color)
        {
            if (color.IndexOf("#", StringComparison.Ordinal) == -1)
            {
                return "#" + color;
            }

            return color;
        }

        private readonly String[] _colorsArray = new[]
        {
            "1D72A3",
            "913D1E",
            "D35908",
            "D2BF08",
            "6AD009",
            "BF0C0C",
            "588D8E",
            "2E601D",
            "0758D2",
            "6A6CAC",
            "67872B",
            "A1D438",
            "AEAEFF",
            "7E1818",
            "3CA1FF",
            "A1D438",

             "59E928",
            "2E39C8",
            "B565D8",
            "D63186",
            "0E9004",
            "A9A4A2",
            "CFBD97",
            "CFE2A9",
            "FF6FD9",
            "D68E40",
            "D8360F",
            "D2606F",
            "9BC240",
            "B74523",
            "AB803C",
            "AD6639",
            "D9213A",
            "1C1C84",
            "5E78B7",
            "740505",
            "7EF810",
            "77D76D",
            "DEC0DE",
            "A1D438",
            "A1D438",


                        "F0CC77",
            "BF323E",
            "4C10C9",
            "FC5F5B",
            "B6C859",
            "3CA111",
            "D7B8E0",
            "C0BB0B",
            "A5436A",
            "789DD4",
                        "04C88C",
            "326AD1",
            "743829",
            "931807",
            "8634CD",
            "F901A3",
            "806554",
            "C1C35F",
            "024413",
            "5FC1A2",
                        "BA83F4",
            "A1759C",
            "7C7CB4",
            "EBCB4A",
            "E49BE6",
            "DBB40E",
            "A6C35C",
            "EBA6E4",
            "904B1E",
            "09090F",
                        "A1D438",
            "CF0189",
            "224281",
            "20EE21",
            "51A769",
            "A4445D",
            "A94AED",
            "C55B19",
            "0A4CA4",
            "A342CF",
                        "9C69D0",
            "D29D13",
            "29F115",
            "9B6FA2",
            "13EA73",
            "A1D438",
            "F61DB7",
            "1C793C",
            "FA5B65",
            "8C5347",
                        "6E127A",
            "875D3E",
            "879164",
            "AD4202",
            "C69F72",
            "C7446A",
            "E3649C",
            "B68F90",
            "67C9F1",
            "15ED3C"



        };

        public GradientUtil()
        {

            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#CC66CC",
                Color2 = "#7A3D7A",//
                Color3 = "#CC66CC"
            });

            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#149cb8",
                Color2 = "#0A4E5C",//
                Color3 = "#149cb8"
            });
            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#5a6b9c",
                Color2 = "#2D364E",//
                Color3 = "#5a6b9c"
            });

            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#FC9005",
                Color2 = "#450000",//
                Color3 = "#FC9005"
            });
            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#caed02",
                Color2 = "#657601",//
                Color3 = "#caed02"
            });

            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#6a915d",
                Color2 = "#35482E", //
                Color3 = "#6a915d"
            });
            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#75ffa5",
                Color2 = "#3A8052",//
                Color3 = "#75ffa5"
            });
            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#ff3675",
                Color2 = "#801B3A",//
                Color3 = "#ff3675"

            });

            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#949650",
                Color2 = "#2A1944",//
                Color3 = "#949650"
            });


            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#26ff26",
                Color2 = "#138013",//
                Color3 = "#26ff26"
            });

            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#c3d1eb",
                Color2 = "#626876",//
                Color3 = "#c3d1eb"
            });

            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#b09f84",
                Color2 = "#585042",//
                Color3 = "#b09f84"
            });

            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#ff2424",
                Color2 = "#801212",//
                Color3 = "#ff2424"
            });
            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#97c28d",
                Color2 = "#4C6146",//
                Color3 = "#97c28d"
            });

            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#151945",
                Color2 = "#0A0C22",//
                Color3 = "#151945"
            });


            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#558f38",
                Color2 = "#2A481C",//
                Color3 = "#558f38"
            });


            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#c97404",
                Color2 = "#643A02",//
                Color3 = "#c97404"
            });

            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#ec8cff",
                Color2 = "#764680",//
                Color3 = "#ec8cff"
            });

            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#0c5d6e",
                Color2 = "#062E37",//
                Color3 = "#0c5d6e"
            });

            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#e0e673",
                Color2 = "#70733A",//
                Color3 = "#e0e673"
            });

            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#3c88cf",
                Color2 = "#1E4468",//
                Color3 = "#3c88cf"
            });

            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#858c9e",
                Color2 = "#42464F",//
                Color3 = "#858c9e"
            });

            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#2b328f",
                Color2 = "#161948",//
                Color3 = "#2b328f"
            });

            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#82f4fa",
                Color2 = "#417A7D",//
                Color3 = "#82f4fa"
            });
            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#7a4601",
                Color2 = "#3D2300",//
                Color3 = "#7a4601"
            });
            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#fa9120",
                Color2 = "#7D4810",//
                Color3 = "#fa9120"
            });
            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#d197ac",
                Color2 = "#684C56",//
                Color3 = "#d197ac"
            });
            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#cf3872",
                Color2 = "#681C39",//
                Color3 = "#cf3872"
            });
            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#c9b834",
                Color2 = "#645C1A",//
                Color3 = "#c9b834"
            });
            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#fcd98d",
                Color2 = "#7E6C46",//
                Color3 = "#fcd98d"
            });
            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#fab9d8",
                Color2 = "#7D5C6C",//
                Color3 = "#fab9d8"
            });
            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#f5e4d0",
                Color2 = "#7A7268",//
                Color3 = "#f5e4d0"
            });
            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#ecf007",
                Color2 = "#767804",//
                Color3 = "#ecf007"
            });
            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#543287",
                Color2 = "#2A1944",//
                Color3 = "#543287"
            });
            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#5d3ec2",
                Color2 = "#2E1F61",//
                Color3 = "#5d3ec2"
            });
            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#009963",
                Color2 = "#004C32",//
                Color3 = "#009963"
            });
            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#d9d9d9",
                Color2 = "#6C6C6C",//
                Color3 = "#d9d9d9"
            });
            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#003745",
                Color2 = "#001C22",//
                Color3 = "#003745"
            });
            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#e8a5a0",
                Color2 = "#745250",
                Color3 = "#e8a5a0"
            });
            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#00d5ff",
                Color2 = "#006A80",
                Color3 = "#00d5ff"
            });

            _triplets.Add(new SeriesColorTriplet
            {
                Color1 = "#ff0000",
                Color2 = "#990000",
                Color3 = "#ff0000"
            });
        }

        public int Count
        {
            get { return _triplets.Count; }
        }

        public SeriesColorTriplet this[int index]
        {
            get
            {

                if (index < _triplets.Count)
                {
                    return _triplets[index];
                }


                return new SeriesColorTriplet
               {
                   Color1 = "#cccccc",
                   Color2 = "#cccccc",
                   Color3 = "#cccccc",
               };


            }
        }

        public SeriesGradient GetGradientByColor(string color)
        {

            SeriesColorTriplet triplet = GetDarkerColorTripplet(color);
         
            var gradient = new SeriesGradient
            {
                Radius = 0,
                Opacity = 1,
                FillStyle = new SeriesGradientFill
                {
                    Stops = new List<SeriesGradientStop>
                        {
                            new SeriesGradientStop
                            {
                                Color = triplet.Color1,
                                Offset = 0
                            },
                            new SeriesGradientStop
                            {
                                Color = triplet.Color2,
                                Offset = 0.5
                            },
                            new SeriesGradientStop
                            {
                                Color = triplet.Color3,
                                Offset = 1
                            }
                        }
                }

            };

            return gradient;
        }


        private SeriesColorTriplet GetColorTripplet(string color)
        {

            switch (color.ToUpper())
            {
                case "YELLOW":
                     return new SeriesColorTriplet
                    {
                        Color1 = "#866700",
                        Color2 = "#FFCC23",
                        Color3 = "#866700"
                    };
                case "GRAY":
                     return new SeriesColorTriplet
                     {
                         Color1 = "#626262",
                         Color2 = "#CCCCCC",
                         Color3 = "#626262"
                     };
            
            }
            return null;
        }

        public SeriesColorTriplet GetDarkerColorTripplet(string hex)
        {
          
            if (hex.IndexOf("#", StringComparison.Ordinal) == -1 )
            {
                hex = "#" + hex;
            }
  
            Color color = ColorTranslator.FromHtml(hex);

            Color darker = GetColorDarker(color,.2);
            
         
                    return new SeriesColorTriplet
                    {
                        Color1 = HexConverter(darker),
                        Color2 = hex,
                        Color3 = HexConverter(darker)
                    };
        }


        public static Color GetColorDarker(Color color, double factor)
        {
            // The factor value value cannot be greater than 1 or smaller than 0.
            // Otherwise return the original colour
            if (factor < 0 || factor > 1)
                return color;

            int r = (int)(factor * color.R);
            int g = (int)(factor * color.G);
            int b = (int)(factor * color.B);
            return Color.FromArgb(r, g, b);
        }

        public BiaVReportPropertyGradients GetBiaVReportPropertyGradients()
        {
            BiaVReportPropertyGradients gradients = new BiaVReportPropertyGradients
            {
                Items = new List<BiaVReportPropertyGradient>()
            };

            foreach (var color in _colorsArray)
            {
                gradients.Items.Add(new BiaVReportPropertyGradient()
                {
                    Color = color,
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                });
            }

            return gradients;
        }

        public BiaVReportPropertyGradients GetPowerDemandDetailBiaVReportPropertyGradients()
        {
            BiaVReportPropertyGradients gradients = new BiaVReportPropertyGradients
            {
                Items = new List<BiaVReportPropertyGradient>()
            };

         
            gradients.Items.Add(new BiaVReportPropertyGradient()
                {
                    Color = "69AC2B",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                });

            gradients.Items.Add(new BiaVReportPropertyGradient()
            {
                Color = "FFFF00",
                Opacity = 1,
                Radius = 0,
                Gradient = "linear",
                StrokeColor = "2a2a2a"
            });

            gradients.Items.Add(new BiaVReportPropertyGradient()
            {
                Color = "A13031",
                Opacity = 1,
                Radius = 0,
                Gradient = "linear",
                StrokeColor = "2a2a2a"
            });

            gradients.Items.Add(new BiaVReportPropertyGradient()
            {
                Color = "F76200",
                Opacity = 1,
                Radius = 0,
                Gradient = "linear",
                StrokeColor = "2a2a2a"
            });


            return gradients;
        }

        public BiaVReportPropertyGradients GetHourFilteriaVReportPropertyGradients()
        {
            BiaVReportPropertyGradients gradients = new BiaVReportPropertyGradients
            {
                Items = new List<BiaVReportPropertyGradient>()
            };




            gradients.Items.Add(new BiaVReportPropertyGradient()
            {
                Color = "3CA1FF",
                Opacity = 1,
                Radius = 0,
                Gradient = "linear",
                StrokeColor = "2a2a2a"
            });

            gradients.Items.Add(new BiaVReportPropertyGradient()
            {
                Color = "A1D438",
                Opacity = 1,
                Radius = 0,
                Gradient = "linear",
                StrokeColor = "2a2a2a"
            });

            gradients.Items.Add(new BiaVReportPropertyGradient()
            {
                Color = "AEAEFF",
                Opacity = 1,
                Radius = 0,
                Gradient = "linear",
                StrokeColor = "2a2a2a"
            });

            gradients.Items.Add(new BiaVReportPropertyGradient()
            {
                Color = "7E1818",
                Opacity = 1,
                Radius = 0,
                Gradient = "linear",
                StrokeColor = "2a2a2a"
            });




            gradients.Items.Add(new BiaVReportPropertyGradient()
            {
                Color = "69AC2B",
                Opacity = 1,
                Radius = 0,
                Gradient = "linear",
                StrokeColor = "2a2a2a"
            });

            gradients.Items.Add(new BiaVReportPropertyGradient()
            {
                Color = "FFFF00",
                Opacity = 1,
                Radius = 0,
                Gradient = "linear",
                StrokeColor = "2a2a2a"
            });

            gradients.Items.Add(new BiaVReportPropertyGradient()
            {
                Color = "A13031",
                Opacity = 1,
                Radius = 0,
                Gradient = "linear",
                StrokeColor = "2a2a2a"
            });

            gradients.Items.Add(new BiaVReportPropertyGradient()
            {
                Color = "F76200",
                Opacity = 1,
                Radius = 0,
                Gradient = "linear",
                StrokeColor = "2a2a2a"
            });


            return gradients;
        }

        public BiaVReportPropertyGradients GetBiaVReportPropertyGradients2()
        {
            BiaVReportPropertyGradients gradients = new BiaVReportPropertyGradients();
            gradients.Items = new List<BiaVReportPropertyGradient>
            {
                new BiaVReportPropertyGradient()
                {
                    Color = "1D72A3",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                },
                 new BiaVReportPropertyGradient()
                {
                    Color = "913D1E",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                },
                 new BiaVReportPropertyGradient()
                {
                    Color = "D35908",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                },
                 new BiaVReportPropertyGradient()
                {
                    Color = "D2BF08",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                },
                 new BiaVReportPropertyGradient()
                {
                    Color = "6AD009",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                },
                 new BiaVReportPropertyGradient()
                {
                    Color = "588D8E",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                },
                 new BiaVReportPropertyGradient()
                {
                    Color = "2E601D",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                },
                 new BiaVReportPropertyGradient()
                {
                    Color = "0758D2",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                },
                 new BiaVReportPropertyGradient()
                {
                    Color = "6A6CAC",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "67872B",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
                 ,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }
,
                 new BiaVReportPropertyGradient()
                {
                    Color = "BF0C0C",
                    Opacity = 1,
                    Radius = 0,
                    Gradient = "linear",
                    StrokeColor = "2a2a2a"
                }





        };

            return gradients;
        }

        private static String HexConverter(Color c)
        {
            return "#" + c.R.ToString("X2") + c.G.ToString("X2") + c.B.ToString("X2");
        }

        private static String RgbConverter(Color c)
        {
            return "RGB(" + c.R.ToString() + "," + c.G.ToString() + "," + c.B.ToString() + ")";
        }

    }
}
