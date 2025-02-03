using ProFin.Core.Interfaces.Repositories;
using ProFin.Core.Models;
using ProFin.Data.Context;

namespace ProFin.Data.Repositories
{
    public class CategoryTransactionRepository : Repository<CategoryTransaction>, ICategoryTransactionRepository
    {
        public CategoryTransactionRepository(AppDbContext db) : base(db) { }
    }
}
