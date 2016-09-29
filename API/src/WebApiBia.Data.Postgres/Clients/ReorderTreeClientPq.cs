using Newtonsoft.Json.Linq;
using WebApiBia.Data.Postgres.GenericQueries;

namespace WebApiBia.Data.Postgres.Clients
{
    public class ReorderTreeClientPq
    {

        private readonly GenericQueriesPg _genericQueriesPg = new GenericQueriesPg();
        public string Put(object p)
        {
            JArray clientObject = (JArray)p;

            _genericQueriesPg.ReoderTree(clientObject);

            return string.Empty;
        }
    }
}
