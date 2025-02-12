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


        public async Task Insert(Budget budget)
        {
            if (!ExecuteValidation(new BudgetValidation(), budget)) return;

            await _budgetRepository.Add(budget);
        }

        public async Task Update(Budget budget)
        {
            if (!ExecuteValidation(new BudgetValidation(), budget)) return;

            await _budgetRepository.Update(budget);
        }

        public async Task Delete(Guid id)
        {
            var budget = await _budgetRepository.GetById(id);
            if (budget != null)
            {
                await _budgetRepository.Delete(budget);
            }
            else
            {
                Notifie("Registro não encontrado!");
            }
        }

        public async Task<IEnumerable<Budget>> GetAllBudgetsAsync()
        {
            return await _budgetRepository.GetAll();
        }

        public async Task<Budget> GetBudgetByIdAsync(Guid id)
        {
            return await _budgetRepository.GetById(id);
        }

        public void Dispose()
        {
            _budgetRepository.Dispose();
        }

    }
}
