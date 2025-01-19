
using Microsoft.EntityFrameworkCore;
using ProFin.Data.Context;
using ProFin.Data.Seed;

namespace ProFin.API.Configurations
{
    public static class DbContextConfig
    {
        public static WebApplicationBuilder AddDbContextConfig(this WebApplicationBuilder builder)
        {
            builder.Services.AddDbContext<AppDbContext>(options =>
            {
                options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
            });

            builder.Services.AddTransient<DbMigrationHelper>();

            return builder;
        }
    }
}
