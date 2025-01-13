using ProFin.Core.Business.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ProFin.Core.Business.Interfaces
{
    public interface IRepository<TEntity>
    {
        Task<IEnumerable<TEntity>> GetAll(string includes = null, Expression<Func<TEntity, bool>>? expression = null);
        Task<TEntity> GetById(int id, string? includes = null, Expression<Func<TEntity, bool>>? expression = null);
        Task Delete(TEntity entity);
        Task Update(TEntity entity);
        Task<TEntity> Add(TEntity entity);
    }
}
