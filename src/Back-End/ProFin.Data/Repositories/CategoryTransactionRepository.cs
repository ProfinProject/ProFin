using Microsoft.EntityFrameworkCore;
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
    }
}
