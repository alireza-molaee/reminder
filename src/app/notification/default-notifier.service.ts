import { Injectable } from "@angular/core";
import { AbstractNotifier } from "./abstract-notifier";
import { Notification } from "./notification.types";

@Injectable({ providedIn: "root" })
export class DefaultNotifierService extends AbstractNotifier {
  doNotify(notification: Notification): void {
    alert(notification.description);
  }
}
