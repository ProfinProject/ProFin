namespace ProFin.Core.Business.Models
{
    public class Transaction : Entity
    {
        public double Value { get; set; }
        public string? Description { get; set; }
        public int Type { get; set; }
        public string? Category { get; set; }
    }
}
