using ProFin.Core.Interfaces.Repositories;
using ProFin.Core.Interfaces.Services;
using ProFin.Core.Notifications;
using ProFin.Core.Services;
using ProFin.Data.Repositories;

namespace ProFin.API.Configurations
{
    public static class DIConfiguration
    {
        public static WebApplicationBuilder AddDIConfig(this WebApplicationBuilder builder)
        {
            builder.Services.AddScoped<INotifier, Notifier>();
            builder.Services.AddScoped<ITransactionRepository, TransactionRepository>();
            builder.Services.AddScoped<ITransactionService, TransactionService>();
            builder.Services.AddScoped<ICategoryTransactionRepository, CategoryTransactionRepository>();
            


            return builder;
        }
    }
}
