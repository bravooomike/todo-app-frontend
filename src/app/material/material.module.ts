import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatButtonModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatSelectModule,
  MatToolbarModule,
  MatDialogConfig,
  MAT_DIALOG_DEFAULT_OPTIONS,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBar,
  MatSnackBarConfig,
  MatDividerModule,
  MatListModule,
  MatSortModule,
} from "@angular/material";

const MATERIAL_MODULE = [
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatButtonModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatSelectModule,
  MatToolbarModule,
  MatDividerModule,
  MatListModule,
  MatSortModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [...MATERIAL_MODULE],
})
export class MaterialModule {}
