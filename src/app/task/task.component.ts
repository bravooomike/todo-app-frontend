import { PageTitleSharedService } from "./../shared/services/page-title-shared.service";
import { Router } from "@angular/router";
import { TaskService } from "./task.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Task } from "./task.model";
import {
  faEdit,
  faCommentSlash,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.scss"],
})
export class TaskComponent implements OnInit {
  public tasks: Task[] = [];
  public title: string = "Lista zadań";
  public displayedHeaders = [
    "Zadanie",
    "Szczegóły",
    "Typ zadania",
    "Status zadania",
    "Data dodania",
    "Do kiedy?",
    "Data zakończenia",
    "Akcje",
  ];
  public faEdit = faEdit;
  public faCommentSlash = faCommentSlash;
  public faTrashAlt = faTrashAlt;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private pageTitleSharedService: PageTitleSharedService
  ) {}

  ngOnInit() {
    this.getAll();
    this.pageTitleSharedService.sharePageTitle(this.title);
  }

  public getAll() {
    this.taskService.getAll().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  public goToEdit(id: number) {
    this.router.navigate(["/task", id]);
  }

  public deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => {
      this.getAll();
    });
  }
}
