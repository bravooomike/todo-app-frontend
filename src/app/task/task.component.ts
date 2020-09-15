import { PageTitleSharedService } from "./../shared/services/page-title-shared.service";
import { Router } from "@angular/router";
import { TaskService } from "./task.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Task } from "./task.model";
import {
  faEdit,
  faCommentSlash,
  faTrashAlt,
  faPlusSquare,
  faHourglassStart,
  faHourglassHalf,
  faHourglassEnd,
} from "@fortawesome/free-solid-svg-icons";
import { CountdownComponent } from "ngx-countdown";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.scss"],
})
export class TaskComponent implements OnInit {
  public tasks: Task[] = [];
  public filteredTasks: Task[] = [];
  public title: string = "Lista zadań";
  public settings = [
    { displayedName: "#", name: "null" },
    { displayedName: "Zadanie", name: "summary" },
    { displayedName: "Szczegóły", name: "content" },
    { displayedName: "Typ zadania", name: "taskType" },
    { displayedName: "Status zadania", name: "taskStatus" },
    { displayedName: "Data dodania", name: "createdDate" },
    { displayedName: "Do kiedy?", name: "null" },
    { displayedName: "Pozostało", name: "expiredDate" },
    { displayedName: "Data zakończenia", name: "endedDate" },
    { displayedName: "Akcje", name: "null" },
  ];
  public faEdit = faEdit;
  public faCommentSlash = faCommentSlash;
  public faTrashAlt = faTrashAlt;
  public faPlusSquare = faPlusSquare;
  public faHourglassStart = faHourglassStart;
  public faHourglassHalf = faHourglassHalf;
  public faHourglassEnd = faHourglassEnd;
  public isSorted: boolean = false;

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
      this.onFilterChanged(null);
      this.onCheckedChange(false);
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

  public goToAddTask() {
    this.router.navigateByUrl("/taskAdd");
  }

  public onFilterChanged(value: string) {
    if (!value || value === "") {
      this.filteredTasks = this.tasks;
    } else {
      this.filteredTasks = this.tasks.filter((task) => {
        const textToFilter =
          task.id +
          task.summary +
          task.content +
          task.taskType.name +
          task.taskStatus.name +
          task.createdDate +
          task.expiredDate +
          task.endedDate;
        return textToFilter.toLowerCase().search(value.toLowerCase()) !== -1;
      });
    }
  }

  public onCheckedChange(value: boolean) {
    if (value) {
      this.filteredTasks = this.tasks;
    } else {
      this.filteredTasks = this.tasks.filter((el) => {
        return el.taskStatus.name !== "zakonczone";
      });
    }
  }

  public today() {
    const d =
      new Date().getDate() > 9
        ? new Date().getDate()
        : `0${new Date().getDate()}`;
    const m =
      new Date().getMonth() > 9
        ? new Date().getMonth()
        : `0${new Date().getMonth() + 1}`;
    const y = new Date().getFullYear();

    return `${d}.${m}.${y}`;
  }

  public sortItems(e) {
    // this.filteredTasks = this.tasks.sort((a, b) => {
    this.filteredTasks.sort((a, b) => {
      // console.log("a", a[e.target.id]);
      // console.log("a", a);
      // console.log("b", b[e.target.id]);
      // console.log("b", b);
      // const name = e.target.id;
      // console.log(name);
      // const x = this.getValue(a[name]);
      const x = this.getValue(a[e.target]);
      // const y = this.getValue(b[name]);
      const y = this.getValue(b[e.target]);

      console.log(x);
      console.log(y);

      if (!this.isSorted) {
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      } else {
        if (x > y) {
          return -1;
        }
        if (x < y) {
          return 1;
        }
        return 0;
      }
    });
    this.isSorted = !this.isSorted;
  }

  private getValue(value: string | number): string | number {
    if (typeof value === "string") {
      return value.toLowerCase();
    } else {
      return value;
    }
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
