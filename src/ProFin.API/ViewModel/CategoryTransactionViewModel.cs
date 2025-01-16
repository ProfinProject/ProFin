using System.ComponentModel.DataAnnotations;

namespace ProFin.API.ViewModel;

public class CategoryTransactionViewModel
{
    [Required(ErrorMessage = "The name is mandatory.")]
    [StringLength(100, ErrorMessage = "The name cannot be longer than 100 characters.")]
    public string Nome { get; set; }

    [StringLength(250, ErrorMessage = "The description cannot be longer than 250 characters.")]
    public string? Descricao { get; set; }
}
