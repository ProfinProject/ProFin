using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ProFin.API.ViewModel;
using ProFin.Core.Interfaces.Services;
using ProFin.Core.Models;

namespace ProFin.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BudgetController : MainController
    {
        private readonly IBudgetService _budgetService;
        private readonly IMapper _mapper;

        public BudgetController(IBudgetService budgetService, IMapper mapper, INotifier notifier)
          : base(notifier)
        {
            _budgetService = budgetService;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<BudgetViewModel>>> GetAll()
        {
            var budgets = await _budgetService.GetAllBudgetsAsync();
            return Ok(_mapper.Map<IEnumerable<BudgetViewModel>>(budgets));
        }

        [HttpGet("{id:guid}")]
        public async Task<ActionResult<BudgetViewModel>> GetById(Guid id)
        {
            var budget = await _budgetService.GetBudgetByIdAsync(id);
            if (budget == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<BudgetViewModel>(budget));
        }

        [HttpPost]
        public async Task<IActionResult> Insert([FromBody] BudgetViewModel budgetViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var budget = _mapper.Map<Budget>(budgetViewModel);
            await _budgetService.Insert(budget);

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

            var budget = _mapper.Map<Budget>(budgetViewModel);
            await _budgetService.Update(budget);

            return CustomResponse(budgetViewModel);
        }

        [HttpDelete("{id:guid}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var budget = await _budgetService.GetBudgetByIdAsync(id);
            if (budget == null)
            {
                return NotFound();
            }

            await _budgetService.Delete(id);
            return CustomResponse(budget);
        }
    }
}
