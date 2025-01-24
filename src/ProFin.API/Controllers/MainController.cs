using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.AspNetCore.Mvc;
using ProFin.Core.Interfaces.Services;
using ProFin.Core.Notifications;

namespace ProFin.API.Controllers
{
    [ApiController]
    public abstract class MainController : ControllerBase
    {
        private readonly INotifier _notifier;
        //public readonly IUser AppUser;

        protected Guid UsuarioId { get; set; }
        protected bool UsuarioAutenticado { get; set; }

        protected MainController(INotifier notifier)
        {
            _notifier = notifier;
            //AppUser = appUser;

            //if (appUser.IsAuthenticated())
            //{
            //    UsuarioId = appUser.GetUserId();
            //    UsuarioAutenticado = true;
            //}
        }

        protected bool IsValid()
        {
            return _notifier.HasNotification() == false;
        }

        protected ActionResult CustomResponse(object result = null)
        {
            if (IsValid())
            {
                return Ok(new
                {
                    success = true,
                    data = result
                });
            }

            return BadRequest(new
            {
                success = false,
                errors = _notifier.GetNotifications().Select(n => n.Message)
            });
        }

        protected ActionResult CustomResponse(ModelStateDictionary modelState)
        {
            if (!modelState.IsValid) NotifieErrorInvalidModel(modelState);
            return CustomResponse();
        }

        protected void NotifieErrorInvalidModel(ModelStateDictionary modelState)
        {
            var erros = modelState.Values.SelectMany(e => e.Errors);
            foreach (var erro in erros)
            {
                var errorMsg = erro.Exception == null ? erro.ErrorMessage : erro.Exception.Message;
                NotifieError(errorMsg);
            }
        }

        protected void NotifieError(string message)
        {
            _notifier.Handle(new Notification(message));
        }
    }
}
