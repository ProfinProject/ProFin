using ProFin.Core.Models;

namespace ProFin.Core.Interfaces.Repositories;

public interface ICategoryTransactionRepository : IRepository<CategoryFinancialTransaction>
{
    Task<List<FinancialTransaction>> GetTransactionsByCategoryAsync(Guid categoryId);
    Task<bool> HasTransactionsAsync(Guid categoryId);
    Task MoveTransactionsToCategoryAsync(Guid categoryId);
}
