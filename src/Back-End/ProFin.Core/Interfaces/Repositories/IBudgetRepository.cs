using ProFin.Core.Models;
using System.Linq.Expressions;

namespace ProFin.Core.Interfaces.Repositories
{
    public interface IBudgetRepository : IRepository<Budget>
    {
        Task<Budget> GetByCategoryId(Guid categoryId);

        Task<Budget> FindAsync(Expression<Func<Budget, bool>> predicate);
    }
}
