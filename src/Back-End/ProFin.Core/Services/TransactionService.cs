using ProFin.Core.Interfaces.Repositories;
using ProFin.Core.Interfaces.Services;
using ProFin.Core.Models;
using ProFin.Core.Models.Validations;
using System.Linq.Expressions;

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

        public async Task Insert(FinancialTransaction transactionEntity)
        {
            if (!ExecuteValidation(new TransactionEntityValidation(), transactionEntity)) return;


            await _transactionRepository.Add(transactionEntity);
        }

        public async Task Update(FinancialTransaction transactionEntity)
        {
            if (!ExecuteValidation(new TransactionEntityValidation(), transactionEntity)) return;


            await _transactionRepository.Update(transactionEntity);
        }

        public async Task Delete(Guid id)
        {
            var entity = await _transactionRepository.GetById(id);
            if (entity != null && entity.CreatedDate != DateTime.MinValue)
                await _transactionRepository.Delete(entity);
            else
                Notifie("Registro não encontrado!");
        }

        public async Task<IEnumerable<FinancialTransaction>> GetSince(DateTime startedDate)
        {
            Expression<Func<FinancialTransaction, bool>> filter = x => x.CreatedDate.Date >= startedDate;
            var data = await _transactionRepository.GetAll(includes: "CategoryFinancialTransaction", filter);
            return data;
        }

        public void Dispose()
        {
            _transactionRepository.Dispose();
        }


    }
}
