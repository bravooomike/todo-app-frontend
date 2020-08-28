import { TaskComponent } from "./task/task.component";
import { LoginComponent } from "./login/login.component";
import { AuthService } from "./login/auth.service";
import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { InfoPageComponent } from "./info-page/info-page.component";
import { AuthResolver } from "./login/auth.resolver";
import { AuthGuard } from "./login/auth.guard";

const APP_ROUTES: Route[] = [
  { path: "", pathMatch: "full", redirectTo: "infoPage" },
  // { path: "infoPage", component: InfoPageComponent },
  // { path: "login", component: LoginComponent },
  {
    path: "",
    resolve: { userIdentity: AuthResolver },
    children: [
      { path: "infoPage", component: InfoPageComponent },
      { path: "login", component: LoginComponent },
      {
        path: "task",
        component: TaskComponent,
        canActivate: [AuthGuard],
        data: { roleTypes: ["ADMIN", "USER"] },
      },
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
