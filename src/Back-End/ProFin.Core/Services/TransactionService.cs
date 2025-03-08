﻿using ProFin.Core.Enums;
using ProFin.Core.Extensions;
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

            if (!await _categoryService.EnsureValidPermissionCategory(transactionEntity.CategoryFinancialTransactionId))
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

            if (!ExecuteValidation(new UpdateTransactionValidation(_userService.GetId().GetValueOrDefault(), _userService.IsAdmin()),
                transactionEntity)) return;

            if (!await _categoryService.EnsureValidPermissionCategory(transactionEntity.CategoryFinancialTransactionId))
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
            if (!_userService.IsAuthenticated())
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

        private Expression<Func<FinancialTransaction, bool>> GetExpresionFilter(Dictionary<string, string> filters)
        {
            Expression<Func<FinancialTransaction, bool>> expression = x => true;
            if (filters is not null)
                foreach (var key in filters.Keys)
                {
                    if (!string.IsNullOrEmpty(filters[key]))
                    {
                        switch (key)
                        {
                            case "filterByCategoryFinancialTransactionId":
                                expression = expression.And(a => a.CategoryFinancialTransactionId == Guid.Parse(filters[key])); //And(x => x.CategoryFinancialTransactionId == filters.Values);
                                break;
                            case "filterByTransactionDate":
                                expression = expression.And(a => a.CreatedDate.Date == Convert.ToDateTime(filters[key]).Date); //And(x => x.CategoryFinancialTransactionId == filters.Values);
                                break;
                            case "filterByType":
                                expression = expression.And(a => a.TransactionType == Enum.Parse<TransactionType>(filters[key])); //And(x => x.CategoryFinancialTransactionId == filters.Values);
                                break;
                        }
                    }
                }
            return expression;
        }

        public async Task<IEnumerable<FinancialTransaction>> GetAll(Dictionary<string, string> filters = null)
        {
            Expression<Func<FinancialTransaction, bool>> filter = x => true;
            if (filters is not null)
                filter = GetExpresionFilter(filters);

            if (!_userService.IsAuthenticated())
                return Enumerable.Empty<FinancialTransaction>();

            if (_userService.IsAdmin())
                return await _transactionRepository.GetAll(includes: "CategoryFinancialTransaction");
            var teste = _userService.GetId();
            filter = filter.And(x => x.UserId == _userService.GetId().Value);

            return await _transactionRepository.GetAll(includes: "CategoryFinancialTransaction", expression: filter);
        }
    }
}