import { TaskResolveService } from "./task/task-resolve.service";
import { TaskEditComponent } from "./task/task-edit/task-edit.component";
import { TaskComponent } from "./task/task.component";
import { LoginComponent } from "./login/login.component";
import { AuthService } from "./login/auth.service";
import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { InfoPageComponent } from "./info-page/info-page.component";
import { AuthResolver } from "./login/auth.resolver";
import { AuthGuard } from "./login/auth.guard";
import { TaskAddComponent } from "./task/task-add/task-add.component";
import { LoginGuard } from "./login/login.guard";

const APP_ROUTES: Route[] = [
  { path: "", pathMatch: "full", redirectTo: "infoPage" },
  {
    path: "",
    resolve: { userIdentity: AuthResolver },
    children: [
      {
        path: "infoPage",
        component: InfoPageComponent,
        canActivate: [LoginGuard],
      },
      { path: "login", component: LoginComponent, canActivate: [LoginGuard] },
      {
        path: "task",
        component: TaskComponent,
        canActivate: [AuthGuard],
        data: { roleTypes: ["ADMIN", "USER"] },
      },
      {
        path: "task/:id",
        component: TaskEditComponent,
        resolve: { task: TaskResolveService },
      },
      {
        path: "add",
        component: TaskAddComponent,
      },
    ],
  },
  // {path='/*', }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
  providers: [AuthService],
})
export class AppRoutingModule {}
