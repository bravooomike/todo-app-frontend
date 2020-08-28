import { Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const roleTypes: string[] = next.data["roleTypes"];
    console.log(this.hasAnyPermission(roleTypes));

    if (this.authService.userIdentity) {
      return this.hasAnyPermission(roleTypes);
    }

    this.router.navigateByUrl("/login");
  }

  public hasPermission(role: string) {
    return this.hasAnyPermission([role]);
  }

  public hasAnyPermission(roleTypes: string[]) {
    if (this.authService.userIdentity) {
      return roleTypes.some((role) =>
        this.authService.userIdentity.userRoles.some(
          (userRole) => userRole === role
        )
      );
    } else {
      return false;
    }
  }
}
