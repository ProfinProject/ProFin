using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProFin.Core.Interfaces;
using ProFin.Core.Models;
using System.Security.Claims;

namespace ProFin.Data.Context
{
    public class AppDbContext : IdentityDbContext<IdentityUser<Guid>, IdentityRole<Guid>, Guid>
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IAppUserService _userService;

        public AppDbContext(DbContextOptions<AppDbContext> options, IHttpContextAccessor httpContextAccessor, IAppUserService userService) : base(options)
        {
            _httpContextAccessor = httpContextAccessor;
            _userService = userService;
        }

        public DbSet<FinancialTransaction> FinancialTransactions { get; set; }
        public DbSet<CategoryFinancialTransaction> CategoryTransactions { get; set; }
        public DbSet<Budget> Budgets { get; set; }
        public DbSet<User> SystemUsers { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.ApplyConfiguration(new FinancialTransactionConfiguration());
            builder.ApplyConfiguration(new CategoryFinancialTransactionConfiguration());
            builder.ApplyConfiguration(new BudgetConfiguration());
            builder.ApplyConfiguration(new UserConfiguration());

            var userId = _userService.GetId();
            if (userId.HasValue && userId.Value != Guid.Empty)
            {
                builder.Entity<FinancialTransaction>().HasQueryFilter(ft => ft.UserId == userId);
                builder.Entity<CategoryFinancialTransaction>().HasQueryFilter(ct => ct.UserId == userId);
                builder.Entity<Budget>().HasQueryFilter(b => b.UserId == userId);
            }

            builder.Entity<Budget>()
                .HasIndex(b => b.CategoryTransactionId)
                .IsUnique();
        }

        private Guid GetUserId()
        {
            var userIdClaim = _httpContextAccessor.HttpContext?.User?.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            return Guid.TryParse(userIdClaim, out var userId) ? userId : Guid.Empty;
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

            builder.HasOne(ft => ft.CategoryFinancialTransaction)
                   .WithMany()
                   .HasForeignKey(ft => ft.CategoryFinancialTransactionId)
                   .OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(ft => ft.User)
                  .WithMany()
                  .HasForeignKey(ft => ft.UserId)
                  .OnDelete(DeleteBehavior.Cascade);
        }
    }

    public class CategoryFinancialTransactionConfiguration : IEntityTypeConfiguration<CategoryFinancialTransaction>
    {
        public void Configure(EntityTypeBuilder<CategoryFinancialTransaction> builder)
        {
            builder.HasKey(a => a.Id);
            builder.ToTable("CategoriesTransaction");

            builder.HasOne(ct => ct.User)
                 .WithMany()
                 .HasForeignKey(ct => ct.UserId)
                 .OnDelete(DeleteBehavior.Cascade);
        }
    }
    public class BudgetConfiguration : IEntityTypeConfiguration<Budget>
    {
        public void Configure(EntityTypeBuilder<Budget> builder)
        {
            builder.HasKey(b => b.Id);
            builder.ToTable("Budgets");

            builder.HasOne(b => b.CategoryTransaction)
                   .WithMany()
                   .HasForeignKey(b => b.CategoryTransactionId)
                   .OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(b => b.User)
                   .WithMany()
                   .HasForeignKey(b => b.UserId)
                   .OnDelete(DeleteBehavior.Cascade);
        }
    }


}
