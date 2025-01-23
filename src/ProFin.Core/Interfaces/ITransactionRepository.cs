using ProFin.Core.Models;

namespace ProFin.Core.Interfaces
{
    public interface ITransactionRepository
    {
        Task<Transaction?> GetById(long id);

        Task<IEnumerable<Transaction>> GetAll();

        Task Add(Transaction transaction);

        Task Update(Transaction transaction);

        Task Delete(Transaction transaction);
    }
}
