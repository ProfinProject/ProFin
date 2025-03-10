﻿using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProFin.Core.Models;

namespace ProFin.Data.Context
{
    public class AppDbContext : IdentityDbContext<IdentityUser<Guid>, IdentityRole<Guid>, Guid>
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

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
        }

        public override Task<int> SaveChangesAsync(CancellationToken cancellation = default)
        {
            foreach (var entry in ChangeTracker.Entries())
            {
                if (entry.Entity is Entity entity)
                {
                    switch (entry.State)
                    {
                        case EntityState.Added:
                            entity.CreatedDate = DateTime.Now;
                            break;
                        case EntityState.Modified:
                            entity.UpdatedDate = DateTime.Now;
                            entry.Property("CreatedDate").IsModified = false;
                            break;
                        case EntityState.Deleted:
                            entity.Deleted = true;
                            entity.UpdatedDate = DateTime.Now;
                            entry.Property("CreatedDate").IsModified = false;
                            entry.State = EntityState.Modified;
                            break;
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

            builder.Property(p => p.TransactionType)
                  .HasConversion<string>()
                  .HasMaxLength(1);
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