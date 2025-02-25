using ProFin.Core.Models;

namespace ProFin.Core.Interfaces.Services
{
    public interface IBudgetService : IDisposable
    {
        Task Insert(Budget budget, Guid userId);
        Task Update(Budget budget, Guid userId);
        Task Delete(Guid id, Guid userId);
        Task<IEnumerable<Budget>> GetAllBudgetsAsync(Guid userId);
        Task<Budget> GetBudgetByIdAsync(Guid id, Guid userId);
    }
}

