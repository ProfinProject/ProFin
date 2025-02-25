using ProFin.Core.Models;

namespace ProFin.Core.Interfaces.Services
{
    public interface ICategoryService : IDisposable
    {
        Task Insert(CategoryFinancialTransaction categoryFinancialTransaction);
        Task Update(CategoryFinancialTransaction categoryFinancialTransaction);
        Task Delete(Guid id);
    }
}
