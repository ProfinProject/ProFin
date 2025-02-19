using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ProFin.API.ViewModel;
using ProFin.API.ViewModels;
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
        public async Task<ActionResult<IEnumerable<BudgetViewModel>>> GetAll()
        {
            var budgets = await budgetService.GetAllBudgetsAsync();
            return mapper.Map<IEnumerable<BudgetViewModel>>(budgets).ToList();
        }

        [HttpGet("{id:guid}")]
        public async Task<ActionResult<BudgetViewModel>> GetById(Guid id)
        {
            var budget = await GetBudget(id);
            if (budget == null)
            {
                return NotFound();
            }

            return budget;
        }

        [HttpPost]
        public async Task<IActionResult> Insert([FromBody] BudgetViewModel budgetViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var budget = mapper.Map<Budget>(budgetViewModel);
            await budgetService.Insert(budget);

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

            return CustomResponse(budgetViewModel);
        }

        [HttpDelete("{id:guid}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var budget = GetBudget(id);
            if (budget == null)
            {
                return NotFound();
            }

            await budgetService.Delete(id);
            return CustomResponse(budget);
        }

        [NonAction]
        private async Task<BudgetViewModel> GetBudget(Guid id)
        {
            return mapper.Map<BudgetViewModel>(await budgetService.GetBudgetByIdAsync(id));
        }
    }
}
