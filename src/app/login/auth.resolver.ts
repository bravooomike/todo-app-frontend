import { UserIdentity } from "./user-identity.model";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthResolver implements Resolve<UserIdentity> {
  constructor(private authService: AuthService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<UserIdentity> {
    // resolver w momencie załadowania aplikacji do przeglądarki
    // jest ściśle związany z routingiem czyli musi tam być zdefiniowany

    // console.log(!this.authService.userIdentity);
    // if (!this.authService.userIdentity) {
    return this.authService.refresh().pipe(
      catchError(() => {
        return of(null);
      })
    );
    // }
  }
}
