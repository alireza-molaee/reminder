import { Component, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import {
  MatSelectionList,
  MatSelectionListChange,
} from "@angular/material/list";
import { NotificationService } from "./notification/notification.service";
import { NotificationStatus } from "./notification/notification.types";
import { ReminderFormDialogComponent } from "./reminder-form-dialog.component";
import { Todo } from "./types";

@Component({
  selector: "app-root",
  template: `
    <mat-toolbar color="primary">
      <h2>Reminder</h2>
    </mat-toolbar>
    <mat-card class="center-page-container">
      <div class="like-row">
        <h3>Reminders</h3>
        <button mat-button color="error" (click)="deleteAllDone()">
          Delete All Done
        </button>
      </div>
      <mat-selection-list
        (selectionChange)="handleReminderSelectionChange($event)"
      >
        <mat-list-option *ngFor="let reminder of reminders" [value]="reminder">
          {{ reminder.title }}
        </mat-list-option>
      </mat-selection-list>
    </mat-card>
    <div class="fab-container">
      <button (click)="openReminderFormDialog()" mat-fab color="warn">
        <mat-icon fontIcon="add"></mat-icon>
      </button>
    </div>
  `,
})
export class AppComponent {
  reminders: Todo[] = [];

  constructor(
    public dialog: MatDialog,
    private notificationService: NotificationService
  ) {}

  openReminderFormDialog() {
    const dialogRef = this.dialog.open(ReminderFormDialogComponent);
    dialogRef.afterClosed().subscribe((data: Todo) => {
      if (data) {
        this.reminders.push(data);
        this.notificationService.notify({
          description: "Added: " + data.title,
          status: NotificationStatus.Success,
        });
      }
    });
  }

  handleReminderSelectionChange(event: MatSelectionListChange) {
    event.options.forEach(
      (option) => ((option.value as Todo).done = option.selected)
    );
    this.notificationService.notify({
      description: `${event.options.length} task/tasks status changed`,
      status: NotificationStatus.Info,
    });
  }

  deleteAllDone() {
    this.reminders = this.reminders.filter((i) => !i.done);
    this.notificationService.notify({
      description: "All of done tasks removed",
      status: NotificationStatus.Danger,
    });
  }
}
