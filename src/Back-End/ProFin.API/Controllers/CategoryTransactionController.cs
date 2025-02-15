using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ProFin.API.ViewModel;
using ProFin.API.ViewModels;
using ProFin.Core.Interfaces.Repositories;
using ProFin.Core.Interfaces.Services;
using ProFin.Core.Models;

namespace ProFin.API.Controllers;

public class CategoryTransactionController(
        ICategoryTransactionRepository categoryCategoryRepository,
        IMapper mapper,
        INotifier notifier,
        ICategoryService categoryService
        ) : MainController(notifier)
{
    [HttpGet]
    public async Task<IEnumerable<CategoryTransactionViewModel>> GetAll()
    {
        return mapper.Map<IEnumerable<CategoryTransactionViewModel>>(await categoryCategoryRepository.GetAll());
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

        await categoryService.Insert(mapper.Map<CategoryFinancialTransaction>(categoryTransactionViewModel));

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

        await categoryService.Update(mapper.Map<CategoryFinancialTransaction>(transactionViewModel));

        return CustomResponse(transactionViewModel);
    }

    [HttpDelete("{id:guid}")]
    public async Task<ActionResult<CategoryTransactionViewModel>> Excluir(Guid id)
    {
        var transactionViewModel = mapper.Map<CategoryTransactionViewModel>(await categoryCategoryRepository.GetById(id));

        if (transactionViewModel == null) return NotFound();

        await categoryService.Delete(id);

        return CustomResponse(transactionViewModel);
    }
}