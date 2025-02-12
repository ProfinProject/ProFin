using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.AspNetCore.Mvc;
using ProFin.Core.Interfaces.Services;
using ProFin.Core.Notifications;
using Microsoft.AspNetCore.Authorization;

namespace ProFin.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public abstract class MainController(INotifier notifier) : ControllerBase
    {
        private readonly INotifier _notifier = notifier;
        //public readonly IUser AppUser;

        protected Guid UsuarioId { get; set; }
        protected bool UsuarioAutenticado { get; set; }

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
