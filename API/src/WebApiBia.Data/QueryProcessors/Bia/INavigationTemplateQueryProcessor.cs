﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace WebApiBia.Data.QueryProcessors.Bia
{
    public interface INavigationTemplateQueryProcessor
    {
        string Post(int cluster, int record, object p);
    }
}
