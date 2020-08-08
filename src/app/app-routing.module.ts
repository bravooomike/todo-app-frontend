import { TaskComponent } from "./task/task.component";
import { LoginComponent } from "./login/login.component";
import { AuthService } from "./login/auth.service";
import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { InfoPageComponent } from "./info-page/info-page.component";

const APP_ROUTES: Route[] = [
  { path: "", pathMatch: "full", redirectTo: "infoPage" },
  // { path: "infoPage", component: InfoPageComponent },
  // { path: "login", component: LoginComponent },
  {
    path: "",
    children: [
      { path: "infoPage", component: InfoPageComponent },
      { path: "login", component: LoginComponent },
      { path: "task", component: TaskComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
  providers: [AuthService],
})
export class AppRoutingModule {}
