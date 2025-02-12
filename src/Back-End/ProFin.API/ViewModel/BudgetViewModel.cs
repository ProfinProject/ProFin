using System.ComponentModel.DataAnnotations;

namespace ProFin.API.ViewModel
{
    public class BudgetViewModel
    {
        public Guid Id { get; set; }

        [Required(ErrorMessage = "The field {0} is required.")]
        public Guid CategoryTransactionId { get; set; }

        [Required(ErrorMessage = "The field {0} is required.")]
        public decimal Limit { get; set; }

        public decimal CurrentSpending { get; set; }
    }
}
