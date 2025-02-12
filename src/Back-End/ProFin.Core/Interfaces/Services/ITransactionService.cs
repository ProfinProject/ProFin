using ProFin.Core.Models;

namespace ProFin.Core.Interfaces.Services
{
    public interface ITransactionService : IDisposable
    {
        Task Insert(Transaction transaction);
        Task Update(Transaction transaction);
        Task Delete(Guid id);
    }
}
