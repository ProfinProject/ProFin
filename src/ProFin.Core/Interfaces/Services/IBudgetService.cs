using ProFin.Core.Models;

namespace ProFin.Core.Interfaces.Services
{
    public interface IBudgetService : IDisposable
    {
        Task Insert(Budget budget);
        Task Update(Budget budget);
        Task Delete(Guid id);
        Task<IEnumerable<Budget>> GetAllBudgetsAsync();
        Task<Budget> GetBudgetByIdAsync(Guid id);
    }
}

