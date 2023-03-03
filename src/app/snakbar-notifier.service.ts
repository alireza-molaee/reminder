import { Injectable } from "@angular/core";
import { AbstractNotifier } from "./notification/abstract-notifier";
import { Notification } from "./notification/notification.types";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({ providedIn: "root" })
export class SnackBarNotifierService extends AbstractNotifier {
  constructor(private _snackBar: MatSnackBar) {
    super();
  }
  doNotify(notification: Notification): void {
    this._snackBar.open(notification.description, undefined, {
      duration: 2000,
    });
  }
}
