using Microsoft.EntityFrameworkCore;
using ProFin.Core.Interfaces.Repositories;
using ProFin.Core.Models;
using ProFin.Data.Context;
using System.Linq.Expressions;

namespace ProFin.Data.Repositories
{
    public abstract class Repository<TEntity> : IRepository<TEntity> where TEntity : Entity, new()
    {
        protected readonly AppDbContext AppDbContext;
        protected readonly DbSet<TEntity> DbSet;

        public Repository(AppDbContext appDbContext)
        {
            try
            {
                AppDbContext = appDbContext;
                DbSet = appDbContext.Set<TEntity>();
                DbSet.AsTracking();
            }
            catch (Exception ex)
            {
                var error = ex.Message;
                throw;
            }
            AppDbContext = appDbContext;
        }

        public async Task<IEnumerable<TEntity>> GetAll(string includes = null, Expression<Func<TEntity, bool>> expression = null)
        {
            IQueryable<TEntity> query = DbSet;

            if (expression != null)
                query = query.Where(expression);

            if (includes != null)
            {
                foreach (var includeProp in includes.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries))
                {
                    query = query.Include(includeProp);
                }
            }

            return await query.ToListAsync();
        }

        public async Task<TEntity> GetById(Guid id, string includes = null, Expression<Func<TEntity, bool>> expression = null)
        {
            IQueryable<TEntity> query = DbSet;

            if (expression != null)
            {
                query = query.Where(expression);
            }

            if (!string.IsNullOrEmpty(includes))
            {
                foreach (var includeProp in includes.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries))
                {
                    query = query.Include(includeProp);
                }
            }

            return await query.FirstOrDefaultAsync(e => EF.Property<Guid>(e, "Id") == id);
        }

        public async Task Delete(TEntity entity)
        {
            DbSet.Remove(entity);
            await AppDbContext.SaveChangesAsync();
        }

        public async Task Update(TEntity entity)
        {
            DbSet.Update(entity);
            await AppDbContext.SaveChangesAsync();
        }

        public async Task<TEntity> Add(TEntity entity)
        {
            await DbSet.AddAsync(entity);

            await AppDbContext.SaveChangesAsync();

            return entity;
        }

        public void Dispose() => AppDbContext?.Dispose();

    }
}
