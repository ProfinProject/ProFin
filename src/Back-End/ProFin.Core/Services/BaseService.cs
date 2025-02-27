using FluentValidation;
using FluentValidation.Results;
using ProFin.Core.Interfaces;
using ProFin.Core.Interfaces.Services;
using ProFin.Core.Models;
using ProFin.Core.Notifications;

namespace ProFin.Core.Services
{
    public abstract class BaseService
    {
        private readonly INotifier _notifier;
        protected readonly IAppUserService _userService;

        protected BaseService(INotifier notifier, IAppUserService userService)
        {
            _notifier = notifier;
            _userService = userService;
        }

        protected void Notifie(ValidationResult validationResult)
        {
            foreach (var error in validationResult.Errors)
            {
                Notifie(error.ErrorMessage);
            }
        }

        protected void Notifie(string mensagem)
        {
            _notifier.Handle(new Notification(mensagem));
        }

        protected bool ExecuteValidation<TV, TE>(TV validacao, TE entidade) where TV : AbstractValidator<TE> where TE : Entity
        {
            var validator = validacao.Validate(entidade);

            if (validator.IsValid) return true;

            Notifie(validator);

            return false;
        }

        protected bool CanEdit(Guid userId)
        {
            return _userService.IsAdmin() == true || _userService.GetId() == userId;
        }

    }
}
