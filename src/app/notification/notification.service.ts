import { Inject, Injectable, Optional } from "@angular/core";
import { AbstractNotifier } from "./abstract-notifier";
import { NotificationConfigurationService } from "./notification-configuration.service";
import {
  Notification,
  NOTIFICATION_LOGGERS,
  NotificationLogger,
} from "./notification.types";

@Injectable({ providedIn: "root" })
export class NotificationService {
  constructor(
    @Inject(NOTIFICATION_LOGGERS)
    @Optional()
    private loggers: NotificationLogger[],
    private notificationConfigurationService: NotificationConfigurationService,
    private notifier: AbstractNotifier
  ) {}

  public notify(notification: Notification) {
    if (this.notificationConfigurationService.configuration.enable) {
      this.notifier.doNotify(notification);
    }
    if (this.notificationConfigurationService.configuration.enableLoggers) {
      if (this.loggers && this.loggers.length > 0) {
        this.loggers.forEach((logger) => {
          logger.log(notification);
        });
      }
    }
  }
}
