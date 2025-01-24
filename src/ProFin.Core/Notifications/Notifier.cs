using ProFin.Core.Interfaces.Services;

namespace ProFin.Core.Notifications
{
    public class Notifier : INotifier
    {
        private List<Notification> _notifications;

        public Notifier(List<Notification> notifications)
        {
            _notifications = notifications;
        }

        public List<Notification> GetNotifications()
        {
            return _notifications;
        }

        public void Handle(Notification notification)
        {
            _notifications.Add(notification);
        }

        public bool HasNotification()
        {
            return _notifications.Any();
        }
    }
}
