using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using ProFin.Core.Enumeradores;
using ProFin.Core.Interfaces.Repositories;
using ProFin.Core.Interfaces.Services;
using ProFin.Core.Notifications;
using ProFin.Core.Services;
using ProFin.Data.Context;
using ProFin.Data.Repositories;

namespace ProFin.Data.IoC
{
    public static class RegisterCore
    {
        public static WebApplicationBuilder AddEF(this WebApplicationBuilder builder, EDatabases databases)
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

            builder.Services.AddDefaultIdentity<IdentityUser<Guid>>()
              .AddRoles<IdentityRole<Guid>>()
              .AddEntityFrameworkStores<AppDbContext>()
              .AddSignInManager()
              .AddRoleManager<RoleManager<IdentityRole<Guid>>>()
              .AddDefaultTokenProviders();

            return builder;
        }

        public static WebApplicationBuilder AddRepositories(this WebApplicationBuilder builder)
        {
            builder.Services.AddScoped<IFinancialTransactionRepository, FinancialTransactionRepository>();
            builder.Services.AddScoped<IBudgetRepository, BudgetRepository>();
            builder.Services.AddScoped<ICategoryTransactionRepository, CategoryTransactionRepository>();
            builder.Services.AddScoped<IUserRepository, UserRepository>();


            return builder;
        }

        public static WebApplicationBuilder AddServices(this WebApplicationBuilder builder)
        {
            builder.Services.AddScoped<INotifier, Notifier>();
            builder.Services.AddScoped<IFinancialTransactionService, FinancialTransactionService>();
            builder.Services.AddScoped<ICategoryService, CategoryService>();
            builder.Services.AddScoped<IBudgetService, BudgetService>();
            builder.Services.AddScoped<IUserService, UserService>();
            builder.Services.AddHttpContextAccessor();

            return builder;
        }
    }
}
