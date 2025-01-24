using ProFin.API.Configurations;
using ProFin.Core.Interfaces.Repositories;
using ProFin.Data.Repositories;
using ProFin.Data.Seed;
using ProFin.Identity;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder
    .AddIdentity()
    .AddDbContextConfig()
    .AddAutoMapperConfig()
    .AddDIConfig();
  

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<ICategoryTransactionRepository, CategoryTransactionRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
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
