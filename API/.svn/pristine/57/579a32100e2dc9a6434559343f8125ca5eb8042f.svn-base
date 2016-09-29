using System;
using System.Configuration;
using System.IO;
using System.Net;
using System.Text;


namespace WebApiBia.Data.OrientDb.Clients
{
    public class OrientClient : IOrientClient
    {
         public WebRequest GetClientGet(string operation,string parameter)
        {
            WebRequest request = GetClient(operation,parameter);
            request.Method = WebRequestMethods.Http.Get;
            return request;

        }
        public  WebRequest GetClientPost(string operation,string parameter)
        {
            WebRequest request = GetClient(operation,parameter);
            request.Method = WebRequestMethods.Http.Post;
            return request;
        }
        public  WebRequest GetClient(string operation,string parameter)
        {
            string server = ConfigurationManager.AppSettings["orientdbServer"].ToString();
            string db = ConfigurationManager.AppSettings["orientdbDb"].ToString();
            string path = String.Format("{0}{1}{2}{3}", server,operation,db,parameter);
            var request = (HttpWebRequest) WebRequest.Create(path);
            request.ContentType = "application/x-www-form-urlencoded";
            string auth = String.Format("{0}:{1}", ConfigurationManager.AppSettings["orientdbUser"], ConfigurationManager.AppSettings["orientdbPass"]);
            string enc = Convert.ToBase64String(Encoding.ASCII.GetBytes(auth));
            string cred = String.Format("Basic {0}", enc);
            request.Headers[HttpRequestHeader.Authorization] = cred;
            request.KeepAlive = false;
            request.ProtocolVersion = HttpVersion.Version10;

            return request;

        }
        public string ProcessGettRequest(WebRequest request)
        {
            var response = (HttpWebResponse)request.GetResponse();
            var responseString = new StreamReader(response.GetResponseStream()).ReadToEnd();
            response.Close();
            return responseString.ToString();
        }

        public string ProcessPostRequest(WebRequest request, string postData)
        {
            var data = Encoding.ASCII.GetBytes(postData);
            request.ContentLength = data.Length;
            using (var stream = request.GetRequestStream())
            {
                stream.Write(data, 0, data.Length);
            }

            var response = (HttpWebResponse)request.GetResponse();
            var responseString = new StreamReader(response.GetResponseStream()).ReadToEnd();
            response.Close();
            return responseString;

        }
    }
}
