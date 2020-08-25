import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  constructor(private httpClient: HttpClient) {}

  public getAll() {
    return this.httpClient.get("/rest/todo/task");
  }
}
