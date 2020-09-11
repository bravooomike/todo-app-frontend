import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserIdentity } from "./user-identity.model";
import { Observable, pipe, ObservableInput, of } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private url: string = "rest/todo/auth";
  public userIdentity: UserIdentity;

  constructor(private httpClient: HttpClient, private router: Router) {}
  // constructor(private httpClient: HttpClient) {}

  public login(login: string, password: string): Observable<UserIdentity> {
    let headers = new HttpHeaders();
    headers = headers.append(
      "Authorization",
      "Basic " + btoa(login + ":" + password)
    );

    headers = headers.append("Content-type", "application/json");
    return this.httpClient
      .get<UserIdentity>(`${this.url}/`, { headers: headers })
      .pipe(
        map((user) => {
          this.userIdentity = user;
          // console.log("UserIdentity: ", this.userIdentity);
          return user;
        })
      );
  }

  public refresh(): Observable<UserIdentity> {
    return this.httpClient.get<UserIdentity>(`${this.url}/`).pipe(
      catchError((err) => {
        console.log(err.status);
        this.userIdentity = null;
        return of(null);
      }),
      map((user) => {
        this.userIdentity = user;
        return user;
      })
    );
  }

  public logout() {
    return this.httpClient.post<void>(`${this.url}/logout`, null).pipe(
      map(() => {
        this.userIdentity = undefined;
        this.router.navigateByUrl("/login");
      })
    );
  }

  public clearSession() {
    this.userIdentity = undefined;
  }
}
