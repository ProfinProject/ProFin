using ProFin.Core.Enumeradores;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProFin.Core.Models
{
    public class TransactionEntity : Entity
    {
        public double Value { get; set; }
        public string Description { get; set; }
        public CategoryTransaction CategoryTransaction { get; set; }
    }
}
