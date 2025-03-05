using ProFin.API.ViewModel;
using ProFin.Core.Models;

namespace ProFin.Core.Interfaces.Repositories;

public interface IPanelRepository
{
    Task<List<Panel>> GetPanels();

    Task<List<PanelAlert>> GetAlerts(); 
}
