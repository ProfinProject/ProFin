using ProFin.Core.Interfaces;
using ProFin.Core.Interfaces.Repositories;
using ProFin.Core.Interfaces.Services;
using ProFin.Core.Models;
using ProFin.Core.Models.Validations;
using ProFin.Core.Models.Validations.Category;
using System.Linq.Expressions;

namespace ProFin.Core.Services
{
    public class CategoryService : BaseService, ICategoryService
    {
        private readonly ICategoryTransactionRepository _categoryTransactionRepository;

        public CategoryService(ICategoryTransactionRepository categoryTransactionRepository, INotifier notifier, IAppUserService userService)
            : base(notifier, userService)
        {
            _categoryTransactionRepository = categoryTransactionRepository;
        }
        public async Task<IEnumerable<CategoryFinancialTransaction>> GetAll()
        {
            if (_userService.IsAuthenticated() == false)
                return Enumerable.Empty<CategoryFinancialTransaction>();

            if (_userService.IsAdmin())
                return await _categoryTransactionRepository.GetAll();


            Expression<Func<CategoryFinancialTransaction, bool>> filter = x => x.UserId == _userService.GetId().Value || x.IsPattern;
            return await _categoryTransactionRepository.GetAll(expression: filter);
        }

        public async Task<CategoryFinancialTransaction> GetById(Guid id)
        {

            if (_userService.IsAuthenticated() == false)
                return null;

            if (_userService.IsAdmin())
                return await _categoryTransactionRepository.GetById(id);


            Expression<Func<CategoryFinancialTransaction, bool>> filter = x =>
            x.UserId == _userService.GetId().Value;

            return await _categoryTransactionRepository.GetById(id, expression: filter);
        }

        public async Task Insert(CategoryFinancialTransaction categoryFinancialTransaction)
        {
            if (_userService.IsAuthenticated() == false)
            {
                Notifie("Categoria só pode ser adcionada por um usuário autenticado");
                return;
            }

            if (!ExecuteValidation(new CategoryFinancialTransactionEntityValidation(), categoryFinancialTransaction)) return;


            categoryFinancialTransaction.SetUset(_userService.GetId().Value);
            await _categoryTransactionRepository.Add(categoryFinancialTransaction);
        }

        public async Task Update(CategoryFinancialTransaction categoryFinancialTransaction)
        {
            if (_userService.IsAuthenticated() == false)
            {
                Notifie("Categoria só pode ser alterada por um usuário autenticado");
                return;
            }

            if (!ExecuteValidation(new UpdateCategoryFinancialTransactionEntityValidation(_userService.GetId().GetValueOrDefault()),
                categoryFinancialTransaction)) return;

            await _categoryTransactionRepository.Update(categoryFinancialTransaction);
        }

        public async Task Delete(Guid id)
        {
            var entity = await _categoryTransactionRepository.GetById(id);

            if (entity == null)
                Notifie("Registro não encontrado!");
            else if (entity.IsPattern)
                Notifie("Você não pode deletar uma categoria padrão");
            else if (entity != null && entity.CreatedDate != DateTime.MinValue && !entity.IsPattern)
            {
                await _categoryTransactionRepository.Delete(entity);
                await _categoryTransactionRepository.MoveTransactionsToCategoryAsync(entity.Id);
            }
        }

        public async Task<bool> EnsureValidPermissionCategory(Guid categoryId)
        {
            Expression<Func<CategoryFinancialTransaction, bool>> filter = x => x.UserId == _userService.GetId().Value || x.IsPattern;
            var category = await _categoryTransactionRepository.GetById(categoryId, expression: filter);

            return category != null;
        }

        public void Dispose()
        {
            _categoryTransactionRepository.Dispose();
        }
    }
}