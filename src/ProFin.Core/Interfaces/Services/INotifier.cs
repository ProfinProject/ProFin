using ProFin.Core.Notifications;

namespace ProFin.Core.Interfaces.Services
{
    public interface INotifier
    {
        bool HasNotification();
        List<Notification> GetNotifications();
        void Handle(Notification notification);
    }
}
