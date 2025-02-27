using ProFin.Core.Models;

namespace ProFin.Core.Interfaces.Services
{
    public interface IUserService : IDisposable
    {
        public void ValidateUser(User user);
        public Task Create(User user);
        public Task Update(User user);
    }
}
