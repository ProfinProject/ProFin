using ProFin.API.ViewModel;
using ProFin.Core.Enumeradores;
using System.ComponentModel.DataAnnotations;

namespace ProFin.API.ViewModels
{
    public class TransactionViewModel : GenericViewModel
    {
        [Required(ErrorMessage = "O campo {0} é obrigatório.")]
        public double Value { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatório.")]
        public string Description { get; set; }
        public string CreatedDate { get; set; }
        
        public virtual CategoryTransactionViewModel CategoryFinancialTransaction { get; set; }

        public string CategoryFinancialTransactionId { get; set; }
    }
}
