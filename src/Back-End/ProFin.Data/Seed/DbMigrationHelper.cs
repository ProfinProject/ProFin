using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using ProFin.Core.Models;
using ProFin.Data.Context;

namespace ProFin.Data.Seed
{
    public static class DbMigrationHelperExtension
    {
        public static void UseDbMigrationHelper(this WebApplication app)
        {
            DbMigrationHelper.EnsureSeedData(app).Wait();
        }
    }

    public static class DbMigrationHelper
    {
        public static async Task EnsureSeedData(WebApplication application)
        {
            var services = application.Services.CreateScope().ServiceProvider;
            await EnsureSeedData(services);
        }

        public static async Task EnsureSeedData(IServiceProvider serviceProvider)
        {
            var scope = serviceProvider.GetRequiredService<IServiceScopeFactory>().CreateScope();
            var env = scope.ServiceProvider.GetRequiredService<IWebHostEnvironment>();

            var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();

            if (env.IsDevelopment())
            {
                await context.Database.MigrateAsync();
                await EnsureSeedData(context);
            }
        }

        private static async Task EnsureSeedData(AppDbContext context)
        {
            await SeedUsers(context);
            await SeedCategories(context);
            await SeedTransactions(context);
            await SeedBudgets(context);
        }

        public static async Task SeedUsers(AppDbContext context)
        {
            if (context.Users.Any()) return;

            #region ADMIN SEED
            var ADMIN_ROLE_ID = Guid.NewGuid();
            await context.Roles.AddAsync(new IdentityRole<Guid>
            {
                Name = "SuperAdmin",
                NormalizedName = "SUPERADMIN",
                Id = ADMIN_ROLE_ID,
                ConcurrencyStamp = ADMIN_ROLE_ID.ToString()
            });

            var ADMIN_ID = Guid.NewGuid();
            var adminUser = new IdentityUser<Guid>
            {
                Id = ADMIN_ID,
                Email = "admin@blog.com",
                EmailConfirmed = true,
                UserName = "admin@blog.com",
                NormalizedUserName = "admin@blog.com".ToUpper(),
                NormalizedEmail = "admin@blog.com".ToUpper()
            };

            //set user password
            PasswordHasher<IdentityUser<Guid>> ph = new PasswordHasher<IdentityUser<Guid>>();
            adminUser.PasswordHash = ph.HashPassword(adminUser, "Teste@123");
            await context.Users.AddAsync(adminUser);

            var author = new User(adminUser.Id, "Admin", "Admin", "admin@profin.com", DateTime.Now.AddYears(20));
            await context.SystemUsers.AddAsync(author);

            await context.UserRoles.AddAsync(new IdentityUserRole<Guid>
            {
                RoleId = ADMIN_ROLE_ID,
                UserId = ADMIN_ID
            });


            #endregion
        }
        public static async Task SeedCategories(AppDbContext context)
        {
            if (!context.CategoryTransactions.Any())
            {
                IEnumerable<CategoryFinancialTransaction> categories =
                [
                    new()
                    {
                        Name = "Alimentação",
                        Description = "Gastos com alimentação e restaurantes",
                        CreatedDate = DateTime.Now,
                        Deleted = false,
                        UpdatedDate = DateTime.Now,
                    },
                    new()
                    {
                        Name = "Transporte",
                        Description = "Gastos com locomoção, combustível e transporte público",
                        CreatedDate = DateTime.Now,
                        Deleted = false,
                        UpdatedDate = DateTime.Now,
                    },
                    new()
                    {
                        Name = "Salário",
                        Description = "Recebimento de salário",
                        CreatedDate = DateTime.Now,
                        Deleted = false,
                        UpdatedDate = DateTime.Now,
                    },
                    new()
                    {
                        Name = "Moradia",
                        Description = "Gastos com aluguel, contas de água, luz, etc",
                        CreatedDate = DateTime.Now,
                        Deleted = false,
                        UpdatedDate = DateTime.Now,
                    },
                    new()
                    {
                        Name = "Lazer",
                        Description = "Gastos com entretenimento",
                        CreatedDate = DateTime.Now,
                        Deleted = false,
                        UpdatedDate = DateTime.Now,
                    }
                ];

                await context.CategoryTransactions.AddRangeAsync(categories);
                context.SaveChanges();
            }
        }

        public static async Task SeedTransactions(AppDbContext context)
        {
            var categories = context.CategoryTransactions.ToList();
            if (!context.FinancialTransactions.Any())
            {
                List<FinancialTransaction> transactionsModel = new List<FinancialTransaction>(30);
                Random random = new Random();
                double min = 50;
                double max = 5000;
                DateTime today = DateTime.Now;
                DateTime fourMonthsAgo = today.AddMonths(-4);
                for (int i = 0; i < 30; i++)
                {
                    var category = categories[random.Next(categories.Count)];
                    int randomDays = random.Next((today - fourMonthsAgo).Days + 1);
                    transactionsModel.Add(new()
                    {
                        Value = min + (random.NextDouble() * (max - min)),
                        Description = $"Gastos com {category.Name} {i}",
                        CreatedDate = fourMonthsAgo.AddDays(randomDays),
                        Deleted = false,
                        UpdatedDate = fourMonthsAgo.AddDays(randomDays),
                        CategoryFinancialTransaction = category,
                    });
                }

                await context.FinancialTransactions.AddRangeAsync(transactionsModel);
                context.SaveChanges();
            }
        }

        public static async Task SeedBudgets(AppDbContext context)
        {
            var category = context.CategoryTransactions.FirstOrDefault();
            if (!context.Budgets.Any() && category != null)
            {
                var budgets = new List<Budget>
                {
                    new Budget
                    {
                        CategoryTransactionId = category.Id,
                        Limit = 5000,
                        CurrentSpending = 0,
                        CreatedDate = DateTime.Now,
                        UpdatedDate = DateTime.Now,
                        Deleted = false
                    }
                };

                await context.Budgets.AddRangeAsync(budgets);
                context.SaveChanges();
            }
        }
    }
}

