﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace WebApiBia.Web.Api.Core.Processors.Controllers.Bia
{
    public interface INavigationTemplateProcessor
    {
        string Post(int cluster, int record, object p);
    }
}
