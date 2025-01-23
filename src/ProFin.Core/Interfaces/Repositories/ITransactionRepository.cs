using ProFin.Core.Models;

namespace ProFin.Core.Interfaces.Repositories
{
    public interface ITransactionRepository
    {
        Task<Transaction?> GetById(Guid id);

        Task<IEnumerable<Transaction>> GetAll();

        Task Add(Transaction transaction);

        Task Update(Transaction transaction);

        Task Delete(Transaction transaction);
    }
}
