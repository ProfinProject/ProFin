using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ProFin.API.ViewModel;
using ProFin.Core.Interfaces.Repositories;
using ProFin.Core.Models;

namespace ProFin.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CategoryTransactionController(ICategoryTransactionRepository CategoryTransactionRepository, IMapper mapper) : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<CategoryTransactionViewModel>>> GetAll()
    {
        var CategoryTransaction = await CategoryTransactionRepository.GetAll();

        return Ok(mapper.Map<IEnumerable<CategoryTransactionViewModel>>(CategoryTransaction));
    }

    [HttpGet("{id:guid}")]
    public async Task<ActionResult<CategoryTransactionViewModel>> GetById(Guid id)
    {
        var categoryTransaction = await CategoryTransactionRepository.GetById(id);

        if (categoryTransaction == null)
        {
            return NotFound();
        }

        return Ok(categoryTransaction);
    }

    [HttpPost]
    public async Task<IActionResult> Add([FromBody] CategoryTransactionViewModel transactionViewModel)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest();
        }

        await CategoryTransactionRepository.Add(mapper.Map<CategoryTransaction>(transactionViewModel));

        return Created();
    }

}
