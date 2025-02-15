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
            builder.Services.AddScoped<IFinancialTransactionRepository, FinancialTransactionRepository>();
            builder.Services.AddScoped<ITransactionService, TransactionService>();
            builder.Services.AddScoped<ICategoryTransactionRepository, CategoryTransactionRepository>();
            builder.Services.AddScoped<ICategoryService, CategoryService>();
            builder.Services.AddScoped<IUserRepository, UserRepository>();
            builder.Services.AddScoped<IBudgetRepository, BudgetRepository>();
            builder.Services.AddScoped<IBudgetService, BudgetService>();
            builder.Services.AddScoped<IUserService, UserService>();

            return builder;
        }
    }
}
