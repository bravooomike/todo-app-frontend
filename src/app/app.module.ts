import { TaskModule } from "./task/task.module";
import { InfoPageModule } from "./info-page/info-page.module";
import { SharedModule } from "./shared/shared.module";
import { AuthService } from "./login/auth.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { LoginModule } from "./login/login.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AuthResolver } from "./login/auth.resolver";
import { AuthInterceptor } from "./login/auth.interceptor";
import { TaskService } from "./task/task.service";
import { MaterialModule } from "./material/material.module";
import { PageTitleSharedService } from "./shared/services/page-title-shared.service";
import {
  NgxMatDatetimePickerModule,
  NgxMatTimepickerModule,
  NgxMatNativeDateModule,
} from "@angular-material-components/datetime-picker";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LoginModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    InfoPageModule,
    AppRoutingModule,
    TaskModule,
    FontAwesomeModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
  ],
  providers: [
    AuthService,
    AuthResolver,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    TaskService,
    PageTitleSharedService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
