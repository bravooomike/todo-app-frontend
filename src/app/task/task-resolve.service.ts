import { TaskService } from "./task.service";
import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Task } from "./task.model";

@Injectable({
  providedIn: "root",
})
export class TaskResolveService implements Resolve<Task> {
  constructor(private taskService: TaskService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.taskService.getOne(route.params["id"]);
  }
}
