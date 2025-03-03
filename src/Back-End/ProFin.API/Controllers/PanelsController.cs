using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ProFin.API.ViewModel;
using ProFin.Core.Interfaces.Repositories;
using ProFin.Core.Interfaces.Services;
using ProFin.Core.Models;
using ProFin.Core.Services;

namespace ProFin.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class PanelsController(
        ICategoryTransactionRepository categoryCategoryRepository,
        IMapper mapper,
        INotifier notifier
        ) : MainController(notifier)
{
    [HttpGet()]
    public async Task<ActionResult<List<Panel>>> GetById()
    {
        var panel = await categoryCategoryRepository.GetPanel();

        return Ok(panel);
    }
}
