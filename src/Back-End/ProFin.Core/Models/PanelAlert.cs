namespace ProFin.API.ViewModel;

public class PanelAlert
{
    public string Budget { get; set; }

    public double PercentageBudget { get; set; }

    public double TotalValueUsed { get; set; }

    public double BudgetValue { get; set; }

    public string Description { get; set; }

    public Guid CategoryId { get; set; }
}
