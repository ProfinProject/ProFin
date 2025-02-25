using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ProFin.API.ViewModel;
using ProFin.Core.Interfaces.Repositories;
using ProFin.Core.Interfaces.Services;
using ProFin.Core.Models;
using System.Security.Claims;

namespace ProFin.API.Controllers
{
    public class FinancialTransactionController(
        IFinancialTransactionRepository transactionRepository,
        ICategoryTransactionRepository categoryTransactionRepository,
        IMapper mapper,
        INotifier notifier,
        IFinancialTransactionService financialTransactionService
        ) : MainController(notifier)
    {

        private Guid GetUserId()
        {
            return Guid.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<TransactionViewModel>>> GetAll()
        {
            var userId = GetUserId();
            var result = mapper.Map<IEnumerable<TransactionViewModel>>(await transactionRepository.GetAll(userId, includes: "CategoryFinancialTransaction"));
            return CustomResponse(result);
        }

        [HttpGet("{id:guid}")]
        public async Task<ActionResult<TransactionViewModel>> GetById(Guid id)
        {
            var userId = GetUserId();
            var transaction = await GetTransactionCategory(id, userId);

            if (transaction == null) return NotFound();

            return transaction;
        }

        [HttpPost]
        public async Task<ActionResult<TransactionViewModel>> Insert(TransactionViewModel transactionViewModel)
        {
            if (!ModelState.IsValid) return CustomResponse(ModelState);

            var userId = GetUserId();
            await financialTransactionService.Insert(userId, mapper.Map<FinancialTransaction>(transactionViewModel));

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

            var userId = GetUserId();
            await financialTransactionService.Update(userId, mapper.Map<FinancialTransaction>(transactionViewModel));

            return CustomResponse(transactionViewModel);
        }

        [HttpDelete("{id:guid}")]
        public async Task<ActionResult<TransactionViewModel>> Delete(Guid id)
        {
            var userId = GetUserId();
            var transactionViewModel = await GetTransactionCategory(id, userId);

            if (transactionViewModel == null) return NotFound();

            await financialTransactionService.Delete(userId, id);

            return CustomResponse(transactionViewModel);
        }

        [HttpGet("category/{id:guid}")]
        public async Task<CategoryTransactionViewModel> GetCategoryById(Guid id)
        {
            return mapper.Map<CategoryTransactionViewModel>(await categoryTransactionRepository.GetById(id));
        }

        [NonAction]
        private async Task<TransactionViewModel> GetTransactionCategory(Guid id, Guid userId)
        {
            return mapper.Map<TransactionViewModel>(await transactionRepository.GetFinancialTransactionCategoryAsync(id, userId));
        }
    }
}
