import { TaskType } from "./task-type.model";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class TaskTypeService {
  private url: string = "/rest/todo/taskType";

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<TaskType[]> {
    return this.httpClient.get<TaskType[]>(`${this.url}/`);
  }
}
