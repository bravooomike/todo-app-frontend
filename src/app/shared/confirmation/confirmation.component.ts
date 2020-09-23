import { TaskService } from "./../../task/task.service";
import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-confirmation",
  templateUrl: "./confirmation.component.html",
  styleUrls: ["./confirmation.component.scss"],
})
export class ConfirmationComponent implements OnInit {
  faExclamationTriangle = faExclamationTriangle;

  constructor(
    private taskService: TaskService,
    public dialogRef: MatDialogRef<ConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit() {}

  public deleteTask() {
    if (!this.data.taskId) {
      return;
    } else {
      this.taskService.deleteTask(this.data.taskId).subscribe();
    }
  }
}
