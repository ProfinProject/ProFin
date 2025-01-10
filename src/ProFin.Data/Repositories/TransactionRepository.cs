using Microsoft.EntityFrameworkCore;
using ProFin.Core.Data.Context;
using ProFin.Core.Interfaces;
using ProFin.Core.Models;

namespace ProFin.Core.Data.Repositories
{
    public class TransactionRepository(AppDbContext db) : ITransactionRepository
    {
        public async Task Add(Transaction transaction)
        {
            db.Transactions.Add(transaction);
            await db.SaveChangesAsync();
        }

        public async Task<Transaction?> GetById(long id)
        {
            return await db.Transactions.FirstOrDefaultAsync(c => c.Id == id);
        }

        public async Task Delete(Transaction transaction)
        {
            db.Transactions.Remove(transaction);
            await db.SaveChangesAsync();
        }

        public async Task<IEnumerable<Transaction>> GetAll()
        {
            return await db.Transactions.OrderBy(a => a.CreatedDate).ToListAsync();
        }

        public async Task Update(Transaction transaction)
        {
            db.Transactions.Update(transaction);
            await db.SaveChangesAsync();
        }
    }
}
