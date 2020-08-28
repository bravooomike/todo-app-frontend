import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { MaterialModule } from "../material/material.module";

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, MaterialModule, FontAwesomeModule],
  exports: [HeaderComponent],
})
export class SharedModule {}