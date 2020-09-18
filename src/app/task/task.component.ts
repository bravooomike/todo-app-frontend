import { PageTitleSharedService } from "./../shared/services/page-title-shared.service";
import { Router } from "@angular/router";
import { TaskService } from "./task.service";
import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { Task } from "./task.model";
import {
  faEdit,
  faCommentSlash,
  faTrashAlt,
  faPlusSquare,
  faHourglassStart,
  faHourglassHalf,
  faHourglassEnd,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

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
    { displayedName: "Typ zadania", name: "taskType.name" },
    { displayedName: "Status zadania", name: "taskStatus.name" },
    { displayedName: "Data dodania", name: "createdDate" },
    { displayedName: "Do kiedy?", name: "null" },
    { displayedName: "Pozostało", name: "null" },
    { displayedName: "Przekroczenie", name: "null" },
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
  public faInfoCircle = faInfoCircle;

  public isSorted: boolean = false;
  public isDetailsActive: boolean = false;
  public taskDetails: Task;
  public remainingTime: number = null;

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
    this.isDetailsActive = false;
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

  public sortItems(e) {
    // this.filteredTasks = this.tasks.sort((a, b) => {
    this.filteredTasks.sort((a, b) => {
      const name = e.target.id;
      const x = this.getValue(a[name]);
      const y = this.getValue(b[name]);

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

  public activateTaskDetails(task) {
    this.isDetailsActive = true;
    this.taskDetails = task;
    console.log(this.isDetailsActive);
  }

  public deactivateTaskDetails() {
    this.isDetailsActive = false;
    this.taskDetails = null;
    console.log(this.isDetailsActive);
  }
}
