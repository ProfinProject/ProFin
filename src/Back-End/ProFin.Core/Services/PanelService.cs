using ProFin.Core.Interfaces;
using ProFin.Core.Interfaces.Repositories;
using ProFin.Core.Interfaces.Services;
using ProFin.Core.Models;

namespace ProFin.Core.Services
{
    public class PanelService : BaseService, IPanelService
    {
        private readonly ICategoryTransactionRepository _categoryTransactionRepository;
        private readonly IFinancialTransactionRepository _financialTransactionRepository;
        private readonly IBudgetService _budgetService;
        private readonly IFinancialTransactionService _financialTransactionService;

        public PanelService(ICategoryTransactionRepository categoryTransactionRepository, IFinancialTransactionRepository financialTransactionRepository, IFinancialTransactionService financialTransactionService, IBudgetService budgetService, INotifier notifier, IAppUserService userService)
            : base(notifier, userService)
        {
            _categoryTransactionRepository = categoryTransactionRepository;
            _financialTransactionRepository = financialTransactionRepository;
            _financialTransactionService = financialTransactionService;
            _budgetService = budgetService;
        }
        public async Task<List<Panel>> GetPanels()
        {
            var mostTransacted = await _financialTransactionRepository.GetMostTransactedCategoryAsync();
            var allTransactions = await _financialTransactionService.GetAll();
            var transactions = await _financialTransactionRepository.GetCategoriesAndValueAsync();
            var budgets = await _budgetService.GetAll();
            var biggestBudget = budgets.OrderByDescending(a => a.Limit).FirstOrDefault();

            //TO DO, botar as mensagens de descriptions dos paineis no config
            List<Panel> panels = new List<Panel>();

            var categoryPanel = transactions.GroupBy(a => a.Category).Select(a =>
                new Panel()
                {
                    TotalValue = Math.Round(a.Sum(b => b.TotalValue), 2),
                    Quantity = a.Count(),
                    MostConsumed = a.Key,
                    Title = "Categoria",
                    TitlePlural = "Categorias",
                    Description = "foi a categoria que mais consumiu.",
                    ClassIcon = "fa-solid fa-layer-group p-1 icon-white-color"
                }).OrderByDescending(a => a.TotalValue).FirstOrDefault();

            panels.Add(categoryPanel);

            var panelBudget = new Panel()
            {
                Title = "Orçamento",
                TitlePlural = "Orçamentos",
                TotalValue = budgets.Sum(a => a.Limit),
                MostConsumed = biggestBudget.CategoryTransaction.Name,
                Quantity = budgets.Count(),
                ClassIcon = "fa-solid fa-money-bill-trend-up p-1 icon-white-color"
            };

            panelBudget.Description = " é o seu maior orçamento, com um montante de " + biggestBudget.Limit;

            panels.Add(panelBudget);

            var panelTransactions = new Panel()
            {

                Title = "Transação",
                TitlePlural = "Transações",
                TotalValue = Math.Round(allTransactions.Sum(a => a.Value), 2),
                MostConsumed = mostTransacted.Category,
                Quantity = mostTransacted.Quantity,
                ClassIcon = "fa-solid fa-money-bill-transfer p-1 icon-white-color"
            };

            panelTransactions.Description = " foi a categoria que teve mais transações com um total de " + panelTransactions.Quantity;
            panels.Add(panelTransactions);

            return panels;
        }

        public async Task<List<PanelAlert>> GetAlerts()
        {
            List<PanelAlert> panels = new List<PanelAlert>();
            var allBudgets = await _budgetService.GetAll();

            var budgets = allBudgets
                .Select(a =>
                new PanelAlert()
                {
                    Budget = a.CategoryTransaction.Name,
                    BudgetValue = Math.Round(a.Limit, 2),
                    CategoryId = a.CategoryTransactionId
                }).ToList();

            foreach (var budget in budgets)
            {
                var transactiosByCategory = await _financialTransactionRepository.GetTransactionByCategory(budget.CategoryId);
                budget.TotalValueUsed = Math.Round(transactiosByCategory.Sum(a => a.Value), 2);
                budget.PercentageBudget = Math.Round(budget.TotalValueUsed / budget.BudgetValue * 100, 2);
                budget.Description = "O orçamento para " + budget.Budget + " é de " + budget.BudgetValue + " e já foi consumido " + budget.TotalValueUsed;

                budget.ClassIcon = budget.PercentageBudget > 100 ? "fa-solid fa-radiation icon-white-color" : "fa-solid fa-bell icon-white-color";
            }

            return budgets.OrderByDescending(a => a.PercentageBudget).Take(3).ToList();
        }
        public void Dispose()
        {
            _categoryTransactionRepository.Dispose();
        }
    }
}