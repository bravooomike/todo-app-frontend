import { RemainingTimeSharedService } from "./services/remaining-time-shared.service";
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
import { CountdownComponent } from "./countdown/countdown.component";
import { UserRoleFormatterPipe } from "./pipes/user-role-formatter.pipe";
import { TimeExceededCounterComponent } from "./time-exceeded-counter/time-exceeded-counter.component";
import { TimeIconsComponent } from "./time-icons/time-icons.component";

@NgModule({
  declarations: [
    HeaderComponent,
    DateFormatterPipe,
    PageTitleComponent,
    MenuComponent,
    CountdownComponent,
    UserRoleFormatterPipe,
    TimeExceededCounterComponent,
    TimeIconsComponent,
  ],
  imports: [CommonModule, RouterModule, MaterialModule, FontAwesomeModule],
  exports: [
    HeaderComponent,
    DateFormatterPipe,
    UserRoleFormatterPipe,
    PageTitleComponent,
    MenuComponent,
    CountdownComponent,
    TimeExceededCounterComponent,
    TimeIconsComponent,
  ],
  providers: [AuthService, PageTitleSharedService, RemainingTimeSharedService],
})
export class SharedModule {}
