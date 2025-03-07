using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using ProFin.Core.Interfaces.Repositories;
using ProFin.Core.Models;
using ProFin.Data.Context;

namespace ProFin.Data.Repositories
{
    public class FinancialTransactionRepository : Repository<FinancialTransaction>, IFinancialTransactionRepository
    {
        public FinancialTransactionRepository(AppDbContext db) : base(db)
        {
        }

        public async Task<FinancialTransaction> GetFinancialTransactionCategoryAsync(Guid id)
        {
            return await AppDbContext.FinancialTransactions
                .Include(t => t.CategoryFinancialTransaction)
                .FirstOrDefaultAsync(t => t.Id == id);
        }

        public async Task<List<CategoryAndValue>> GetCategoriesAndValueAsync()
        {
            var transactions = await AppDbContext.FinancialTransactions.Include(a => a.CategoryFinancialTransaction).Select(a => new CategoryAndValue { Category = a.CategoryFinancialTransaction.Name, TotalValue = a.Value }).ToListAsync();

            return transactions;
        }

        public async Task<MostTransactedCategory> GetMostTransactedCategoryAsync()
        {
            return await AppDbContext.FinancialTransactions.Include(a => a.CategoryFinancialTransaction).GroupBy(a => a.CategoryFinancialTransaction.Name).Select(a => new MostTransactedCategory { Category = a.Key, Quantity = a.Count() }).OrderByDescending(a => a.Quantity).FirstOrDefaultAsync();
        }

        public async Task<List<FinancialTransaction>> GetTransactionByCategory(Guid budgetCategoryId)
        {
            return await AppDbContext.FinancialTransactions.Where(a => a.CategoryFinancialTransactionId == budgetCategoryId).ToListAsync();
        }
    }
}