using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace WebApi.Data.MySql.Mapper
{
    sealed class ClusterLookUp
    {

        public string GetDbName()
        {
            return "reporting";

        }
        public string MapClassToCluster(string vertex)
        {
            switch (vertex)
            {
                case "BiaVProject":
                    return "vertex_project";
                default:
                    return "vertex_project";
            }
        }

        public string MapInReferenceCluster(string cluster)
        {
            switch (cluster)
            {
                case "vertex_project_navigation":
                    return "vertex_project";
                default:
                    return "vertex_project";
            }
        }


        public string GetVertexProjectNavigationCluster()
        {
            return "vertex_project_navigation";
            
        }

        public string GetVertexLevelNavigationCluster()
        {
            return "vertex_level_navigation";

        }
    }
}
