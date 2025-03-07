using ProFin.Core.Models;
using ProFin.Core.Services;

namespace ProFin.Core.Interfaces.Repositories
{
    public interface IFinancialTransactionRepository : IRepository<FinancialTransaction>
    {
        Task<FinancialTransaction> GetFinancialTransactionCategoryAsync(Guid id);

        Task<List<CategoryAndValue>> GetCategoriesAndValueAsync();

        Task<MostTransactedCategory> GetMostTransactedCategoryAsync();

        Task<List<FinancialTransaction>> GetTransactionByCategory(Guid budgetCategoryId);
    }
}
