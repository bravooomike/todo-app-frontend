import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { TaskStatus } from "./task-status.model";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TaskStatusService {
  private url: string = "/rest/todo/taskStatus";

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<TaskStatus[]> {
    return this.httpClient.get<TaskStatus[]>(`${this.url}/`);
  }
}
