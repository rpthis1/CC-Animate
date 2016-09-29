using Ninject;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApiBia.Common;

namespace WebApiBia.Web.Api.App_Start
{
    public class NinjectConfigurator
    {
        public void Configure(IKernel container)
        {
            AddBindings(container);
        }
        private void AddBindings(IKernel container)
        {
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
            // IMPORTANT NOTE! *Never* configure a type as singleton if it depends upon ISession!!! This is because
            // ISession is disposed of at the end of every request. For the same reason, make sure that types
            // dependent upon such types aren't configured as singleton.
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////

            ConfigureLog4net(container);
            ConfigureUserSession(container);
            ConfigureNHibernate(container);
            ConfigureDependenciesOnlyUsedForLegacyProcessing(container);
            ConfigureAutoMapper(container);


            container.Bind<IDateTime>().To<DateTimeAdapter>().InSingletonScope();



        }

        private void ConfigureAutoMapper(IKernel container)
        {

        }

        private void ConfigureUserSession(IKernel container)
        {

        }

        private void ConfigureNHibernate(IKernel container)
        {

        }


        private void ConfigureDependenciesOnlyUsedForLegacyProcessing(IKernel container)
        {

        }

        private void ConfigureLog4net(IKernel container)
        {

        }
    }
}