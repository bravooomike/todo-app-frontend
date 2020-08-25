import { AuthService } from "src/app/login/auth.service";
// import { AuthService } from "src/app/login/auth.service";
// import { AuthGuard } from "./auth.guard";
import { Router } from "@angular/router";
import { catchError } from "rxjs/operators";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router, private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        // console.log(req);
        // console.log(error);

        // interceptor uruchamia się tylko na każde żadania http wykonywane przez httpClienta
        // nie działa na wpisanie w ścieżce danej podstrony

        // console.log(this.router.url);
        if (error.status === 401 && req.url !== "rest/todo/auth/") {
          this.authService.clearSession();
          this.router.navigateByUrl("/login");
        }

        return throwError(error);
      })
    );
  }
}
