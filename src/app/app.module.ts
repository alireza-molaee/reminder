import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDialogModule } from "@angular/material/dialog";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSnackBarModule } from "@angular/material/snack-bar";

import { NotificationModule } from "./notification/notification.module";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReminderFormDialogComponent } from "./reminder-form-dialog.component";
import { FormsModule } from "@angular/forms";
import { NOTIFICATION_LOGGERS } from "./notification/notification.types";
import { ConsoleNotificationLogger } from "./console-notification-logger";
import { AbstractNotifier } from "./notification/abstract-notifier";
import { SnackBarNotifierService } from "./snakbar-notifier.service";

@NgModule({
  declarations: [AppComponent, ReminderFormDialogComponent],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule,
    NotificationModule,
  ],
  providers: [
    {
      provide: NOTIFICATION_LOGGERS,
      useClass: ConsoleNotificationLogger,
      multi: true,
    },
    {
      provide: AbstractNotifier,
      useClass: SnackBarNotifierService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
