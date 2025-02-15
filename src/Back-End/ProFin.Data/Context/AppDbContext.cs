using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProFin.Core.Models;

namespace ProFin.Data.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<FinancialTransaction> FinancialTransactions { get; set; }
        public DbSet<CategoryFinancialTransaction> CategoryTransactions { get; set; }
        public DbSet<Budget> Budgets { get; set; }
        public DbSet<User> User { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.ApplyConfiguration(new FinancialTransactionConfiguration());
            builder.ApplyConfiguration(new CategoryFinancialTransactionConfiguration());
            builder.ApplyConfiguration(new BudgetConfiguration());
            builder.ApplyConfiguration(new UserConfiguration());
        }

        public override Task<int> SaveChangesAsync(CancellationToken cancellation = default)
        {
            foreach (var entry in ChangeTracker.Entries())
            {
                if (entry.Entity is Entity)
                {
                    if (entry.State == EntityState.Added)
                    {
                        entry.Property("CreatedDate").CurrentValue = DateTime.Now;
                    }
                    if (entry.State == EntityState.Modified)
                    {
                        entry.Property("UpdatedDate").CurrentValue = DateTime.Now;
                        entry.Property("CreatedDate").IsModified = false;
                    }

                    if (entry.State == EntityState.Deleted)
                    {
                        entry.Property("Deleted").CurrentValue = true;
                        entry.Property("UpdatedDate").CurrentValue = DateTime.Now;
                        entry.Property("CreatedDate").IsModified = false;
                        entry.State = EntityState.Modified;
                    }
                }

            }
            return base.SaveChangesAsync(cancellation);
        }
    }

    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.HasKey(a => a.Id);

            builder.ToTable("Users");
        }
    }

    public class FinancialTransactionConfiguration : IEntityTypeConfiguration<FinancialTransaction>
    {
        public void Configure(EntityTypeBuilder<FinancialTransaction> builder)
        {
            builder.HasKey(a => a.Id);

            builder.ToTable("FinancialTransactions");

            builder.HasOne(c => c.CategoryFinancialTransaction);
        }
    }

    public class CategoryFinancialTransactionConfiguration : IEntityTypeConfiguration<CategoryFinancialTransaction>
    {
        public void Configure(EntityTypeBuilder<CategoryFinancialTransaction> builder)
        {
            builder.HasKey(a => a.Id);

            builder.ToTable("CategoriesTransaction");
        }
    }
    public class BudgetConfiguration : IEntityTypeConfiguration<Budget>
    {
        public void Configure(EntityTypeBuilder<Budget> builder)
        {
            builder.HasKey(b => b.Id);
            builder.HasOne(b => b.CategoryTransaction)
                   .WithMany()
                   .HasForeignKey(b => b.CategoryTransactionId);

            builder.ToTable("Budgets");
        }
    }
}
