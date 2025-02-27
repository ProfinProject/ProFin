using System.ComponentModel.DataAnnotations;

namespace ProFin.Core.Models;

public class CategoryFinancialTransaction : Entity
{

    [Required]
    [StringLength(100)]
    public string Name { get; set; }

    [StringLength(250)]
    public string Description { get; set; }

    public bool IsPattern { get; set; }

    public Guid UserId { get; set; }

    public User User { get; set; }

    internal void SetUset(Guid userId)
    {
        UserId = userId;
    }
}
