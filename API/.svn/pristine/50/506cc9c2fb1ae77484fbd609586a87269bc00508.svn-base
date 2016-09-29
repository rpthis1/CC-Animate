using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Newtonsoft.Json;

namespace WebApiBia.Web.Models.TreeMenu
{
    public class ItemContainerMenu
    {
        public ItemContainerMenu()
        {
            Type = "d";
        }

        [JsonProperty(PropertyName = "@type")]
        public string Type { get; set; }

        [JsonProperty(PropertyName = "@version")]
        public List<ItemMenu> Version { get; set; }

        [JsonProperty(PropertyName = "content")]
        public List<ItemMenu> Content { get; set; }

        [JsonProperty(PropertyName = "menuWidth")]
        public int MenuWidth { get; set; }

        [JsonProperty(PropertyName = "menuHeight")]
        public int MenuHeight { get; set; }
    }
}
