using ProFin.Core.Interfaces.Repositories;
using ProFin.Core.Interfaces.Services;
using ProFin.Core.Models;
using ProFin.Core.Models.Validations;

namespace ProFin.Core.Services
{
    public class FinancialTransactionService : BaseService, IFinancialTransactionService
    {
        private readonly IFinancialTransactionRepository _transactionRepository;

        public FinancialTransactionService(IFinancialTransactionRepository transactionRepository, INotifier notifier)
            : base(notifier)
        {
            _transactionRepository = transactionRepository;
        }

        public async Task Insert(Guid userId, FinancialTransaction transactionEntity)
        {
            if (!ExecuteValidation(new TransactionEntityValidation(), transactionEntity)) return;

            transactionEntity.UserId = userId;
            await _transactionRepository.Add(userId, transactionEntity);
        }

        public async Task Update(Guid userId, FinancialTransaction transactionEntity)
        {
            if (!ExecuteValidation(new TransactionEntityValidation(), transactionEntity)) return;

            transactionEntity.UserId = userId;
            await _transactionRepository.Update(userId, transactionEntity);
        }

        public async Task Delete(Guid userId, Guid id)
        {
            var entity = await _transactionRepository.GetById(userId, id);
            if (entity != null && entity.CreatedDate != DateTime.MinValue)
                await _transactionRepository.Delete(userId, entity);
            else
                Notifie("Registro não encontrado!");
        }

        public void Dispose()
        {
            _transactionRepository.Dispose();
        }
    }
}
