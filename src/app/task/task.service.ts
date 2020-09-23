import { TaskStatus } from "./task-status/task-status.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Task } from "./task.model";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  private url: string = "/rest/todo/task";
  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(`${this.url}/`);
  }

  public getOne(id: number): Observable<Task> {
    return this.httpClient.get<Task>(`${this.url}/${id}`);
  }

  public editTask(task: Task, id: number): Observable<Task> {
    return this.httpClient.put<Task>(`${this.url}/${id}`, task);
  }

  public changeTaskStatus(
    task: Task,
    id: number,
    status: TaskStatus
  ): Observable<Task> {
    task.taskStatus = status;
    return this.editTask(task, id);
  }

  public addTask(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(`${this.url}/`, task);
  }

  public deleteTask(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }
}
