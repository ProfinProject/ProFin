using ProFin.Core.Interfaces.Repositories;
using ProFin.Core.Interfaces.Services;
using ProFin.Core.Models;
using ProFin.Core.Models.Validations;

namespace ProFin.Core.Services
{
    public class FinancialTransactionService(IFinancialTransactionRepository transactionRepository,
                                    INotifier notifier) : BaseService(notifier), IFinancialTransactionService
    {
        public async Task Insert(FinancialTransaction transactionEntity)
        {
            if (!ExecuteValidation(new TransactionEntityValidation(), transactionEntity)) return;

            await transactionRepository.Add(transactionEntity);
        }

        public async Task Update(FinancialTransaction transactionEntity)
        {
            if (!ExecuteValidation(new TransactionEntityValidation(), transactionEntity)) return;


            await transactionRepository.Update(transactionEntity);
        }

        public async Task Delete(Guid id)
        {
            if (transactionRepository.GetById(id).Result is FinancialTransaction entity && entity.CreatedDate != DateTime.MinValue)
                await transactionRepository.Delete(entity);
            else
                Notifie("Registro não encontrado!");
        }

        public void Dispose()
        {
            transactionRepository.Dispose();
        }
    }
}
