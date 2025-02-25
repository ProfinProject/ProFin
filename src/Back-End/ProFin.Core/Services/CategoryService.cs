using ProFin.Core.Interfaces.Repositories;
using ProFin.Core.Interfaces.Services;
using ProFin.Core.Models;
using ProFin.Core.Models.Validations;

namespace ProFin.Core.Services
{
    public class CategoryService : BaseService, ICategoryService
    {
        private readonly ICategoryTransactionRepository _categoryTransactionRepository;

        public CategoryService(ICategoryTransactionRepository categoryTransactionRepository, INotifier notifier)
            : base(notifier)
        {
            _categoryTransactionRepository = categoryTransactionRepository;
        }

        public async Task Insert(Guid userId, CategoryFinancialTransaction categoryFinancialTransaction)
        {
            if (!ExecuteValidation(new CategoryFinancialTransactionEntityValidation(), categoryFinancialTransaction)) return;

            categoryFinancialTransaction.UserId = userId;
            await _categoryTransactionRepository.Add(userId, categoryFinancialTransaction);
        }

        public async Task Update(Guid userId, CategoryFinancialTransaction categoryFinancialTransaction)
        {
            if (!ExecuteValidation(new CategoryFinancialTransactionEntityValidation(), categoryFinancialTransaction)) return;

            categoryFinancialTransaction.UserId = userId;
            await _categoryTransactionRepository.Update(userId, categoryFinancialTransaction);
        }

        public async Task Delete(Guid userId, Guid id)
        {
            var entity = await _categoryTransactionRepository.GetById(userId, id);

            if (entity == null)
                Notifie("Registro não encontrado!");
            else if (entity.IsPattern)
                Notifie("Você não pode deletar uma categoria padrão");
            else if (entity != null && entity.CreatedDate != DateTime.MinValue && !entity.IsPattern)
                await _categoryTransactionRepository.Delete(userId, entity);
        }

        public void Dispose()
        {
            _categoryTransactionRepository.Dispose();
        }
    }
}
