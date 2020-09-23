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
import { TaskDetailsComponent } from "./task-details/task-details.component";
import { EndedTaskComponent } from "./ended-task/ended-task.component";
import { TaskListComponent } from "./task-list/task-list.component";
import { ToastService } from "../shared/services/toast.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { ConfirmationComponent } from "../shared/confirmation/confirmation.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

@NgModule({
  declarations: [
    TaskComponent,
    TaskEditComponent,
    TaskAddComponent,
    TaskTypeComponent,
    TaskStatusComponent,
    TaskFilterComponent,
    TaskDetailsComponent,
    EndedTaskComponent,
    TaskListComponent,
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
    BrowserModule,
    BrowserAnimationsModule,
    NgxDatatableModule,
  ],
  exports: [
    TaskComponent,
    TaskEditComponent,
    TaskAddComponent,
    TaskTypeComponent,
    TaskStatusComponent,
    TaskFilterComponent,
    TaskDetailsComponent,
    EndedTaskComponent,
    TaskListComponent,
  ],
  entryComponents: [ConfirmationComponent],
})
export class TaskModule {}
