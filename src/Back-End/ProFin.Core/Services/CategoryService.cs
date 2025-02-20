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
            if (categoryTransactionRepository.GetById(id).Result is CategoryFinancialTransaction entity && entity.CreatedDate != DateTime.MinValue)
                await categoryTransactionRepository.Delete(entity);
            else
                Notifie("Registro não encontrado!");
        }

        public void Dispose()
        {
            categoryTransactionRepository.Dispose();
        }
    }
}
