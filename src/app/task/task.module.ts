import {
  NgxMatDatetimePickerModule,
  NgxMatTimepickerModule,
} from "@angular-material-components/datetime-picker";
import { SharedModule } from "./../shared/shared.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TaskComponent } from "./task.component";
import { MaterialModule } from "../material/material.module";
import { TaskEditComponent } from "./task-edit/task-edit.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TaskAddComponent } from "./task-add/task-add.component";
import { TaskTypeComponent } from "./task-type/task-type.component";
import { TaskStatusComponent } from "./task-status/task-status.component";
import { TaskFilterComponent } from "./task-filter/task-filter.component";
// import { CountdownComponent } from "../shared/countdown/countdown.component";

@NgModule({
  declarations: [
    TaskComponent,
    TaskEditComponent,
    TaskAddComponent,
    TaskTypeComponent,
    TaskStatusComponent,
    TaskFilterComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    // CountdownComponent,
  ],
  exports: [
    TaskComponent,
    TaskEditComponent,
    TaskAddComponent,
    TaskTypeComponent,
    TaskStatusComponent,
    TaskFilterComponent,
  ],
})
export class TaskModule {}
