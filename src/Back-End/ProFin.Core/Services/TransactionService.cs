using ProFin.Core.Interfaces.Repositories;
using ProFin.Core.Interfaces.Services;
using ProFin.Core.Models;
using ProFin.Core.Models.Validations;
using System.Linq.Expressions;
using System.Xml;

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

        public async Task<IEnumerable<FinancialTransaction>> GetSince(DateTime startedDate)
        {
            Expression<Func<FinancialTransaction, bool>> filter = x => x.CreatedDate.Date >= startedDate;
            var data = await transactionRepository.GetAll(includes: "CategoryFinancialTransaction", filter);
            return data;
        }

        public void Dispose()
        {
            transactionRepository.Dispose();
        }


    }
}
