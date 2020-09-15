import { TaskStatusService } from "./task-status.service";
import {
  Component,
  OnInit,
  forwardRef,
  Output,
  EventEmitter,
} from "@angular/core";
import { TaskStatus } from "./task-status.model";
import {
  ControlValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from "@angular/forms";
import { MatSelectChange } from "@angular/material";

@Component({
  selector: "app-task-status",
  templateUrl: "./task-status.component.html",
  styleUrls: ["./task-status.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => TaskStatusComponent),
    },
  ],
})
export class TaskStatusComponent implements OnInit {
  private taskStatuses: TaskStatus[] = [];
  public selectedId: number;
  public taskTypeForm: FormControl = new FormControl();
  public taskStatus: string = "";

  // @Output()
  // public changedTaskStatus: EventEmitter<string> = new EventEmitter<string>();

  propagateChange = (_: any) => {};

  constructor(private taskStatusService: TaskStatusService) {}

  ngOnInit() {
    this.getAll();
  }

  public getAll() {
    this.taskStatusService.getAll().subscribe((taskStatuses) => {
      this.taskStatuses = taskStatuses;
    });
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {}

  writeValue(obj: any): void {
    this.selectedId = obj.id;
    this.taskTypeForm.setValue(this.selectedId);
    console.log(this.selectedId);
  }

  onSelect($event: MatSelectChange) {
    this.selectedId = $event.value;
    // console.log(this.selectedId);
    this.propagateChange(
      this.taskStatuses.find((el) => el.id === this.selectedId)
    );
  }

  // public emitTaskStatus(): void {
  //   console.log(this.taskStatus);
  //   this.changedTaskStatus.emit(this.taskStatus);
  // }
}
