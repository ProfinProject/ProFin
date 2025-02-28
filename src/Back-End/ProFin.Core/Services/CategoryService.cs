using ProFin.Core.Interfaces;
using ProFin.Core.Interfaces.Repositories;
using ProFin.Core.Interfaces.Services;
using ProFin.Core.Models;
using ProFin.Core.Models.Validations;
using ProFin.Core.Models.Validations.Category;
using System.Linq.Expressions;

namespace ProFin.Core.Services
{
    public class CategoryService(ICategoryTransactionRepository categoryTransactionRepository,
                                  INotifier notifier, IAppUserService userService) : BaseService(notifier, userService), ICategoryService
    {

        public async Task<IEnumerable<CategoryFinancialTransaction>> GetAll()
        {
            if (_userService.IsAuthenticated() == false)
                return Enumerable.Empty<CategoryFinancialTransaction>();

            if (_userService.IsAdmin())
                return await categoryTransactionRepository.GetAll();


            Expression<Func<CategoryFinancialTransaction, bool>> filter = x => x.UserId >= _userService.GetId().Value;
            return await categoryTransactionRepository.GetAll(expression: filter);
        }

        public async Task<CategoryFinancialTransaction> GetById(Guid id)
        {

            if (_userService.IsAuthenticated() == false)
                return null;

            if (_userService.IsAdmin())
                return await categoryTransactionRepository.GetById(id);


            Expression<Func<CategoryFinancialTransaction, bool>> filter = x =>
            x.UserId >= _userService.GetId().Value;

            return await categoryTransactionRepository.GetById(id, expression: filter);
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
            await categoryTransactionRepository.Add(categoryFinancialTransaction);
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

            await categoryTransactionRepository.Update(categoryFinancialTransaction);
        }

        public async Task Delete(Guid id)
        {
            var entity = await categoryTransactionRepository.GetById(id);

            if (entity == null)
                Notifie("Registro não encontrado!");
            else if (entity.IsPattern)
                Notifie("Você não pode deletar uma categoria padrão");
            else if (entity != null && entity.CreatedDate != DateTime.MinValue && !entity.IsPattern)
            {
                await categoryTransactionRepository.Delete(entity);
                await categoryTransactionRepository.MoveTransactionsToCategoryAsync(entity.Id);
            }
        }

        public void Dispose()
        {
            categoryTransactionRepository.Dispose();
        }
    }
}
