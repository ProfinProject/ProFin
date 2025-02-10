using ProFin.API.Configurations;
using ProFin.Core.Interfaces.Repositories;
using ProFin.Core.Interfaces.Services;
using ProFin.Core.Notifications;
using ProFin.Core.Services;
using ProFin.Data.Repositories;
using ProFin.Data.Seed;
using ProFin.Identity;


internal class Program
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
        // Add services to the container.

        builder.Services.AddControllers();
        builder
            .AddIdentity()
            .AddJwt()
            .AddDbContextConfig()
            .AddAutoMapperConfig()
            .AddDIConfig()
            .AddCorsPolicy();

        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();

        // Registrar o serviço INotifier
        builder.Services.AddScoped<INotifier, Notifier>();

        var app = builder.Build();

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
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
        app.UseAuthorization();

        app.MapControllers();

        app.Run();
    }
}