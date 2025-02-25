using ProFin.Core.Interfaces.Repositories;
using ProFin.Core.Interfaces.Services;
using ProFin.Core.Models;
using ProFin.Core.Models.Validations;

namespace ProFin.Core.Services
{
    public class BudgetService : BaseService, IBudgetService
    {
        private readonly IBudgetRepository _budgetRepository;
        
        public BudgetService(IBudgetRepository budgetRepository,
                             INotifier notifier) : base(notifier)
        {
            _budgetRepository = budgetRepository;
        }


        public async Task Insert(Budget budget, Guid userId)
        {
            budget.UserId = userId;
            if (!ExecuteValidation(new BudgetValidation(), budget)) return;

            await _budgetRepository.Add(userId, budget);
        }

        public async Task Update(Budget budget, Guid userId)
        {
            if (budget.UserId != userId)
            {
                Notifie("Você não tem permissão para atualizar este orçamento.");
                return;
            }

            if (!ExecuteValidation(new BudgetValidation(), budget)) return;

            await _budgetRepository.Update(userId, budget);
        }

        public async Task Delete(Guid id, Guid userId)
        {
            var budget = await _budgetRepository.GetById(userId, id);
            if (budget == null || budget.UserId != userId)
            {
                Notifie("Você não tem permissão para excluir este orçamento.");
                return;
            }

            await _budgetRepository.Delete(userId, budget);
        }

        public async Task<IEnumerable<Budget>> GetAllBudgetsAsync(Guid userId)
        {
            return await _budgetRepository.GetAll(userId);
        }

        public async Task<Budget> GetBudgetByIdAsync(Guid id, Guid userId)
        {
            var budget = await _budgetRepository.GetById(userId, id);
            if (budget == null || budget.UserId != userId)
            {
                Notifie("Você não tem permissão para visualizar este orçamento.");
                return null;
            }

            return budget;
        }

        public void Dispose()
        {
            _budgetRepository.Dispose();
        }

    }
}
