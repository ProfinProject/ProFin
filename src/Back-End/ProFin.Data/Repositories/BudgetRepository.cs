using Microsoft.EntityFrameworkCore;
using ProFin.Core.Interfaces.Repositories;
using ProFin.Core.Models;
using ProFin.Data.Context;

namespace ProFin.Data.Repositories
{
    public class BudgetRepository : Repository<Budget>, IBudgetRepository
    {
        public BudgetRepository(AppDbContext db) : base(db) { }

        public async Task<Budget> GetByCategoryId(Guid categoryId)
        {
            return await DbSet.FirstOrDefaultAsync(e => e.CategoryTransactionId == categoryId);
        }

    }
}
