using ProFin.Core.Models;
using ProFin.Data.Context;

namespace ProFin.Data.Seed
{
    public class DbMigrationHelper(AppDbContext context)
    {
        private readonly AppDbContext _context = context;

        public void SeedData()
        {
            SeedCategories();
            SeedTransactions();
        }

        public void SeedCategories()
        {
            if (!_context.CategoryTransactions.Any())
            {
                IEnumerable<CategoryFinancialTransaction> categories =
            [
                new()
                {
                    Name = "Alimentação",
                    Description = "Alimentação",
                    CreatedDate = DateTime.Now,
                    Deleted = false,
                    UpdatedDate = DateTime.Now,
                },
                new ()
                {
                    Name = "Transporte",
                    Description = "Locomoção",
                    CreatedDate = DateTime.Now,
                    Deleted = false,
                    UpdatedDate = DateTime.Now,
                },
            ];

                _context.CategoryTransactions.AddRange(categories);
                _context.SaveChanges();
            }
        }

        public void SeedTransactions()
        {
            var category = _context.CategoryTransactions.FirstOrDefault();
            if (!_context.FinancialTransactions.Any())
            {
                IEnumerable<FinancialTransaction> transactionsModel =
            [
                new()
                {
                    Value = 2254.56,
                    Description = "Gastos com alimentação",
                    CreatedDate = DateTime.Now,
                    Deleted = false,
                    UpdatedDate = DateTime.Now,
                    CategoryFinancialTransaction = category
                },
                new ()
                {
                    Value = 800.00,
                    Description = "Gastos com transporte",
                    CreatedDate = DateTime.Now,
                    Deleted = false,
                    UpdatedDate = DateTime.Now,
                    CategoryFinancialTransaction = category
                },
            ];

                _context.FinancialTransactions.AddRange(transactionsModel);
                _context.SaveChanges();
            }
        }

        public void SeedBudgets()
        {
            var category = _context.CategoryTransactions.FirstOrDefault();
            if (!_context.Budgets.Any() && category != null)
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

                _context.Budgets.AddRange(budgets);
                _context.SaveChanges();
            }
        }
    }
}
