import { TaskTypeService } from "./task-type.service";
import { Component, OnInit, Input } from "@angular/core";
import { TaskType } from "./task-type.model";
import { FormControl, FormControlName, FormGroup } from "@angular/forms";

@Component({
  selector: "app-task-type",
  templateUrl: "./task-type.component.html",
  styleUrls: ["./task-type.component.scss"],
})
export class TaskTypeComponent implements OnInit {
  public taskTypes: TaskType[] = [];
  // @Input() formGroup: FormGroup;
  // @Input() formControlName: FormControl;

  constructor(private taskTypeService: TaskTypeService) {}

  ngOnInit() {
    this.getAll();
  }

  public getAll() {
    this.taskTypeService.getAll().subscribe((taskTypes) => {
      this.taskTypes = taskTypes;
    });
  }

  public controlValueAccesor() {}
}
