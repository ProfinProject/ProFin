using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ProFin.API.ViewModels;
using ProFin.Core.Business.Interfaces;
using ProFin.Core.Business.Models;

namespace ProFin.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionController(ITransactionRepository transactionRepository,
        IMapper mapper) : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TransactionViewModel>>> GetAll()
        {
            var transactions = await transactionRepository.GetAll();

            return Ok(mapper.Map<IEnumerable<TransactionViewModel>>(transactions));
        }

        [HttpGet("{id:long}")]
        public async Task<ActionResult<TransactionViewModel>> GetById(long id)
        {
            var transaction = await transactionRepository.GetById(id);

            if (transaction == null)
            {
                // NotificationError(Messages.RegistroNaoEncontrado);
                return NotFound();
            }

            return Ok(transaction);
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] TransactionViewModel transactionViewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            await transactionRepository.Add(mapper.Map<Transaction>(transactionViewModel));

            return Created();
        }

    }
}
