using ProFin.Core.Interfaces.Repositories;
using ProFin.Core.Interfaces.Services;
using ProFin.Core.Models;
using ProFin.Core.Models.Validations;

namespace ProFin.Core.Services
{
    public class CategoryService(ICategoryTransactionRepository categoryTransactionRepository,
                                 INotifier notifier) : BaseService(notifier), ICategoryService
    {
        private readonly ICategoryTransactionRepository _categoryTransactionRepository;

        public async Task Insert(CategoryFinancialTransaction categoryFinancialTransaction)
        {
            if (!ExecuteValidation(new CategoryFinancialTransactionEntityValidation(), categoryFinancialTransaction)) return;

            await categoryTransactionRepository.Add(categoryFinancialTransaction);
        }

        public async Task Update(CategoryFinancialTransaction categoryFinancialTransaction)
        {
            if (!ExecuteValidation(new CategoryFinancialTransactionEntityValidation(), categoryFinancialTransaction)) return;

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
