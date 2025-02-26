using System.ComponentModel.DataAnnotations;

namespace ProFin.Core.Models
{
    public class Budget : Entity
    {
        [Required]
        public Guid CategoryTransactionId { get; set; }

        public CategoryFinancialTransaction CategoryTransaction { get; set; }

        public decimal Limit { get; set; }

        public decimal CurrentSpending { get; set; }

        public Guid UserId { get; set; }

        public User User { get; set; }

        internal void SetUset(Guid userId)
        {
            UserId = userId;
        }
    }
}
