using ProFin.Core.Interfaces;
using ProFin.Core.Interfaces.Repositories;
using ProFin.Core.Interfaces.Services;
using ProFin.Core.Models;
using ProFin.Core.Models.Validations.Transaction;
using System.Linq.Expressions;

namespace ProFin.Core.Services
{
    public class FinancialTransactionService : BaseService, IFinancialTransactionService
    {
        private readonly IFinancialTransactionRepository _transactionRepository;
        public FinancialTransactionService(IFinancialTransactionRepository transactionRepository, INotifier notifier, IAppUserService userService)
            : base(notifier, userService)
        {
            _transactionRepository = transactionRepository;
        }

        public async Task Insert(FinancialTransaction transactionEntity)
        {
            if (!_userService.IsAuthenticated())
            {
                Notifie("Categoria só pode ser adcionada por um usuário autenticado");
                return;
            }

            if (!ExecuteValidation(new TransactionEntityValidation(), transactionEntity)) return;

            transactionEntity.SetUset(_userService.GetId().Value);
            await _transactionRepository.Add(transactionEntity);
        }

        public async Task Update(FinancialTransaction transactionEntity)
        {

            if (!_userService.IsAuthenticated())
            {
                Notifie("Categoria só pode ser alterada por um usuário autenticado");
                return;
            }

            if (!ExecuteValidation(new UpdateTransactionValidation(_userService.GetId().GetValueOrDefault()),
                transactionEntity)) return;


            await _transactionRepository.Update(transactionEntity);
        }

        public async Task Delete(Guid id)
        {
            var entity = await _transactionRepository.GetById(id);

            if (!_userService.IsAuthenticated())
            {
                Notifie("Categoria só pode ser alterada por um usuário autenticado");
                return;
            }


            if (entity != null && entity.CreatedDate != DateTime.MinValue)
                await _transactionRepository.Delete(entity);
            else
                Notifie("Registro não encontrado!");
        }

        public async Task<IEnumerable<FinancialTransaction>> GetSince(DateTime startedDate)
        {
            if (_userService.IsAuthenticated() == false)
                return Enumerable.Empty<FinancialTransaction>();

            if (_userService.IsAdmin())
            {
                Expression<Func<FinancialTransaction, bool>> filters = x => x.CreatedDate.Date >= startedDate;
                return await _transactionRepository.GetAll(includes: "CategoryFinancialTransaction", filters);
            }


            Expression<Func<FinancialTransaction, bool>> filter = x => x.CreatedDate.Date >= startedDate && x.UserId == _userService.GetId().Value;
            var data = await _transactionRepository.GetAll(includes: "CategoryFinancialTransaction", filter);
            return data;
        }

        public void Dispose()
        {
            _transactionRepository.Dispose();
        }


    }
}