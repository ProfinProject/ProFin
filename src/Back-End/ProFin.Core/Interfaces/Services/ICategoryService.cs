using ProFin.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProFin.Core.Interfaces.Services
{
    public interface ICategoryService : IDisposable
    {
        Task Insert(CategoryFinancialTransaction categoryFinancialTransaction);
        Task Update(CategoryFinancialTransaction categoryFinancialTransaction);
        Task Delete(Guid id);
    }
}
