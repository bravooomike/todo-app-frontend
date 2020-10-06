import { TaskStatus } from "./task-status/task-status.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Task } from "./task.model";
import { Page } from "../shared/model/page.model";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  private url: string = "/rest/todo/task";
  constructor(private httpClient: HttpClient) {}

  public getAll(
    filterValue: string,
    allTasksDisplay: boolean,
    pageNumber: number,
    pageSize: number
  ): Observable<Page<Task>> {
    return this.httpClient.get<Page<Task>>(`${this.url}/`, {
      params: {
        filter: filterValue,
        allTasks: allTasksDisplay.toString(),
        size: pageSize.toString(),
        page: pageNumber.toString(),
      },
    });
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

  // public filterTasks() {}
}
