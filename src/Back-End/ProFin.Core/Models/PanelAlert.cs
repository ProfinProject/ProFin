namespace ProFin.Core.Models;

public class PanelAlert
{
    public string Budget { get; set; }

    public decimal PercentageBudget { get; set; }

    public decimal TotalValueUsed { get; set; }

    public decimal BudgetValue { get; set; }

    public string Description { get; set; }

    public Guid CategoryId { get; set; }

    public string ClassIcon { get; set; }
}