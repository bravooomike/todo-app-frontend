import { TaskTypeService } from "./task-type.service";
import { Component, OnInit, Input, forwardRef } from "@angular/core";
import { TaskType } from "./task-type.model";
import {
  ControlValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from "@angular/forms";
import { MatSelectChange } from "@angular/material";

@Component({
  selector: "app-task-type",
  templateUrl: "./task-type.component.html",
  styleUrls: ["./task-type.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => TaskTypeComponent),
    },
  ],
})
export class TaskTypeComponent implements OnInit, ControlValueAccessor {
  public taskTypes: TaskType[] = [];
  public selectedId: number;
  public taskTypeForm: FormControl = new FormControl();

  propagateChange = (_: any) => {};

  constructor(private taskTypeService: TaskTypeService) {}

  ngOnInit() {
    this.getAll();
  }

  public getAll() {
    this.taskTypeService.getAll().subscribe((taskTypes) => {
      this.taskTypes = taskTypes;
    });
  }

  // 3 metody ControlValueAccessor
  // ControlValueAccessor używamy kiedy tworzymy customowy komponent do formularza np. taskType
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {}

  writeValue(obj: any): void {
    this.selectedId = obj.id;
    this.taskTypeForm.setValue(this.selectedId);
    // console.log(this.selected);
  }

  onSelect($event: MatSelectChange) {
    this.selectedId = $event.value;
    this.propagateChange(
      this.taskTypes.find((el) => el.id === this.selectedId)
    );
  }
}
