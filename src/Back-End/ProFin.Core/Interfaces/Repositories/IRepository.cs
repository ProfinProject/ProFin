using System.Linq.Expressions;

namespace ProFin.Core.Interfaces.Repositories
{
    public interface IRepository<TEntity> : IDisposable
    {
        Task<IEnumerable<TEntity>> GetAll(string includes = null, Expression<Func<TEntity, bool>> expression = null);
        Task<TEntity> GetById(Guid id, string includes = null, Expression<Func<TEntity, bool>> expression = null);
        Task Delete(TEntity entity);
        Task Update(TEntity entity);
        Task<TEntity> Add(TEntity entity);
    }
}
