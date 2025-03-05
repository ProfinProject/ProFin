using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ProFin.API.ViewModel;
using ProFin.Core.Interfaces.Repositories;
using ProFin.Core.Interfaces.Services;

namespace ProFin.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class PanelsController(
        IPanelRepository panelRepository,
        IMapper mapper,
        INotifier notifier
        ) : MainController(notifier)
{
    [HttpGet("Panels")]
    public async Task<ActionResult<List<Panel>>> GetPanels()
    {
        var panel = await panelRepository.GetPanels();

        return Ok(panel);
    }

    [HttpGet("Alerts")]
    public async Task<ActionResult<List<Panel>>> GetAlerts()
    {
        var panel = await panelRepository.GetAlerts();

        return Ok(panel);
    }
}
