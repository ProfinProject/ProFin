namespace ProFin.Core.Models
{
    public class FinancialTransaction : Entity
    {
        public double Value { get; set; }

        public string Description { get; set; }

        public Guid CategoryFinancialTransactionId { get; set; }

        public CategoryFinancialTransaction CategoryFinancialTransaction { get; set; }

        public Guid UserId { get; set; }

        public User User { get; set; }
    }
}
