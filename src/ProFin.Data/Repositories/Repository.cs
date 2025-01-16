using Microsoft.EntityFrameworkCore;
using ProFin.Core.Business.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ProFin.Core.Data.Repositories
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : class, new()
    {
        private DbContext _dbContext { get; set; }
        private DbSet<TEntity> _dbset { get; set; }

        public Repository(DbContext dbContext)
        {
            try
            {
                _dbContext = dbContext;
                _dbset = _dbContext.Set<TEntity>();
                _dbset.AsTracking();
            }
            catch (Exception ex)
            {
                var error = ex.Message;
                throw;
            }
        }

        public async Task<IEnumerable<TEntity>> GetAll(string? includes = null, Expression<Func<TEntity, bool>>? expression = null)
        {
            IQueryable<TEntity> query = _dbset;

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

        public async Task<TEntity> GetById(long id, string? includes = null, Expression<Func<TEntity, bool>>? expression = null)
        {
            IQueryable<TEntity> query = _dbset;

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

            return await query.FirstOrDefaultAsync(e => EF.Property<int>(e, "Id") == id);
        }

        public async Task Delete(TEntity entity)
        {
            _dbset.Remove(entity);
           await _dbContext.SaveChangesAsync();
        }

        public async Task Update(TEntity entity)
        {
            _dbset.Update(entity);
            await _dbContext.SaveChangesAsync();
        }

        public async Task<TEntity> Add(TEntity entity)
        {
            await _dbset.AddAsync(entity);

            await _dbContext.SaveChangesAsync();

            return entity;
        }

    }
}
