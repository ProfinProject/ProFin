using ProFin.API.ViewModel;
using ProFin.Core.Enumeradores;
using System.ComponentModel.DataAnnotations;

namespace ProFin.API.ViewModels
{
    public class TransactionViewModel : GenericViewModel
    {
        [Required(ErrorMessage = "The field {0} is required.")]
        public double Value { get; set; }

        [Required(ErrorMessage = "The field {0} is required.")]
        public string Description { get; set; }

        [Required(ErrorMessage = "The field {0} is required.")]
        public CategoryTransactionViewModel CategoryTransaction { get; set; }
    }
}
