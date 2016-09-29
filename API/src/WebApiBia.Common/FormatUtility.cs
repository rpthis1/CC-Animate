using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace WebApiBia.Common
{
    public class FormatUtility
    {
       
        public string FormattedPrecision(int? precision)
        {
            
                StringBuilder format = new StringBuilder("0,000");

                if ( precision != null && precision >= 0)
                {
                    for (int i = 0; i < precision; i++)
                    {
                        if (i == 0)
                        {
                            format.Append(".");
                        }
                        format.Append("0");
                    }
                    return format.ToString();
                }

                return null;
            
        }
    }
}
