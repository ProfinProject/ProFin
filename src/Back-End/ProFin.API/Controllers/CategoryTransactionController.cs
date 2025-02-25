using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ProFin.API.ViewModel;
using ProFin.Core.Interfaces.Repositories;
using ProFin.Core.Interfaces.Services;
using ProFin.Core.Models;
using System.Security.Claims;

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
        var result = mapper.Map<IEnumerable<CategoryTransactionViewModel>>(await categoryCategoryRepository.GetAll());
        return result;
    }

    [HttpGet("{id:guid}")]
    public async Task<ActionResult<CategoryTransactionViewModel>> GetById(Guid id)
    {
        var transaction = mapper.Map<CategoryTransactionViewModel>(await categoryCategoryRepository.GetById(id));

        if (transaction == null) return NotFound();

        return transaction;
    }

    [HttpPost]
    public async Task<ActionResult<CategoryTransactionViewModel>> Insert(CategoryTransactionViewModel categoryTransactionViewModel)
    {
        if (!ModelState.IsValid) return CustomResponse(ModelState);

        var categoryTransaction = mapper.Map<CategoryFinancialTransaction>(categoryTransactionViewModel);
        categoryTransaction.UserId = GetUserId();
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
        var transactionViewModel = mapper.Map<CategoryTransactionViewModel>(await categoryCategoryRepository.GetById(id));

        if (transactionViewModel == null) return NotFound();

        await categoryService.Delete(id);

        return CustomResponse(transactionViewModel);
    }

    private Guid GetUserId()
    {
        return Guid.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier).ToUpper());
    }
}
