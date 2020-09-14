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
import { CountdownComponent } from "ngx-countdown";

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
    "Pozostało",
    "Data zakończenia",
    "Akcje",
  ];
  public faEdit = faEdit;
  public faCommentSlash = faCommentSlash;
  public faTrashAlt = faTrashAlt;

  // public countdown = "";
  // public countdown = (expiredDate) => {
  //   const interval = setInterval(() => {
  //     const now = new Date().getTime();
  //     const distance = expiredDate - now;
  //     const d = Math.floor(distance / (1000 * 60 * 60 * 24));
  //     const h = Math.floor(
  //       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //     );
  //     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //     const m = minutes > 9 ? minutes : `0${minutes}`;
  //     const s = seconds > 9 ? seconds : `0${seconds}`;

  //     // this.countdown = `${d}d ${h}h ${m}m ${s}s`;

  //     if (distance < 0) {
  //       clearInterval(interval);
  //       return "Po czasie";
  //     } else {
  //       return `${d}d ${h}h ${m}m ${s}s`;
  //     }
  //   }, 1000);
  // };
  // public countdown = setInterval((expiredDate) => {
  //   const now = new Date().getTime();
  //   const distance = expiredDate - now;
  //   const d = Math.floor(distance / (1000 * 60 * 60 * 24));
  //   const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //   const m = minutes > 9 ? minutes : `0${minutes}`;
  //   const s = seconds > 9 ? seconds : `0${seconds}`;

  //   // this.countdown = `${d}d ${h}h ${m}m ${s}s`;

  //   if (distance < 0) {
  //     clearInterval(this.countdown);
  //     return "Po czasie";
  //   } else {
  //     return `${d}d ${h}h ${m}m ${s}s`;
  //   }
  // }, 1000);

  // public countDown = setInterval(expiredDate => {
  //   console.log("ok");
  // }, 1000);

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

  // public calculate(expiredDate) {
  //   const interval = setInterval(() => {
  //     const now = new Date().getTime();
  //     const distance = expiredDate - now;
  //     const d = Math.floor(distance / (1000 * 60 * 60 * 24));
  //     const h = Math.floor(
  //       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //     );
  //     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //     const m = minutes > 9 ? minutes : `0${minutes}`;
  //     const s = seconds > 9 ? seconds : `0${seconds}`;

  //     this.countdown = `${d}d ${h}h ${m}m ${s}s`;

  //     if (distance < 0) {
  //       clearInterval(interval);
  //       this.countdown = "Przeterminowane";
  //     }
  //   }, 1000);

  //   return this.countdown;
  // }
}
