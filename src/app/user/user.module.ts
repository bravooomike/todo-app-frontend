import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserListComponent } from "./user-list/user-list.component";
import { MaterialModule } from "../material/material.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import {
  NgxMatDatetimePickerModule,
  NgxMatTimepickerModule,
} from "@angular-material-components/datetime-picker";
import { UserAddComponent } from "./user-add/user-add.component";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { RouterModule } from "@angular/router";
import { UserFilterComponent } from './user-filter/user-filter.component';

@NgModule({
  declarations: [UserListComponent, UserAddComponent, UserEditComponent, UserFilterComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FontAwesomeModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
  ],
  exports: [UserListComponent, UserAddComponent, UserEditComponent],
})
export class UserModule {}
