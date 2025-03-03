using Microsoft.EntityFrameworkCore;
using ProFin.API.ViewModel;
using ProFin.Core.Interfaces.Repositories;
using ProFin.Core.Models;
using ProFin.Data.Context;

namespace ProFin.Data.Repositories
{
    public class CategoryTransactionRepository : Repository<CategoryFinancialTransaction>, ICategoryTransactionRepository
    {
        public CategoryTransactionRepository(AppDbContext db) : base(db) { }

        public async Task<List<FinancialTransaction>> GetTransactionsByCategoryAsync(Guid categoryId)
        {
            var transactions = await AppDbContext.FinancialTransactions
                .Where(a => categoryId.CompareTo(a.CategoryFinancialTransactionId) == 0)
                .Select(a => a).ToListAsync();

            return transactions;
        }

        public async Task<bool> HasTransactionsAsync(Guid categoryId)
        {
            var transactions = await this.GetTransactionsByCategoryAsync(categoryId);
            return transactions.Count > 0;
        }

        public async Task MoveTransactionsToCategoryAsync(Guid categoryId)
        {
            var transactions = await this.GetTransactionsByCategoryAsync(categoryId);

            //Por enquanto move tudo para outros
            var categoryOther = await AppDbContext.CategoryTransactions.FirstOrDefaultAsync(a => a.Name.Equals("Outros") && a.IsPattern);

            foreach (var transaction in transactions)
            {
                transaction.CategoryFinancialTransactionId = categoryOther.Id;
            }

            await AppDbContext.SaveChangesAsync();
        }

        public async Task<List<Panel>> GetPanel()
        {
            List<Panel> panels = new List<Panel>();
            var transactions = await AppDbContext.FinancialTransactions.Include(a => a.CategoryFinancialTransaction).Select(a => new EntityResume() { Category = a.CategoryFinancialTransaction.Name, TotalValue = a.Value }).ToListAsync();

            var categoryPanel = transactions.GroupBy(a => a.Category).Select(a =>
                new Panel()
                {
                    TotalValue = Math.Round(a.Sum(b => b.TotalValue), 2),
                    Quantity = a.Count(),
                    MostConsumed = a.Key,
                    Title = "Categoria",
                    TitlePlural = "Categorias",
                }).OrderByDescending(a => a.TotalValue).FirstOrDefault();

            panels.Add(categoryPanel);

            var biggestBudget = AppDbContext.Budgets.Include(a => a.CategoryTransaction).OrderByDescending(a => a.Limit).FirstOrDefault();
            var panelBudget = new Panel()
            {
                Title = "Orçamento",
                TitlePlural = "Orçamentos",
                TotalValue = AppDbContext.Budgets.Sum(a => a.Limit),
                MostConsumed = biggestBudget.CategoryTransaction.Name,
                Quantity = AppDbContext.Budgets.Count()
            };

            panels.Add(panelBudget);

            var mostTransacted = AppDbContext.FinancialTransactions.Include(a => a.CategoryFinancialTransaction).GroupBy(a => a.CategoryFinancialTransaction.Name).Select(a => new { Category = a.Key, Quantity = a.Count() }).OrderByDescending(a => a.Quantity).FirstOrDefault();
            var panelTransactions = new Panel()
            {
                Title = "Transação",
                TitlePlural = "Transações",
                TotalValue = Math.Round(AppDbContext.FinancialTransactions.Sum(a => a.Value), 2),
                MostConsumed = mostTransacted.Category,
                Quantity = mostTransacted.Quantity
            };

            panels.Add(panelTransactions);

            return panels;
        }
    }

    public class EntityResume
    {
        public double TotalValue { get; set; }
        public string Category { get; set; }

    }

}
