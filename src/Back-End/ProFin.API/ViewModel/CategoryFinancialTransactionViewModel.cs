using System.ComponentModel.DataAnnotations;

namespace ProFin.API.ViewModel
{
    public class CategoryFinancialTransactionViewModel
    {
        public Guid Id { get; set; }

        [Required(ErrorMessage = "The field {0} is required")]
        public string Name { get; set; }

        public string Description { get; set; }

        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool Deleted { get; set; }
    }
}