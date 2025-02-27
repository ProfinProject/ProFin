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
    }
}