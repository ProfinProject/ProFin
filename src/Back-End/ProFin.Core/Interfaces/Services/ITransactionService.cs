using ProFin.Core.Models;

namespace ProFin.Core.Interfaces.Services
{
    public interface IFinancialTransactionService : IDisposable
    {
        Task Insert(Guid userId, FinancialTransaction transaction);
        Task Update(Guid userId, FinancialTransaction transaction);
        Task Delete(Guid userId, Guid id);
        Task<IEnumerable<FinancialTransaction>> GetSince(DateTime startedDate);

    }
}
