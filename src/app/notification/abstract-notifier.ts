import { Notification } from "./notification.types";

export abstract class AbstractNotifier {
  abstract doNotify(notification: Notification): void;
}
