using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ProFin.API.ViewModel;
using ProFin.Core.Interfaces.Services;
using ProFin.Core.Models;
using System.Security.Claims;

namespace ProFin.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BudgetController(IBudgetService budgetService,
                                  IMapper mapper,
                                  INotifier notifier) : MainController(notifier)
    {

        private Guid GetUserId()
        {
            return Guid.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<BudgetViewModel>>> GetAll()
        {
            var userId = GetUserId();
            var budgets = await budgetService.GetAllBudgetsAsync(userId);
            return Ok(mapper.Map<IEnumerable<BudgetViewModel>>(budgets));
        }

        [HttpGet("{id:guid}")]
        public async Task<ActionResult<BudgetViewModel>> GetById(Guid id)
        {
            var userId = GetUserId();
            var budget = await budgetService.GetBudgetByIdAsync(id, userId);
            if (budget == null)
            {
                return NotFound();
            }

            return Ok(mapper.Map<BudgetViewModel>(budget));
        }

        [HttpPost]
        public async Task<IActionResult> Insert([FromBody] BudgetViewModel budgetViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var budget = mapper.Map<Budget>(budgetViewModel);
            var userId = GetUserId();
            await budgetService.Insert(budget, userId);

            return CreatedAtAction(nameof(GetById), new { id = budget.Id }, budgetViewModel);
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
            var userId = GetUserId();
            await budgetService.Update(budget, userId);

            return CustomResponse(budgetViewModel);
        }

        [HttpDelete("{id:guid}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var userId = GetUserId();
            await budgetService.Delete(id, userId);
            return CustomResponse();
        }
    }
}
