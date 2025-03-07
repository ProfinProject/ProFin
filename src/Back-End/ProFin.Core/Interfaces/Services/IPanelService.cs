using ProFin.Core.Models;

namespace ProFin.Core.Interfaces.Services
{
    public interface IPanelService : IDisposable
    {
        Task<List<Panel>> GetPanels();

        Task<List<PanelAlert>> GetAlerts();
    }
}
