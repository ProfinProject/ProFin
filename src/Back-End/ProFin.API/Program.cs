using Microsoft.OpenApi.Models;
using ProFin.API.Configurations;
using ProFin.Core.Enumeradores;
using ProFin.Core.Interfaces.Services;
using ProFin.Core.Notifications;
using ProFin.Data.IoC;
using ProFin.Data.Seed;


internal class Program
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        builder.Services.AddControllers();
        builder            
            .AddJwt()
            .AddEF(EDatabases.SQLite)
            .AddRepositories()
            .AddServices()
            .AddAutoMapperConfig()
            .AddCorsPolicy()
            .AddSwaggerConfiguration();

        builder.Services.AddEndpointsApiExplorer();       

        builder.Services.AddScoped<INotifier, Notifier>();

        var app = builder.Build();

        if (app.Environment.IsDevelopment())
        {
            app.UseSwaggerSetup();
            app.UseCors("Development");
        }
        else
        {
            app.UseCors("Production");
        }

        using (var scope = app.Services.CreateScope())
       
        app.UseHttpsRedirection();
        app.UseAuthentication();
        app.UseAuthorization();

        app.MapControllers();
        app.UseDbMigrationHelper();

        app.Run();
    }
}