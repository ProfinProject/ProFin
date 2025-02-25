using ProFin.Core.Models;

namespace ProFin.Core.Interfaces.Services
{
    public interface ICategoryService : IDisposable
    {
        Task Insert(Guid userId, CategoryFinancialTransaction categoryFinancialTransaction);
        Task Update(Guid userId, CategoryFinancialTransaction categoryFinancialTransaction);
        Task Delete(Guid userId, Guid id);
    }
}
