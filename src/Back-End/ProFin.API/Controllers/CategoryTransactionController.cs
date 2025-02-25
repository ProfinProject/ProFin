using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ProFin.API.ViewModel;
using ProFin.Core.Interfaces.Repositories;
using ProFin.Core.Interfaces.Services;
using ProFin.Core.Models;
using System.Security.Claims;

namespace ProFin.API.Controllers;

public class CategoryTransactionController(
        ICategoryTransactionRepository categoryCategoryRepository,
        IMapper mapper,
        INotifier notifier,
        ICategoryService categoryService
        ) : MainController(notifier)
{
    private Guid GetUserId()
    {
        return Guid.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
    }

    [HttpGet]
    public async Task<IEnumerable<CategoryTransactionViewModel>> GetAll()
    {
        var userId = GetUserId();
        var result = mapper.Map<IEnumerable<CategoryTransactionViewModel>>(await categoryCategoryRepository.GetAll(userId));
        return result;
    }

    [HttpGet("{id:guid}")]
    public async Task<ActionResult<CategoryTransactionViewModel>> GetById(Guid id)
    {

        var userId = GetUserId();
        var transaction = mapper.Map<CategoryTransactionViewModel>(await categoryCategoryRepository.GetById(userId, id));

        if (transaction == null) return NotFound();

        return transaction;
    }

    [HttpPost]
    public async Task<ActionResult<CategoryTransactionViewModel>> Insert(CategoryTransactionViewModel categoryTransactionViewModel)
    {
        if (!ModelState.IsValid) return CustomResponse(ModelState);

        var userId = GetUserId();
        await categoryService.Insert(userId, mapper.Map<CategoryFinancialTransaction>(categoryTransactionViewModel));

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

        var userId = GetUserId();
        await categoryService.Update(userId, mapper.Map<CategoryFinancialTransaction>(transactionViewModel));

        return CustomResponse(transactionViewModel);
    }

    [HttpDelete("{id:guid}")]
    public async Task<ActionResult<CategoryTransactionViewModel>> Delete(Guid id)
    {
        var transactionViewModel = mapper.Map<CategoryTransactionViewModel>(await categoryCategoryRepository.GetById(id));

        if (transactionViewModel == null) return NotFound();

        var userId = GetUserId();
        await categoryService.Delete(userId, id);

        return CustomResponse(transactionViewModel);
    }
}