using ProFin.Core.Business.Interfaces;
using ProFin.Core.Business.Models;
using ProFin.Core.Data.Context;
using ProFin.Core.Data.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProFin.Data.Repositories;

public class CategoryTransactionRepository : Repository<CategoryTransaction>, ICategoryTransactionRepository
{
    public CategoryTransactionRepository(AppDbContext db) : base(db) { }
}
