import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-task-filter",
  templateUrl: "./task-filter.component.html",
  styleUrls: ["./task-filter.component.scss"],
})
export class TaskFilterComponent implements OnInit {
  public value: string = "";
  public isChecked: boolean = false;

  @Output()
  public changedValue: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public checkedValue: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  public emitChange(): void {
    this.changedValue.emit(this.value);
  }

  public emitCheck(): void {
    this.checkedValue.emit(this.isChecked);
  }
}
