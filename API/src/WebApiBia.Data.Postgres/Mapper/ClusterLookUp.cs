namespace WebApiBia.Data.Postgres.Mapper
{
    sealed class ClusterLookUp
    {

        public string GetSchemaName()
        {
            return "public";

        }

        public string GetDbName()
        {
            return "reporting";

        }

        public bool IsClusterLookupId(int clusterId)
        {
            if (clusterId == 0)
            {
                return true;
            }
            return false;
        }
        public string MapClassToCluster(string vertex)
        {
            switch (vertex)
            {
                case "BiaVProject":
                    return "vertex_project";
                case "BiaVTemplateTree":
                    return "vertex_content_navigation";
            }
            return string.Empty;
        }

        public string MapIncomingReferenceCluster(string cluster)
        {
            switch (cluster)
            {
                case "vertex_project_navigation":
                    return "vertex_project";
                case "vertex_level_navigation":
                    return "vertex_project_navigation";
            }
            return string.Empty;
        }


        public string GetVertexProjectNavigationCluster()
        {
            return "vertex_project_navigation";
            
        }

        public string GetVertexLevelNavigationCluster()
        {
            return "vertex_level_navigation";

        }

        public string GetVertexContentNavigationCluster()
        {
            return "vertex_content_navigation";

        }

        public string GetStaticMenuTable()
        {
            return "static_menu";

        }

        public string GetLookupTemplateOwnerTable()
        {
            return "lookup_template_owner";
        }

        public int GetVertexProjectClusterId()
        {
            return 1;

        }
        public int GetVertexProjectNavigationClusterId()
        {
            return 2;

        }
        public int  GetVertexLevelNavigationClusterId()
        {
            return 3;

        }

        public string GetClusterNameById(int clusterid)
        {
            switch (clusterid)
            {
                case 0:
                    return "lookup_template_owner";
                case 1:
                    return "vertex_project";
                case 2:
                    return "vertex_project_navigation";
                case 3:
                    return "vertex_level_navigation";
                case 4:
                    return "vertex_content_navigation";
            }
            return string.Empty;
            
        }
    }
}
