﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Newtonsoft.Json;

namespace WebApiBia.Data.Entities.Bia
{
    public class BiaVOverride
    {

        [JsonProperty(PropertyName = "@rid")]
        public string Rid { get ; set; }

    }
}
