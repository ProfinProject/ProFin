using ProFin.Core.Models;

namespace ProFin.Core.Interfaces.Repositories
{
    public interface IFinancialTransactionRepository : IRepository<FinancialTransaction>
    {
        Task<FinancialTransaction> GetFinancialTransactionCategoryAsync(Guid id);
    }
}
