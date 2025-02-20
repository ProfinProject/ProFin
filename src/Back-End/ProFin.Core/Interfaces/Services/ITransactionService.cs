using ProFin.Core.Models;

namespace ProFin.Core.Interfaces.Services
{
    public interface IFinancialTransactionService : IDisposable
    {
        Task Insert(FinancialTransaction transaction);
        Task Update(FinancialTransaction transaction);
        Task Delete(Guid id);
    }
}
