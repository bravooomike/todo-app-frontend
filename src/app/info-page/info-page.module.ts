import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InfoPageComponent } from "./info-page.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [InfoPageComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [InfoPageComponent],
})
export class InfoPageModule {}
