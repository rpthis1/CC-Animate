using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Newtonsoft.Json;

namespace WebApiBia.Data.Entities.Bia
{
    public class BiaVBasePropertiesVertex : BiaVBase
    {
        private string _label;
        private string _icon;
        private string _xtype = "reporting-report-Report";




        [JsonProperty(PropertyName = "icon")]
        public string Icon
        {
            get
            {
                if (Override != null)
                {
                    if (Override.Value != null)
                    {
                        if (Override.Value.Content != null)
                        {
                            if (Override.Value.Content.Items != null)
                            {
                                foreach (BiaVBaseProperty property in Override.Value.Content.Items)
                                {

                                    if (property.Override && property.Label.ToUpper().Equals("ENABLED"))
                                    {
                                        if (property.Value.ToUpper().Equals("NO"))
                                        {
                                            return "resources/images/vertex/disabled.png";
                                        }
                                        return _icon;

                                    }
                                }
                            }
                        }
                    }
                }

                if (Value != null)
                {
                    if (Value.Items != null)
                    {

                        foreach (BiaVBaseProperty property in Value.Items)
                        {

                            if (property.Label.ToUpper().Equals("ENABLED"))
                            {
                                if (property.Value.ToUpper().Equals("NO"))
                                {
                                    return "resources/images/vertex/disabled.png";
                                }
                            }
                        }


                    }
                }


                return _icon;


            }
            set { _icon = value; }
        }

   

        [JsonProperty(PropertyName = "value")]
        public BiaVBaseProperties Value { get; set; }

        [JsonProperty(PropertyName = "override")]
        public BiaVOverrideBaseProperties Override { get; set; }


        public string RawLabel {
            get { return _label; }

         }

        [JsonProperty(PropertyName = "label")]
        public new string Label
        {
            get
            {
                if (Override != null)
                {
                    if (Override.Value != null)
                    {
                        if (Override.Value.Content != null)
                        {
                            if (Override.Value.Content.Items != null)
                            {
                                foreach (BiaVBaseProperty property in Override.Value.Content.Items)
                                {

                                    if (property.Override && property.Label.ToUpper().Equals("TITLE"))
                                    {
                                        return String.Format("[{0}] {1}", _label, property.Value);
                                    }
                                }
                            }
                        }
                    }
                }


                if (Value != null)
                {
                    if (Value.Items != null)
                    {

                        foreach (BiaVBaseProperty property in Value.Items)
                        {

                            if (property.Label.ToUpper().Equals("TITLE"))
                            {
                                return String.Format("[{0}] {1}", _label, property.Value);
                            }
                        }


                    }
                }

                return _label;
            }

            set { _label = value; }
        }

        [JsonProperty(PropertyName = "title")]
        public string Title
        {
            get
            {
                if (Override != null)
                {
                    if (Override.Value != null)
                    {
                        if (Override.Value.Content != null)
                        {
                            if (Override.Value.Content.Items != null)
                            {
                                foreach (BiaVBaseProperty property in Override.Value.Content.Items)
                                {

                                    if (property.Override && property.Label.ToUpper().Equals("TITLE"))
                                    {
                                        return String.Format("{0}",  property.Value);
                                    }
                                }
                            }
                        }
                    }
                }


                if (Value != null)
                {
                    if (Value.Items != null)
                    {

                        foreach (BiaVBaseProperty property in Value.Items)
                        {

                            if (property.Label.ToUpper().Equals("TITLE"))
                            {
                                return String.Format("{0}", property.Value);
                            }
                        }


                    }
                }

                return _label;
            }

            set { _label = value; }
        }
        [JsonProperty(PropertyName = "xtype")]
        public string Xtype
        {
            get
            {
                if (Override != null)
                {
                    if (Override.Value != null)
                    {
                        if (Override.Value.Content != null)
                        {
                            if (Override.Value.Content.Items != null)
                            {
                                foreach (BiaVBaseProperty property in Override.Value.Content.Items)
                                {

                                    if (property.Override && property.Label.ToUpper().Equals("BIAXTYPE"))
                                    {
                                        return String.Format("{0}", property.Value);
                                    }
                                }
                            }
                        }
                    }
                }


                if (Value != null)
                {
                    if (Value.Items != null)
                    {

                        foreach (BiaVBaseProperty property in Value.Items)
                        {

                            if (property.Label.ToUpper().Equals("BIAXTYPE"))
                            {
                                return String.Format("{0}", property.Value);
                            }
                        }


                    }
                }

                return _xtype;
            }

            set { _xtype = value; }
        }

        public bool IsEnabled()
        {
            if (Override != null)
            {
                if (Override.Value != null)
                {
                    if (Override.Value.Content != null)
                    {
                        if (Override.Value.Content.Items != null)
                        {
                            foreach (BiaVBaseProperty property in Override.Value.Content.Items)
                            {

                                if (property.Override && property.Label.ToUpper().Equals("ENABLED"))
                                {
                                    if (property.Value.ToUpper().Equals("NO"))
                                    {
                                        return false;
                                    }
                                    return true;

                                }
                            }
                        }
                    }
                }
            }

            if (Value != null)
            {
                if (Value.Items != null)
                {

                    foreach (BiaVBaseProperty property in Value.Items)
                    {

                        if (property.Label.ToUpper().Equals("ENABLED"))
                        {
                            if (property.Value.ToUpper().Equals("NO"))
                            {
                                return false;
                            }
                            return true;
                        }
                    }


                }
            }
            return true;
        }


        public BiaVBaseProperty GetPropertyById(string label)
        {
            if (Override != null)
            {
                if (Override.Value != null)
                {
                    if (Override.Value.Content != null)
                    {
                        if (Override.Value.Content.Items != null)
                        {
                            foreach (BiaVBaseProperty property in Override.Value.Content.Items)
                            {

                                if (property.Override && property.ItemId != null && property.ItemId.ToUpper().Equals(label.ToUpper()))
                                {
                                    return property;
                                }
                            }
                        }
                    }
                }
            }

            if (Value != null)
            {
                if (Value.Items != null)
                {

                    foreach (BiaVBaseProperty property in Value.Items)
                    {

                        if ( property.ItemId != null  &&  property.ItemId.ToUpper().Equals(label.ToUpper()))
                        {
                            return property;
                        }
                    }


                }
            }
            return null;
        }

    }
}
