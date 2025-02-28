using ProFin.Core.Interfaces;
using ProFin.Core.Interfaces.Repositories;
using ProFin.Core.Interfaces.Services;
using ProFin.Core.Models;
using ProFin.Core.Models.Validations.Transaction;
using System.ComponentModel.DataAnnotations;
using System.Linq.Expressions;
using System.Security;

namespace ProFin.Core.Services
{
    public class FinancialTransactionService : BaseService, IFinancialTransactionService
    {
        private readonly IFinancialTransactionRepository _transactionRepository;
        private readonly ICategoryService _categoryService;
        public FinancialTransactionService(IFinancialTransactionRepository transactionRepository, INotifier notifier, IAppUserService userService, ICategoryService categoryService)
            : base(notifier, userService)
        {
            _transactionRepository = transactionRepository;
            _categoryService = categoryService;
        }

        public async Task Insert(FinancialTransaction transactionEntity)
        {
            if (!_userService.IsAuthenticated())
            {
                Notifie("Transação só pode ser adcionada por um usuário autenticado");
                return;
            }

            if (!ExecuteValidation(new TransactionEntityValidation(), transactionEntity)) return;

            if (await _categoryService.EnsureValidPermissionCategory(transactionEntity.CategoryFinancialTransactionId) == false)
            {
                Notifie("Categoria inexistente");
                return;
            }

            transactionEntity.SetUset(_userService.GetId().Value);
            await _transactionRepository.Add(transactionEntity);
        }

        public async Task Update(FinancialTransaction transactionEntity)
        {

            if (!_userService.IsAuthenticated())
            {
                Notifie("Transação só pode ser alterada por um usuário autenticado");
                return;
            }

            if (!ExecuteValidation(new UpdateTransactionValidation(_userService.GetId().GetValueOrDefault()),
                transactionEntity)) return;

            if (await _categoryService.EnsureValidPermissionCategory(transactionEntity.CategoryFinancialTransactionId) == false)
            {
                Notifie("Categoria inexistente");
                return;
            }

            await _transactionRepository.Update(transactionEntity);
        }

        public async Task Delete(Guid id)
        {
            var entity = await _transactionRepository.GetById(id);

            if (!_userService.IsAuthenticated())
            {
                Notifie("Transação só pode ser alterada por um usuário autenticado");
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

        public async Task<IEnumerable<FinancialTransaction>> GetAll()
        {
            if (!_userService.IsAuthenticated())
                return Enumerable.Empty<FinancialTransaction>();

            if (_userService.IsAdmin())
                return await _transactionRepository.GetAll();

            Expression<Func<FinancialTransaction, bool>> filter = x => x.UserId >= _userService.GetId().Value;
            return await _transactionRepository.GetAll(includes: "CategoryFinancialTransaction", expression: filter);
        }
    }
}