using System.ComponentModel.DataAnnotations;

namespace ProFin.Core.Models
{
    public class Budget : Entity
    {
        [Required]
        public Guid CategoryTransactionId { get; set; }
        public CategoryTransaction CategoryTransaction { get; set; }
        public decimal Limit { get; set; }
        public decimal CurrentSpending { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
