import {
  Notification,
  NotificationLogger,
  NotificationStatus,
} from "./notification/notification.types";

export class ConsoleNotificationLogger implements NotificationLogger {
  constructor() {}
  log(notification: Notification): void {
    switch (notification.status) {
      case NotificationStatus.Danger:
        console.log("Danger:" + notification.description);
        break;
      case NotificationStatus.Info:
        console.log("Info:" + notification.description);
        break;
      case NotificationStatus.Success:
        console.log("Success:" + notification.description);
        break;
      default:
        console.log(notification.description);
    }
  }
}
