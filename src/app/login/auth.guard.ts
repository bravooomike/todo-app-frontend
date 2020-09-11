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
import { map } from "rxjs/operators";
import { UserIdentity } from "./user-identity.model";

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

    return this.authService.refresh().pipe(
      map((user: UserIdentity) => {
        if (user) {
          return this.hasAnyPermission(roleTypes);
        }

        this.router.navigateByUrl("/login");
      })
    );
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
