using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ProFin.API.ViewModel;
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
        IFinancialTransactionService financialTransactionService
        ) : MainController(notifier)
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TransactionViewModel>>> GetAll([FromQuery]Dictionary<string, string> filters = null)
        {
            var result = mapper.Map<IEnumerable<TransactionViewModel>>(await financialTransactionService.GetAll(filters));
            return CustomResponse(result.ToList());
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

            var transaction = mapper.Map<FinancialTransaction>(transactionViewModel);

            await financialTransactionService.Insert(transaction);

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

            await financialTransactionService.Update(mapper.Map<FinancialTransaction>(transactionViewModel));

            return CustomResponse(transactionViewModel);
        }

        [HttpDelete("{id:guid}")]
        public async Task<ActionResult<TransactionViewModel>> Delete(Guid id)
        {
            var transactionViewModel = await GetTransactionCategory(id);

            if (transactionViewModel == null) return NotFound();

            await financialTransactionService.Delete(id);

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

        [HttpGet("since/{startedDate}")]
        public async Task<IActionResult> GetSince(string startedDate)
        {
            if (!DateTime.TryParse(startedDate, out var parsedDate))
            {
                NotifieError("Data no formato inválido. Formato esperado: yyyy-MM-ddTHH:mm:ss");
                return CustomResponse();
            }

            var result = mapper.Map<IEnumerable<TransactionViewModel>>(await financialTransactionService.GetSince(parsedDate));
            return CustomResponse(result);
        }
    }
}
