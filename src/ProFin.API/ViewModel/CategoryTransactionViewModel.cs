using System.ComponentModel.DataAnnotations;

namespace ProFin.API.ViewModels
{
    public class CategoryTransactionViewModel
    {
        [Required]
        [StringLength(100)]
        public string Name { get; set; }

        [StringLength(250)]
        public string Description { get; set; }
    }
}
