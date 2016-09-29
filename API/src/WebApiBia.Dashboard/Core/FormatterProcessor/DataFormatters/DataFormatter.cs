using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Xml.Linq;
using WebApiBia.Dashboard.Core.Dto.Parent;

namespace WebApiBia.Dashboard.Core.FormatterProcessor.DataFormatters
{
     public abstract class DataFormatter
     {
         public Parent Format(string data)
         {
             string error = DataHassErrors(data);
             if (error == null)
             {
                 return FormatData(data);
             }

             return new Parent()
             {
                 ErrorMessage = error
             };
         }

         public abstract Parent FormatData(string data);

         public virtual string DataHassErrors(string data)
         {
             try
             {
                 XElement xml = XElement.Parse(data);

                 if (xml.Attribute("error") != null)
                 {
                     return xml.Attribute("error").Value;
                 }
             }
             catch (Exception e)
             {
                 return data;
             }
       
             return null;
         }


         protected string AssertXmlAttribute(XAttribute value)
         {
             if (value != null)
             {
                 return value.Value;
             }
             return "";
         }

     }
}
