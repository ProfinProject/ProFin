using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ProFin.API.ViewModel;
using ProFin.Core.Interfaces.Services;
using ProFin.Core.Models;

namespace ProFin.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BudgetController(IBudgetService budgetService,
                                  IMapper mapper,
                                  INotifier notifier) : MainController(notifier)
    {

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var budgets = await budgetService.GetAll();
            var budgetViewModels = mapper.Map<IEnumerable<BudgetViewModel>>(budgets);
            return CustomResponse(budgetViewModels);
        }

        [HttpGet("{id:guid}")]
        public async Task<IActionResult> GetById(Guid id)
        {
            var budget = await budgetService.GetById(id);
            if (budget == null)
            {
                NotifieError("Orçamento não encontrado.");
                return CustomResponse();
            }

            var budgetViewModel = mapper.Map<BudgetViewModel>(budget);
            return CustomResponse(budgetViewModel);
        }

        [HttpPost]
        public async Task<IActionResult> Insert([FromBody] BudgetViewModel budgetViewModel)
        {
            if (!ModelState.IsValid)
            {
                return CustomResponse(ModelState);
            }

            var budget = mapper.Map<Budget>(budgetViewModel);
            await budgetService.Insert(budget);

            if (notifier.HasNotification())
            {
                return CustomResponse();
            }

            return CustomResponse(budgetViewModel);
        }

        [HttpPut("{id:guid}")]
        public async Task<IActionResult> Update(Guid id, [FromBody] BudgetViewModel budgetViewModel)
        {
            if (id != budgetViewModel.Id)
            {
                NotifieError("O id informado não é o mesmo que foi passado na query");
                return CustomResponse(budgetViewModel);
            }

            if (!ModelState.IsValid)
            {
                return CustomResponse(ModelState);
            }

            var budget = mapper.Map<Budget>(budgetViewModel);

            await budgetService.Update(budget);

            if (notifier.HasNotification())
            {
                return CustomResponse();
            }

            var updatedBudget = await budgetService.GetById(id);
            var updatedBudgetViewModel = mapper.Map<BudgetViewModel>(updatedBudget);

            return CustomResponse(updatedBudgetViewModel);
        }


        [HttpDelete("{id:guid}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            await budgetService.Delete(id);
            return CustomResponse();
        }
    }
}
