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
        private readonly ICategoryService _categoryService;

        public BudgetService(IBudgetRepository budgetRepository,
                             INotifier notifier, IAppUserService userService, ICategoryService categoryService) : base(notifier, userService)
        {
            _budgetRepository = budgetRepository;
            _categoryService = categoryService;
        }

        public async Task<IEnumerable<Budget>> GetAll()
        {
            if (!_userService.IsAuthenticated())
                return Enumerable.Empty<Budget>();

            if (_userService.IsAdmin())
                return await _budgetRepository.GetAll();

            Expression<Func<Budget, bool>> filter = x => x.UserId == _userService.GetId().Value;
            return await _budgetRepository.GetAll(includes: "CategoryTransaction", expression: filter);
        }

        public async Task<Budget> GetById(Guid id)
        {
            if (!_userService.IsAuthenticated())
                return null;

            if (_userService.IsAdmin())
                return await _budgetRepository.GetById(id);

            Expression<Func<Budget, bool>> filter = x =>
            x.UserId == _userService.GetId().Value;

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
                Notifie("Orçamento só pode ser adicionado por um usuário autenticado");
                return;
            }

            if (!ExecuteValidation(new BudgetValidation(), budget)) return;

            if (await _categoryService.EnsureValidPermissionCategory(budget.CategoryTransactionId) == false)
            {
                Notifie("Categoria inexistente");
                return;
            }

            budget.SetUset(_userService.GetId().Value);

            // Verifica se já existe um orçamento para a mesma categoria e usuário
            var existingBudget = await _budgetRepository
                .FindAsync(b => b.UserId == budget.UserId && b.CategoryTransactionId == budget.CategoryTransactionId && !b.Deleted);

            if (existingBudget != null)
            {
                Notifie("Já existe um orçamento para esta categoria e usuário.");
                return;
            }

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

            if (await _categoryService.EnsureValidPermissionCategory(budget.CategoryTransactionId) == false)
            {
                Notifie("Categoria inexistente");
                return;
            }

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

        public async Task<Budget> GetByCategoryId(Guid categoryId)
        {
            return await _budgetRepository.GetByCategoryId(categoryId);

        }

        public void Dispose()
        {
            _budgetRepository.Dispose();
        }
    }
}
