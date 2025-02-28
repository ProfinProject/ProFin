using ProFin.Core.Models;

namespace ProFin.Core.Interfaces.Services
{
    public interface ICategoryService : IDisposable
    {
        Task Insert(CategoryFinancialTransaction categoryFinancialTransaction);
        Task Update(CategoryFinancialTransaction categoryFinancialTransaction);
        Task Delete(Guid id);
        Task<IEnumerable<CategoryFinancialTransaction>> GetAll();
        Task<CategoryFinancialTransaction> GetById(Guid id);
        Task<bool> EnsureValidPermissionCategory(Guid categoryId);
    }
}
