
using Microsoft.EntityFrameworkCore;
using ProFin.Core.Enumeradores;
using ProFin.Data.Context;
using ProFin.Data.Seed;

namespace ProFin.API.Configurations
{
    public static class DbContextConfig
    {
        public static WebApplicationBuilder AddDbContextConfig(this WebApplicationBuilder builder, EDatabases databases)
        {
            switch (databases)
            {
                case EDatabases.SQLServer:
                    builder.Services.AddDbContext<AppDbContext>(options =>
                        options.UseSqlServer(builder.Configuration.GetConnectionString("SQLServer"))
                    );
                    break;

                case EDatabases.SQLite:
                    builder.Services.AddDbContext<AppDbContext>(options =>
                        options.UseSqlite(builder.Configuration.GetConnectionString("SQLite"))
                    );
                    break;

                default:
                    throw new ArgumentException($"Banco de dados {databases} não suportado.");
            }

            builder.Services.AddTransient<DbMigrationHelper>();

            return builder;
        }
    }
}
