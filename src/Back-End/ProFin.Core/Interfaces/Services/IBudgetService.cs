using ProFin.Core.Models;

namespace ProFin.Core.Interfaces.Services
{
    public interface IBudgetService : IDisposable
    {
        Task Insert(Budget budget);
        Task Update(Budget budget);
        Task Delete(Guid id);
        Task<IEnumerable<Budget>> GetAll();
        Task<Budget> GetById(Guid id);
        Task<Budget> GetByCategoryId(Guid categoryId);
    }
}

