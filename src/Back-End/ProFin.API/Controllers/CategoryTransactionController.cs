using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ProFin.API.ViewModel;
using ProFin.Core.Interfaces.Repositories;
using ProFin.Core.Interfaces.Services;
using ProFin.Core.Models;

namespace ProFin.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CategoryTransactionController(
        ICategoryTransactionRepository categoryCategoryRepository,
        IMapper mapper,
        INotifier notifier,
        ICategoryService categoryService,
        IUserRepository userRepository
        ) : MainController(notifier)
{
    [HttpGet]
    public async Task<IEnumerable<CategoryTransactionViewModel>> GetAll()
    {
        var result = mapper.Map<IEnumerable<CategoryTransactionViewModel>>(await categoryService.GetAll());
        return result; //TODO alterar para custom response
    }

    [HttpGet("{id:guid}")]
    public async Task<ActionResult<CategoryTransactionViewModel>> GetById(Guid id)
    {
        var transaction = mapper.Map<CategoryTransactionViewModel>(await categoryService.GetById(id));

        if (transaction == null) return NotFound();

        return transaction; //TODO alterar para custom response
    }

    [HttpPost]
    public async Task<ActionResult<CategoryTransactionViewModel>> Insert(CategoryTransactionViewModel categoryTransactionViewModel)
    {
        if (!ModelState.IsValid) return CustomResponse(ModelState);

        var categoryTransaction = mapper.Map<CategoryFinancialTransaction>(categoryTransactionViewModel);
        await categoryService.Insert(categoryTransaction);

        return CustomResponse(categoryTransactionViewModel);
    }

    [HttpPut("{id:guid}")]
    public async Task<ActionResult<CategoryTransactionViewModel>> Update(Guid id, CategoryTransactionViewModel transactionViewModel)
    {
        if (id != transactionViewModel.Id)
        {
            NotifieError("O id informado não é o mesmo que foi passado na query");
            return CustomResponse(transactionViewModel);
        }

        if (!ModelState.IsValid) return CustomResponse(ModelState);

        var categoryTransaction = mapper.Map<CategoryFinancialTransaction>(transactionViewModel);

        await categoryService.Update(categoryTransaction);
        return CustomResponse(transactionViewModel);
    }

    [HttpDelete("{id:guid}")]
    public async Task<ActionResult<CategoryTransactionViewModel>> Delete(Guid id)
    {
        var transaction = await categoryCategoryRepository.GetById(id);

        if (transaction == null) return NotFound();

        await categoryService.Delete(id);

        return CustomResponse(mapper.Map<CategoryTransactionViewModel>(transaction));
    }

    [HttpPut("Move/{id:guid}")]
    public async Task<ActionResult> MoveForOthers(Guid id)
    {
        await categoryCategoryRepository.MoveTransactionsToCategoryAsync(id);

        return CustomResponse();
    }

    [HttpGet("HasTransaction/{id:guid}")]
    public async Task<bool> HasTransaction(Guid id)
    {
        bool hasTransaction = await categoryCategoryRepository.HasTransactionsAsync(id);

        return hasTransaction;
    }
}
