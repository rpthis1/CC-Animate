﻿using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApiBia.Web.Api.Core.Processors.Controllers.IBISRealTime
{
    public interface ICompressedObjectProcessor
    {
        string Get(string path);
    }
}