import { Component } from "@angular/core";
import { Todo } from "./types";

@Component({
  selector: "app-reminder-form-dialog",
  template: `
    <h1 mat-dialog-title>Create a reminder</h1>
    <div mat-dialog-content class="form">
      <mat-form-field class="control" appearance="fill">
        <mat-label>TODO</mat-label>
        <input
          matInput
          placeholder="Ex. Reed that book..."
          [(ngModel)]="data.title"
        />
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-raised-button color="primary" [mat-dialog-close]="data">
        Add
      </button>
    </div>
  `,
  styles: [],
})
export class ReminderFormDialogComponent {
  public data: Todo = {
    title: "",
    done: false,
  };
}
