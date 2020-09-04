import { TaskTypeService } from "./task-type.service";
import { Component, OnInit } from "@angular/core";
import { TaskType } from "./task-type.model";

@Component({
  selector: "app-task-type",
  templateUrl: "./task-type.component.html",
  styleUrls: ["./task-type.component.scss"],
})
export class TaskTypeComponent implements OnInit {
  public taskTypes: TaskType[] = [];

  constructor(private taskTypeService: TaskTypeService) {}

  ngOnInit() {
    this.getAll();
  }

  public getAll() {
    this.taskTypeService.getAll().subscribe((taskTypes) => {
      this.taskTypes = taskTypes;
      console.log(this.taskTypes);
    });
  }
}
