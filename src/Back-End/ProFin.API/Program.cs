using Microsoft.OpenApi.Models;
using ProFin.API.Configurations;
using ProFin.Core.Enumeradores;
using ProFin.Core.Interfaces.Services;
using ProFin.Core.Notifications;
using ProFin.Data.Seed;
using ProFin.Identity;


internal class Program
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        builder.Services.AddControllers();
        builder
            .AddIdentity()
            .AddJwt()
            .AddDbContextConfig(EDatabases.SQLite)
            .AddDIConfig()
            .AddCorsPolicy();

        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen(c =>
        {
            c.SwaggerDoc("v1", new OpenApiInfo { Title = "ProFin API", Version = "v1" });

            // Adicionar configuração de segurança para JWT
            c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
            {
                Description = "JWT Authorization header using the Bearer scheme. Example: \"Authorization: Bearer {token}\"",
                Name = "Authorization",
                In = ParameterLocation.Header,
                Type = SecuritySchemeType.ApiKey,
                Scheme = "Bearer"
            });

            c.AddSecurityRequirement(new OpenApiSecurityRequirement{
                {
                    new OpenApiSecurityScheme{
                        Reference = new OpenApiReference{
                            Id = "Bearer",
                            Type = ReferenceType.SecurityScheme
                        }
                    }, new List<string>()
                }
            });
        });

        builder.Services.AddScoped<INotifier, Notifier>();

        var app = builder.Build();

        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "ProFin API v1");
                // c.RoutePrefix = string.Empty; // Remover ou comentar esta linha
            });
            app.UseCors("Development");
        }
        else
        {
            app.UseCors("Production");
        }

        using (var scope = app.Services.CreateScope())
        {
            var seeder = scope.ServiceProvider.GetRequiredService<DbMigrationHelper>();
            seeder.SeedData();
        }
        app.UseHttpsRedirection();
        app.UseAuthentication();
        app.UseAuthorization();

        app.MapControllers();

        app.Run();
    }
}