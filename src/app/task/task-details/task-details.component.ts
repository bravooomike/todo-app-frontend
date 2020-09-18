import { Component, OnInit, Input } from "@angular/core";
import { Task } from "../task.model";

@Component({
  selector: "app-task-details",
  templateUrl: "./task-details.component.html",
  styleUrls: ["./task-details.component.scss"],
})
export class TaskDetailsComponent implements OnInit {
  @Input()
  public task: Task;

  constructor() {}

  ngOnInit() {}
}
