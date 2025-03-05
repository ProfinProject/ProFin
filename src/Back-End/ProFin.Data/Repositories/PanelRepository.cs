using Microsoft.EntityFrameworkCore;
using ProFin.API.ViewModel;
using ProFin.Core.Interfaces.Repositories;
using ProFin.Data.Context;

namespace ProFin.Data.Repositories
{
    public class PanelRepository : IPanelRepository
    {
        private readonly AppDbContext _appDbContext;
        public PanelRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<List<Panel>> GetPanels()
        {
            //TO DO, botar as mensagens de descriptions dos paineis no config
            List<Panel> panels = new List<Panel>();
            var transactions = await _appDbContext.FinancialTransactions.Include(a => a.CategoryFinancialTransaction).Select(a => new { Category = a.CategoryFinancialTransaction.Name, TotalValue = a.Value }).ToListAsync();

            var categoryPanel = transactions.GroupBy(a => a.Category).Select(a =>
                new Panel()
                {
                    TotalValue = Math.Round(a.Sum(b => b.TotalValue), 2),
                    Quantity = a.Count(),
                    MostConsumed = a.Key,
                    Title = "Categoria",
                    TitlePlural = "Categorias",
                    Description = "foi a categoria que mais consumiu."
                }).OrderByDescending(a => a.TotalValue).FirstOrDefault();

            panels.Add(categoryPanel);

            var biggestBudget = _appDbContext.Budgets.Include(a => a.CategoryTransaction).OrderByDescending(a => a.Limit).FirstOrDefault();
            var panelBudget = new Panel()
            {
                Title = "Orçamento",
                TitlePlural = "Orçamentos",
                TotalValue = _appDbContext.Budgets.Sum(a => a.Limit),
                MostConsumed = biggestBudget.CategoryTransaction.Name,
                Quantity = _appDbContext.Budgets.Count()
            };

            panelBudget.Description = panelBudget.MostConsumed + " é o seu maior orçamento, com um montante de " + biggestBudget.Limit;

            panels.Add(panelBudget);

            var mostTransacted = _appDbContext.FinancialTransactions.Include(a => a.CategoryFinancialTransaction).GroupBy(a => a.CategoryFinancialTransaction.Name).Select(a => new { Category = a.Key, Quantity = a.Count() }).OrderByDescending(a => a.Quantity).FirstOrDefault();
            var panelTransactions = new Panel()
            {
                Title = "Transação",
                TitlePlural = "Transações",
                TotalValue = Math.Round(_appDbContext.FinancialTransactions.Sum(a => a.Value), 2),
                MostConsumed = mostTransacted.Category,
                Quantity = mostTransacted.Quantity
            };

            panelTransactions.Description = panelTransactions.MostConsumed + " foi a categoria que teve mais transações com um total de " + panelTransactions.Quantity;
            panels.Add(panelTransactions);

            return panels;
        }

        public async Task<List<PanelAlert>> GetAlerts()
        {
            List<PanelAlert> panels = new List<PanelAlert>();

            var budgets = await _appDbContext.Budgets.Include(a => a.CategoryTransaction)
                .Select(a =>
                new PanelAlert()
                {
                    Budget = a.CategoryTransaction.Name,
                    BudgetValue = Math.Round(a.Limit, 2),
                    CategoryId = a.CategoryTransactionId
                }).ToListAsync();

            foreach (var budget in budgets)
            {
                budget.TotalValueUsed = Math.Round(_appDbContext.FinancialTransactions.Where(a => a.CategoryFinancialTransactionId == budget.CategoryId).Sum(a => a.Value), 2);
                budget.PercentageBudget = Math.Round(budget.TotalValueUsed / budget.BudgetValue * 100, 2);
                budget.Description = "O orçamento para " + budget.Budget + " é de " + budget.BudgetValue + " e já foi consumido " + budget.TotalValueUsed;
            }

            return budgets.OrderByDescending(a => a.PercentageBudget).Take(3).ToList();
        }
    }
}
