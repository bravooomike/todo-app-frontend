import { TaskStatusService } from "./../task-status/task-status.service";
import { TaskType } from "./../task-type/task-type.model";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { TaskService } from "../task.service";
import { Task } from "../task.model";
import { TaskStatus } from "../task-status/task-status.model";

@Component({
  selector: "app-ended-task",
  templateUrl: "./ended-task.component.html",
  styleUrls: ["./ended-task.component.scss"],
})
export class EndedTaskComponent implements OnInit {
  public task: Task;
  public taskStatuses: TaskStatus[];

  constructor(
    private taskService: TaskService,
    private taskStatusService: TaskStatusService
  ) {}

  ngOnInit() {
    this.getTaskStatuses();
  }

  public getTask(task: Task) {
    this.taskService.getOne(task.id).subscribe((task) => {
      this.task = task;
      this.saveTask(this.task);
    });
  }

  private saveTask(task: Task) {
    const taskStatusEnd = this.taskStatuses.find(
      (status) => status.code === "zak"
    );

    task.taskStatus = taskStatusEnd;

    this.taskService.editTask(task, task.id).subscribe();
  }

  public getTaskStatuses() {
    this.taskStatusService.getAll().subscribe((taskStatuses) => {
      this.taskStatuses = taskStatuses;
    });
  }
}
