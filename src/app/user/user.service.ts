import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "./user.model";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private url: string = "/rest/todo/user";

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.url}/`);
  }

  public getOne(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.url}/${id}`);
  }

  public editUser(user: User, id: number): Observable<User> {
    return this.httpClient.put<User>(`${this.url}/${id}`, user);
  }

  public addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.url}/`, user);
  }
}
