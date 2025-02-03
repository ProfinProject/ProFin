using ProFin.Core.Models;

namespace ProFin.Core.Interfaces.Services
{
    public interface ITransactionService : IDisposable
    {
        Task Insert(TransactionEntity transaction);
        Task Update(TransactionEntity transaction);
        Task Delete(Guid id);
    }
}
