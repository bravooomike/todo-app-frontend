import { TaskService } from "./task.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.scss"],
})
export class TaskComponent implements OnInit {
  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getAll().subscribe();
  }
}
