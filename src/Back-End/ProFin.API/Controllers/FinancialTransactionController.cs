using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ProFin.API.ViewModel;
using ProFin.API.ViewModels;
using ProFin.Core.Interfaces.Repositories;
using ProFin.Core.Interfaces.Services;
using ProFin.Core.Models;

namespace ProFin.API.Controllers
{
    public class FinancialTransactionController(
        IFinancialTransactionRepository transactionRepository,
        ICategoryTransactionRepository categoryTransactionRepository,
        IMapper mapper,
        INotifier notifier,
        ITransactionService transactionService
        ) : MainController(notifier)
    {
        [HttpGet]
        public async Task<IEnumerable<TransactionViewModel>> GetAll()
        {
            return mapper.Map<IEnumerable<TransactionViewModel>>(await transactionRepository.GetAll());
        }

        [HttpGet("{id:guid}")]
        public async Task<ActionResult<TransactionViewModel>> GetById(Guid id)
        {
            var transaction = await GetTransactionCategory(id);

            if (transaction == null) return NotFound();

            return transaction;
        }

        [HttpPost]
        public async Task<ActionResult<TransactionViewModel>> Insert(TransactionViewModel transactionViewModel)
        {
            if (!ModelState.IsValid) return CustomResponse(ModelState);

            await transactionService.Insert(mapper.Map<FinancialTransaction>(transactionViewModel));

            return CustomResponse(transactionViewModel);
        }

        
        [HttpPut("{id:guid}")]
        public async Task<ActionResult<TransactionViewModel>> Update(Guid id, TransactionViewModel transactionViewModel)
        {
            if (id != transactionViewModel.Id)
            {
                NotifieError("O id informado não é o mesmo que foi passado na query");
                return CustomResponse(transactionViewModel);
            }

            if (!ModelState.IsValid) return CustomResponse(ModelState);

            await transactionService.Update(mapper.Map<FinancialTransaction>(transactionViewModel));

            return CustomResponse(transactionViewModel);
        }

        [HttpDelete("{id:guid}")]
        public async Task<ActionResult<TransactionViewModel>> Excluir(Guid id)
        {
            var transactionViewModel = await GetTransactionCategory(id);

            if (transactionViewModel == null) return NotFound();

            await transactionService.Delete(id);

            return CustomResponse(transactionViewModel);
        }

        [HttpGet("category/{id:guid}")]
        public async Task<CategoryTransactionViewModel> GetCategoryById(Guid id)
        {
            return mapper.Map<CategoryTransactionViewModel>(await categoryTransactionRepository.GetById(id));
        }

        [NonAction]
        private async Task<TransactionViewModel> GetTransactionCategory(Guid id)
        {
            return mapper.Map<TransactionViewModel>(await transactionRepository.GetFinancialTransactionCategoryAsync(id));
        }
    }
}
