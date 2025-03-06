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
                Email = "admin@profin.com",
                EmailConfirmed = true,
                UserName = "admin@profin.com",
                NormalizedUserName = "admin@profin.com".ToUpper(),
                NormalizedEmail = "admin@profin.com".ToUpper(),
                LockoutEnabled = true,
                SecurityStamp = ADMIN_ROLE_ID.ToString(),
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

            context.SaveChanges();
            #endregion

            #region NON-ADMIN USERS SEED
            var user1Id = Guid.NewGuid();
            var user1 = new IdentityUser<Guid>
            {
                Id = user1Id,
                Email = "user1@profin.com",
                EmailConfirmed = true,
                UserName = "user1@profin.com",
                NormalizedUserName = "user1@profin.com".ToUpper(),
                NormalizedEmail = "user1@profin.com".ToUpper(),
                LockoutEnabled = true,
                SecurityStamp = Guid.NewGuid().ToString(),
            };
            user1.PasswordHash = ph.HashPassword(user1, "Teste@123");
            await context.Users.AddAsync(user1);

            var user1Author = new User(user1.Id, "User1", "User1", "user1@profin.com", DateTime.Now.AddYears(20));
            await context.SystemUsers.AddAsync(user1Author);

            var user2Id = Guid.NewGuid();
            var user2 = new IdentityUser<Guid>
            {
                Id = user2Id,
                Email = "user2@profin.com",
                EmailConfirmed = true,
                UserName = "user2@profin.com",
                NormalizedUserName = "user2@profin.com".ToUpper(),
                NormalizedEmail = "user2@profin.com".ToUpper(),
                LockoutEnabled = true,
                SecurityStamp = Guid.NewGuid().ToString(),
            };
            user2.PasswordHash = ph.HashPassword(user2, "Teste@123");
            await context.Users.AddAsync(user2);

            var user2Author = new User(user2.Id, "User2", "User2", "user2@profin.com", DateTime.Now.AddYears(20));
            await context.SystemUsers.AddAsync(user2Author);

            context.SaveChanges();
            #endregion
        }

        public static async Task SeedCategories(AppDbContext context)
        {
            var adminUser = context.SystemUsers.FirstOrDefault(u => u.Email == "admin@profin.com");
            var user1 = context.SystemUsers.FirstOrDefault(u => u.Email == "user1@profin.com");
            var user2 = context.SystemUsers.FirstOrDefault(u => u.Email == "user2@profin.com");

            if (adminUser == null || user1 == null || user2 == null) return;

            if (!context.CategoryTransactions.Any())
            {
                var categories = new List<CategoryFinancialTransaction>
                {
                    // Categorias para adminUser
                    new()
                    {
                        Name = "Alimentação",
                        Description = "Gastos com alimentação e restaurantes",
                        CreatedDate = DateTime.Now,
                        Deleted = false,
                        UpdatedDate = DateTime.Now,
                        IsPattern = true,
                        UserId = adminUser.Id
                    },
                    new()
                    {
                        Name = "Transporte",
                        Description = "Gastos com locomoção, combustível e transporte público",
                        CreatedDate = DateTime.Now,
                        Deleted = false,
                        UpdatedDate = DateTime.Now,
                        IsPattern = true,
                        UserId = adminUser.Id
                    },
                    new()
                    {
                        Name = "Salário",
                        Description = "Recebimento de salário",
                        CreatedDate = DateTime.Now,
                        Deleted = false,
                        UpdatedDate = DateTime.Now,
                        UserId = adminUser.Id
                    },
                    new()
                    {
                        Name = "Moradia",
                        Description = "Gastos com aluguel, contas de água, luz, etc",
                        CreatedDate = DateTime.Now,
                        Deleted = false,
                        UpdatedDate = DateTime.Now,
                        UserId = adminUser.Id
                    },
                    new()
                    {
                        Name = "Lazer",
                        Description = "Gastos com entretenimento",
                        CreatedDate = DateTime.Now,
                        Deleted = false,
                        UpdatedDate = DateTime.Now,
                        IsPattern = true,
                        UserId = adminUser.Id
                    },
                    new()
                    {
                        Name = "Outros",
                        Description = "Gastos não específicos",
                        CreatedDate = DateTime.Now,
                        Deleted = false,
                        UpdatedDate = DateTime.Now,
                        IsPattern = true,
                        UserId = adminUser.Id
                    },
                    // Categorias para user1
                    new()
                    {
                        Name = "Educação",
                        Description = "Gastos com educação e cursos",
                        CreatedDate = DateTime.Now,
                        Deleted = false,
                        UpdatedDate = DateTime.Now,
                        UserId = user1.Id
                    },
                    new()
                    {
                        Name = "Saúde",
                        Description = "Gastos com saúde e medicamentos",
                        CreatedDate = DateTime.Now,
                        Deleted = false,
                        UpdatedDate = DateTime.Now,
                        UserId = user1.Id
                    },
                    // Categorias para user2
                    new()
                    {
                        Name = "Viagem",
                        Description = "Gastos com viagens e passeios",
                        CreatedDate = DateTime.Now,
                        Deleted = false,
                        UpdatedDate = DateTime.Now,
                        UserId = user2.Id
                    },
                    new()
                    {
                        Name = "Investimentos",
                        Description = "Gastos com investimentos e poupança",
                        CreatedDate = DateTime.Now,
                        Deleted = false,
                        UpdatedDate = DateTime.Now,
                        UserId = user2.Id
                    }
                };

                await context.CategoryTransactions.AddRangeAsync(categories);
                context.SaveChanges();
            }
        }

        public static async Task SeedTransactions(AppDbContext context)
        {
            var adminUser = context.SystemUsers.FirstOrDefault(u => u.Email == "admin@profin.com");
            var user1 = context.SystemUsers.FirstOrDefault(u => u.Email == "user1@profin.com");
            var user2 = context.SystemUsers.FirstOrDefault(u => u.Email == "user2@profin.com");

            if (adminUser == null || user1 == null || user2 == null) return;

            var adminCategories = context.CategoryTransactions.Where(ct => ct.UserId == adminUser.Id).ToList();
            var user1Categories = context.CategoryTransactions.Where(ct => ct.UserId == user1.Id).ToList();
            var user2Categories = context.CategoryTransactions.Where(ct => ct.UserId == user2.Id).ToList();

            if (!context.FinancialTransactions.Any())
            {
                var transactions = new List<FinancialTransaction>();
                Random random = new Random();
                double min = 50;
                double max = 5000;
                DateTime today = DateTime.Now;
                DateTime fourMonthsAgo = today.AddMonths(-4);

                // Transações para adminUser
                for (int i = 0; i < 30; i++)
                {
                    var category = adminCategories[random.Next(adminCategories.Count)];
                    int randomDays = random.Next((today - fourMonthsAgo).Days + 1);
                    transactions.Add(new FinancialTransaction
                    {
                        Value = (decimal)(min + (random.NextDouble() * (max - min))),
                        Description = $"Gastos com {category.Name} {i}",
                        CreatedDate = fourMonthsAgo.AddDays(randomDays),
                        Deleted = false,
                        UpdatedDate = fourMonthsAgo.AddDays(randomDays),
                        CategoryFinancialTransactionId = category.Id,
                        UserId = adminUser.Id,
                        TransactionType = i < 25 ? Core.Enums.TransactionType.E : Core.Enums.TransactionType.S
                    });
                }

                // Transações para user1
                for (int i = 0; i < 20; i++)
                {
                    var category = user1Categories[random.Next(user1Categories.Count)];
                    int randomDays = random.Next((today - fourMonthsAgo).Days + 1);
                    transactions.Add(new FinancialTransaction
                    {
                        Value = (decimal)(min + (random.NextDouble() * (max - min))),
                        Description = $"Gastos com {category.Name} {i}",
                        CreatedDate = fourMonthsAgo.AddDays(randomDays),
                        Deleted = false,
                        UpdatedDate = fourMonthsAgo.AddDays(randomDays),
                        CategoryFinancialTransactionId = category.Id,
                        UserId = user1.Id,
                        TransactionType = i < 15 ? Core.Enums.TransactionType.E : Core.Enums.TransactionType.S
                    });
                }

                // Transações para user2
                for (int i = 0; i < 20; i++)
                {
                    var category = user2Categories[random.Next(user2Categories.Count)];
                    int randomDays = random.Next((today - fourMonthsAgo).Days + 1);
                    transactions.Add(new FinancialTransaction
                    {
                        Value = (decimal)(min + (random.NextDouble() * (max - min))),
                        Description = $"Gastos com {category.Name} {i}",
                        CreatedDate = fourMonthsAgo.AddDays(randomDays),
                        Deleted = false,
                        UpdatedDate = fourMonthsAgo.AddDays(randomDays),
                        CategoryFinancialTransactionId = category.Id,
                        UserId = user2.Id,
                        TransactionType = i < 15 ? Core.Enums.TransactionType.E : Core.Enums.TransactionType.S
                    });
                }

                await context.FinancialTransactions.AddRangeAsync(transactions);
                context.SaveChanges();
            }
        }

        public static async Task SeedBudgets(AppDbContext context)
        {
            var adminUser = await context.SystemUsers.FirstOrDefaultAsync(u => u.Email == "admin@profin.com");
            var user1 = await context.SystemUsers.FirstOrDefaultAsync(u => u.Email == "user1@profin.com");
            var user2 = await context.SystemUsers.FirstOrDefaultAsync(u => u.Email == "user2@profin.com");

            if (adminUser == null || user1 == null || user2 == null) return;

            var adminCategories = await context.CategoryTransactions.Where(ct => ct.UserId == adminUser.Id).ToListAsync();
            var user1Categories = await context.CategoryTransactions.Where(ct => ct.UserId == user1.Id).ToListAsync();
            var user2Categories = await context.CategoryTransactions.Where(ct => ct.UserId == user2.Id).ToListAsync();

            if (!await context.Budgets.AnyAsync())
            {
                var budgets = new List<Budget>();

                // Orçamentos para adminUser
                foreach (var category in adminCategories)
                {
                    budgets.Add(new Budget
                    {
                        CategoryTransactionId = category.Id,
                        Limit = 5000,
                        CreatedDate = DateTime.Now,
                        UpdatedDate = DateTime.Now,
                        Deleted = false,
                        UserId = adminUser.Id
                    });
                }

                // Orçamentos para user1
                foreach (var category in user1Categories)
                {
                    budgets.Add(new Budget
                    {
                        CategoryTransactionId = category.Id,
                        Limit = 3000,
                        CreatedDate = DateTime.Now,
                        UpdatedDate = DateTime.Now,
                        Deleted = false,
                        UserId = user1.Id
                    });
                }

                // Orçamentos para user2
                foreach (var category in user2Categories)
                {
                    budgets.Add(new Budget
                    {
                        CategoryTransactionId = category.Id,
                        Limit = 4000,
                        CreatedDate = DateTime.Now,
                        UpdatedDate = DateTime.Now,
                        Deleted = false,
                        UserId = user2.Id
                    });
                }

                await context.Budgets.AddRangeAsync(budgets);
                context.SaveChanges();
            }
        }
    }
}
