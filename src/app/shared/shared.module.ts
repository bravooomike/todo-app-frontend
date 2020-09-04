import { PageTitleSharedService } from "./services/page-title-shared.service";
import { AuthService } from "./../login/auth.service";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { MaterialModule } from "../material/material.module";
import { DateFormatterPipe } from "./pipes/date-formatter.pipe";
import { PageTitleComponent } from "./page-title/page-title.component";
import { MenuComponent } from "./menu/menu.component";
import { TaskTypePipe } from "./pipes/task-type.pipe";

@NgModule({
  declarations: [
    HeaderComponent,
    DateFormatterPipe,
    PageTitleComponent,
    MenuComponent,
    TaskTypePipe,
  ],
  imports: [CommonModule, RouterModule, MaterialModule, FontAwesomeModule],
  exports: [
    HeaderComponent,
    DateFormatterPipe,
    PageTitleComponent,
    MenuComponent,
    TaskTypePipe,
  ],
  providers: [AuthService, PageTitleSharedService],
})
export class SharedModule {}
