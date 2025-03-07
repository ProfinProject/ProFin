using Microsoft.AspNetCore.Mvc;
using ProFin.Core.Interfaces.Services;
using ProFin.Core.Models;

namespace ProFin.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class PanelsController(
        IPanelService panelService,
        INotifier notifier
        ) : MainController(notifier)
{
    [HttpGet("Panels")]
    public async Task<ActionResult<List<Panel>>> GetPanels()
    {
        var panel = await panelService.GetPanels();

        return Ok(panel);
    }

    [HttpGet("Alerts")]
    public async Task<ActionResult<List<Panel>>> GetAlerts()
    {
        var panel = await panelService.GetAlerts();

        return Ok(panel);
    }
}
