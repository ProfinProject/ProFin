using ProFin.Core.Models;

namespace ProFin.Core.Interfaces.Repositories
{
    public interface ITransactionRepository: IRepository<Transaction>
    {
        Task<Transaction> GetTransactionCategoryAsync(Guid id);
    }
}
