﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WebApiBia.Data.OrientDb.Clients;
using WebApiBia.Data.QueryProcessors.Bia;

namespace WebApiBia.Data.OrientDb.QueryProcessors.Bia
{
    public class TemplateNodeQueryProcessor : ITemplateNodeQueryProcessor
    {
        private readonly ITemplateNodeClient _client;
        public TemplateNodeQueryProcessor(ITemplateNodeClient client)
        {
            _client = client;
        }

        public string Post(int cluster, int record, object p)
        {
            return _client.Post(cluster, record, p);
        }
    }
}
