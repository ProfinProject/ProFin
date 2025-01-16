using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProFin.Core.Business.Models;

public class CategoryTransaction : Entity
{
    [Required]
    [StringLength(100)]
    public string Name { get; set; }

    [StringLength(250)]
    public string Description { get; set; }
}
