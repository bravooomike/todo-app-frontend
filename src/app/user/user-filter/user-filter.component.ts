import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-user-filter",
  templateUrl: "./user-filter.component.html",
  styleUrls: ["./user-filter.component.scss"],
})
export class UserFilterComponent implements OnInit {
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
