using ProFin.Core.Models;
using ProFin.Data.Context;

namespace ProFin.Data.Seed
{
    public class DbMigrationHelper
    {
        private readonly AppDbContext _context;

        public DbMigrationHelper(AppDbContext context)
        {
            _context = context;
        }

        public void SeedData()
        {
            SeedCategories();
        }

        public void SeedCategories()
        {
            if (!_context.CategoryTransactions.Any())
            {
                IEnumerable<CategoryTransaction> categories = new List<CategoryTransaction>()
            {
                new CategoryTransaction()
                {
                    Name = "Alimentação",
                    Description = "Alimentação",
                    CreatedDate = DateTime.Now,
                    Deleted = false,
                    UpdatedDate = DateTime.Now,
                },
                new CategoryTransaction()
                {
                    Name = "Transporte",
                    Description = "Locomoção",
                    CreatedDate = DateTime.Now,
                    Deleted = false,
                    UpdatedDate = DateTime.Now,
                },
            };

                _context.CategoryTransactions.AddRange(categories);
                _context.SaveChanges();
            }
        }
    }
}
