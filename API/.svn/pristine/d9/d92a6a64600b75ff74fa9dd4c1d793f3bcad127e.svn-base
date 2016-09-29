using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;

namespace WebApiBia.Data.OrientDb.Clients
{
    public interface IOrientClient
    {
         WebRequest GetClientGet(string operation, string parameter);
         WebRequest GetClientPost(string operation, string parameter);
         WebRequest GetClient(string operation, string parameter);
         string ProcessGettRequest(WebRequest request);
         string ProcessPostRequest(WebRequest request, string postData);
    }


}
