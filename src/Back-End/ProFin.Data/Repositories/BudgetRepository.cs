using Microsoft.EntityFrameworkCore;
using ProFin.Core.Interfaces.Repositories;
using ProFin.Core.Models;
using ProFin.Data.Context;
using System.Linq.Expressions;

namespace ProFin.Data.Repositories
{
    public class BudgetRepository : Repository<Budget>, IBudgetRepository
    {
        public BudgetRepository(AppDbContext db) : base(db) { }

        public async Task<Budget> GetByCategoryId(Guid categoryId)
        {
            return await DbSet.FirstOrDefaultAsync(e => e.CategoryTransactionId == categoryId);
        }

        public async Task<Budget> FindAsync(Expression<Func<Budget, bool>> predicate)
        {
            return await DbSet.FirstOrDefaultAsync(predicate);
        }

    }
}
