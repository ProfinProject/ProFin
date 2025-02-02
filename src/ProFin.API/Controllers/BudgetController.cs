using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ProFin.API.ViewModel;
using ProFin.Core.Interfaces.Repositories;
using ProFin.Core.Models;

namespace ProFin.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BudgetController(IBudgetRepository budgetRepository,
        IMapper mapper) : ControllerBase
    {


        [HttpGet]
        public async Task<ActionResult<IEnumerable<BudgetViewModel>>> GetAll()
        {
            var budgets = await budgetRepository.GetAll();
            return Ok(mapper.Map<IEnumerable<BudgetViewModel>>(budgets));
        }

        [HttpGet("{id:guid}")]
        public async Task<ActionResult<BudgetViewModel>> GetById(int id)
        {
            var budget = await budgetRepository.GetById(id);
            if (budget == null)
            {
                return NotFound();
            }

            return Ok(mapper.Map<BudgetViewModel>(budget));
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] BudgetViewModel budgetViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var budget = mapper.Map<Budget>(budgetViewModel);
            await budgetRepository.Add(mapper.Map<Budget>(budgetViewModel));

            return CreatedAtAction(nameof(GetById), new { id = budget.Id }, budgetViewModel);
        }
    }
}
