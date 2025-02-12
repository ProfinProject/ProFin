namespace ProFin.Core.Models
{
    public class Transaction : Entity
    {
        public double Value { get; set; }
        public string Description { get; set; }
        public CategoryTransaction CategoryTransaction { get; set; }
    }
}
