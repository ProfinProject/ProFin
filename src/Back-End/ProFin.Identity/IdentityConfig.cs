using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;


namespace ProFin.Identity
{
    public static class IdentityConfig
    {
        public static WebApplicationBuilder AddIdentity(this WebApplicationBuilder builder)
        {
            builder.Services.AddDbContext<ProFinIdentityDbContext>(options =>
              options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

            builder.Services.AddDefaultIdentity<IdentityUser>()
                .AddRoles<IdentityRole>()
                .AddEntityFrameworkStores<ProFinIdentityDbContext>()
                .AddSignInManager()
                .AddRoleManager<RoleManager<IdentityRole>>()
                .AddDefaultTokenProviders();

            return builder;

        }
    }
}
