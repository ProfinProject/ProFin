using ProFin.Core.Interfaces;
using ProFin.Core.Interfaces.Repositories;
using ProFin.Core.Interfaces.Services;
using ProFin.Core.Models;
using ProFin.Core.Models.Validations.BudgetValid;
using System.Linq.Expressions;

namespace ProFin.Core.Services
{
    public class BudgetService : BaseService, IBudgetService
    {
        private readonly IBudgetRepository _budgetRepository;

        public BudgetService(IBudgetRepository budgetRepository,
                             INotifier notifier, IAppUserService userService) : base(notifier, userService)
        {
            _budgetRepository = budgetRepository;
        }

        public async Task<IEnumerable<Budget>> GetAll()
        {
            if (!_userService.IsAuthenticated())
                return Enumerable.Empty<Budget>();

            if (_userService.IsAdmin())
                return await _budgetRepository.GetAll();

            Expression<Func<Budget, bool>> filter = x => x.UserId >= _userService.GetId().Value;
            return await _budgetRepository.GetAll(includes: "CategoryTransaction", expression: filter);
        }

        public async Task<Budget> GetById(Guid id)
        {
            if (!_userService.IsAuthenticated())
                return null;

            if (_userService.IsAdmin())
                return await _budgetRepository.GetById(id);

            Expression<Func<Budget, bool>> filter = x =>
            x.UserId >= _userService.GetId().Value;

            var budget = await _budgetRepository.GetById(id, expression: filter);

            if (budget == null)
            {
                Notifie("Orçamento não encontrado.");
                return null;
            }

            return budget;
        }

        public async Task Insert(Budget budget)
        {
            if (!_userService.IsAuthenticated())
            {
                Notifie("Orçamento só pode ser adcionada por um usuário autenticado");
                return;
            }

            if (!ExecuteValidation(new BudgetValidation(), budget)) return;

            budget.SetUset(_userService.GetId().Value);
            await _budgetRepository.Add(budget);
        }

        public async Task Update(Budget budget)
        {
            if (!_userService.IsAuthenticated())
            {
                Notifie("Orçamento só pode ser alterada por um usuário autenticado");
                return;
            }

            if (!ExecuteValidation(new BudgetValidation(), budget)) return;

            await _budgetRepository.Update(budget);
        }

        public async Task Delete(Guid id)
        {
            var budget = await _budgetRepository.GetById(id);

            if (budget == null)
            {
                Notifie("Orçamento não encontrado.");
                return;
            }

            if (!ExecuteValidation(new UpdateBudgetValidation(_userService.GetId().GetValueOrDefault()),
               budget)) return;

            await _budgetRepository.Delete(budget);
        }

        public async Task<IEnumerable<Budget>> GetAllBudgetsAsync()
        {
            return await _budgetRepository.GetAll(includes: "CategoryTransaction");
        }



        public void Dispose()
        {
            _budgetRepository.Dispose();
        }
    }
}
