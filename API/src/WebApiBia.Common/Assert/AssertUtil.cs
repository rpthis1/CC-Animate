using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Xml.Linq;

namespace WebApiBia.Common.Assert
{
    public class AssertUtil
    {
        public string AssertIsNullOrEmptyReturnZero(string value)
        {
            if (String.IsNullOrEmpty(value))
            {
                value = "0";
            }
            return value;
        }


        public string AssertAttributeIsNullOrEmptyReturnEmptyString(XAttribute attr)
        {
            if (attr != null)
            {
                return attr.Value;
            }

            return string.Empty;
        }
    }
}
