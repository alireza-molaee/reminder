import { InjectionToken } from "@angular/core";

export enum NotificationStatus {
  Danger,
  Info,
  Success,
}

export interface Notification {
  status: NotificationStatus;
  description: string;
}

export interface NotificationLogger {
  log(notification: Notification): void;
}

export const NOTIFICATION_LOGGERS = new InjectionToken<NotificationLogger[]>(
  "logic for logging notifications"
);

export interface NotifierConfig {
  enable: boolean;
  enableLoggers: boolean;
}
