using System.ComponentModel.DataAnnotations;

namespace ProFin.Core.Models;

public class CategoryTransaction : Entity
{

    [Required]
    [StringLength(100)]
    public string Name { get; set; }

    [StringLength(250)]
    public string Description { get; set; }
}
