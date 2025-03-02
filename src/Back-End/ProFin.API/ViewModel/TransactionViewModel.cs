using ProFin.Core.Enums;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace ProFin.API.ViewModel
{
    public class TransactionViewModel : GenericViewModel
    {
        [Required(ErrorMessage = "O campo {0} é obrigatório.")]
        public double Value { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatório.")]
        public string Description { get; set; }
        public string CreatedDate { get; set; }

        public virtual CategoryTransactionViewModel CategoryFinancialTransaction { get; set; }

        public Guid CategoryFinancialTransactionId { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public TransactionType TransactionType { get; set; }
    }
}
