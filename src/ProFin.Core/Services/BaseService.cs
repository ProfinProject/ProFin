using FluentValidation;
using FluentValidation.Results;
using ProFin.Core.Interfaces.Services;
using ProFin.Core.Models;
using ProFin.Core.Notifications;
namespace ProFin.Core.Services
{
    public abstract class BaseService
    {
        private readonly INotifier _notifier;

        protected BaseService(INotifier notifier)
        {
            _notifier = notifier;
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
    }
}
