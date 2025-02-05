using ProFin.Core.Interfaces.Repositories;
using ProFin.Core.Interfaces.Services;
using ProFin.Core.Notifications;
using ProFin.Core.Services;
using ProFin.Data.Repositories;

namespace ProFin.API.Configurations
{
    public static class AddCorsConfiguration
    {
        public static WebApplicationBuilder AddCorsPolicy(this WebApplicationBuilder builder)
        {
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("Development",
                    policy =>
                    {
                        policy.AllowAnyHeader();
                        policy.AllowAnyMethod();
                        policy.AllowAnyOrigin();
                    });

                options.AddPolicy("Production",
                   policy =>
                   {
                       policy.WithOrigins("https://localhost:4200");
                       policy.AllowAnyHeader();
                   });
            });

            return builder;
        }
    }
}
