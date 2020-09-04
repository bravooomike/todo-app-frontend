import { TaskStatusService } from "./task-status.service";
import { Component, OnInit } from "@angular/core";
import { TaskStatus } from "./task-status.model";

@Component({
  selector: "app-task-status",
  templateUrl: "./task-status.component.html",
  styleUrls: ["./task-status.component.scss"],
})
export class TaskStatusComponent implements OnInit {
  private taskStatuses: TaskStatus[] = [];

  constructor(private taskStatusService: TaskStatusService) {}

  ngOnInit() {
    this.getAll();
  }

  public getAll() {
    this.taskStatusService.getAll().subscribe((taskStatuses) => {
      this.taskStatuses = taskStatuses;
      console.log(this.taskStatuses);
    });
  }
}
