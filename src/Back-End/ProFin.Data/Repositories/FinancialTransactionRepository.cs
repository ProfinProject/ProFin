using Microsoft.EntityFrameworkCore;
using ProFin.Core.Interfaces.Repositories;
using ProFin.Core.Models;
using ProFin.Data.Context;

namespace ProFin.Data.Repositories
{
    public class FinancialTransactionRepository(AppDbContext db) : Repository<FinancialTransaction>(db), IFinancialTransactionRepository
    {
        public async Task<FinancialTransaction> GetFinancialTransactionCategoryAsync(Guid id)
        {
            return await AppDbContext.FinancialTransactions
                .Include(t => t.CategoryFinancialTransaction)
                .FirstOrDefaultAsync(t => t.Id == id);
        }
    }
}