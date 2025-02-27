using Microsoft.Extensions.DependencyInjection.Extensions;
using ProFin.API.Extensions;
using ProFin.Core.Interfaces;

namespace ProFin.API.Configurations
{
    public static class RegisterAPIService
    {
        public static WebApplicationBuilder AddAPIServices(this WebApplicationBuilder builder)
        {
            builder.Services.TryAddScoped<IAppUserService, AppUserService>();
            return builder;
        }
    }
}
