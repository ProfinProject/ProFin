using ProFin.Core.Interfaces.Repositories;
using ProFin.Core.Interfaces.Services;
using ProFin.Core.Models;
using ProFin.Core.Models.Validations;

namespace ProFin.Core.Services
{
    public class UserService : BaseService, IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository, INotifier notifier)
            : base(notifier)
        {
            _userRepository = userRepository;
        }

        public async Task Create(User user)
        {
            if (!ExecuteValidation(new UserValidation(), user) == false) return;

            await _userRepository.Add(user);
        }
        public async Task Update(User user)
        {
            if (!ExecuteValidation(new UserValidation(), user) == false) return;

            await _userRepository.Update(user);
        }

        public void Dispose()
        {
            _userRepository.Dispose();
        }
    }
}
