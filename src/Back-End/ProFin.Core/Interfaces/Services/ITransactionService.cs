using ProFin.Core.Models;

namespace ProFin.Core.Interfaces.Services
{
    public interface ITransactionService : IDisposable
    {
        Task Insert(FinancialTransaction transaction);
        Task Update(FinancialTransaction transaction);
        Task Delete(Guid id);
    }
}
