using ProFin.Core.Models;

namespace ProFin.Core.Interfaces.Repositories
{
    public interface ITransactionRepository: IRepository<TransactionEntity>
    {
        Task<TransactionEntity> GetTransactionCategoryAsync(Guid id);
    }
}
