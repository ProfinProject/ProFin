using Microsoft.EntityFrameworkCore;
using ProFin.Core.Interfaces.Repositories;
using ProFin.Core.Models;
using ProFin.Data.Context;

namespace ProFin.Data.Repositories
{
    public class TransactionRepository(AppDbContext db) : Repository<Transaction>(db), ITransactionRepository
    {
        public async Task<Transaction> GetTransactionCategoryAsync(Guid id)
        {
            return await AppDbContext.Transactions
                .Include(t => t.CategoryTransaction)
                .FirstOrDefaultAsync(t => t.Id == id);
        }
    }
}