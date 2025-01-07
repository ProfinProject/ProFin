using System.ComponentModel.DataAnnotations;

namespace ProFin.API.DTOs
{
    public class TransactionDTO
    {
        [Required(ErrorMessage = "The field {0} is required.")]
        public double Value { get; set; }

        [Required(ErrorMessage = "The field {0} is required.")]
        public string? Description { get; set; }

        [Required(ErrorMessage = "The field {0} is required.")]
        public int Type { get; set; }

        [Required(ErrorMessage = "The field {0} is required.")]
        public string? Category { get; set; }
    }
}
