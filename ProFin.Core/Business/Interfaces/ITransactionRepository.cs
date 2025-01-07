using ProFin.Core.Business.Models;

namespace ProFin.Core.Business.Interfaces
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
