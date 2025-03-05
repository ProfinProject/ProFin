using System.ComponentModel.DataAnnotations;

namespace ProFin.API.ViewModel
{
    public class BudgetViewModel
    {
        public Guid Id { get; set; }

        [Required(ErrorMessage = "The field {0} is required.")]
        public Guid CategoryTransactionId { get; set; }

        [Required(ErrorMessage = "The field {0} is required.")]
        public double Limit { get; set; }

        public double CurrentSpending { get; set; }

        public DateTime CreatedDate { get; set; }

        public DateTime UpdatedDate { get; set; }

        public bool Deleted { get; set; }

        public CategoryFinancialTransactionViewModel CategoryTransaction { get; set; }
    }
}
