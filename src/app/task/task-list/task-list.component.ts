import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { Task } from "../task.model";
import {
  faEdit,
  faCommentSlash,
  faTrashAlt,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { EndedTaskComponent } from "../ended-task/ended-task.component";
import { Router } from "@angular/router";
import { TaskService } from "../task.service";
import { ConfirmationComponent } from "src/app/shared/confirmation/confirmation.component";
import { ColumnMode } from "@swimlane/ngx-datatable";
import { TaskStatus } from "../task-status/task-status.model";
import { TaskStatusService } from "../task-status/task-status.service";
import { MatDialog } from "@angular/material";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.scss"],
})
export class TaskListComponent implements OnInit {
  public tasks: Task[] = [];

  public loadingIndicator = true;
  public reorderable = true;
  ColumnMode = ColumnMode;

  @ViewChild("endedTaskRef", { static: false })
  public endedTaskRef: EndedTaskComponent;

  public filteredTasks: Task[] = [];
  public taskStatuses: TaskStatus[];

  public faEdit = faEdit;
  public faCommentSlash = faCommentSlash;
  public faTrashAlt = faTrashAlt;
  public faInfoCircle = faInfoCircle;

  public isDetailsActive: boolean = false;
  public taskDetails: Task;

  // public settings = [
  //   { displayedName: "#", name: "null" },
  //   { displayedName: "Zadanie", name: "summary" },
  //   { displayedName: "Szczegóły", name: "content" },
  //   { displayedName: "Typ zadania", name: "taskType.name" },
  //   { displayedName: "Status zadania", name: "taskStatus.name" },
  //   { displayedName: "Data dodania", name: "createdDate" },
  //   { displayedName: "Do kiedy?", name: "null" },
  //   // { displayedName: "Pozostało", name: "null" },
  //   { displayedName: "Przekroczenie", name: "null" },
  //   { displayedName: "Data zakończenia", name: "endedDate" },
  //   { displayedName: "Akcje", name: "null" },
  // ];

  // public columns = [];

  public isSorted: boolean = false;

  // @ViewChild(ConfirmationComponent, { static: false })
  // conf: ConfirmationComponent;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private matDialog: MatDialog,
    private taskStatusService: TaskStatusService
  ) {}

  ngOnInit() {
    this.getAll();
    this.getTaskStatuses();
  }

  public getAll() {
    this.loadingIndicator = true;
    this.tasks = [];
    this.taskService.getAll().subscribe((tasks) => {
      this.tasks = tasks;
      this.loadingIndicator = false;
      // console.log(this.tasks);
      this.onFilterChanged(null);
      this.onCheckedChange(false);
    });
  }

  public getTaskStatuses() {
    this.taskStatusService.getAll().subscribe((taskStatuses) => {
      this.taskStatuses = taskStatuses;
    });
  }

  public goToEdit(id: number) {
    this.router.navigate(["/task", id]);
    this.isDetailsActive = false;
  }

  public deleteTask(task: Task): void {
    const dialogRef = this.matDialog.open(ConfirmationComponent, {
      data: { taskId: task.id, taskName: task.summary },
    });
    dialogRef.afterClosed().subscribe(() => {
      this.getAll();
    });
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
        return el.taskStatus.code !== "zak";
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
  }

  public deactivateTaskDetails() {
    this.isDetailsActive = false;
    this.taskDetails = null;
  }

  public endTask(task: Task) {
    if (task.taskStatus.code === "zak") {
      return;
    } else {
      const taskStatusEnd = this.taskStatuses.find(
        (status) => status.code === "zak"
      );
      this.taskService
        .changeTaskStatus(task, task.id, taskStatusEnd)
        .subscribe(() => this.getAll());
    }
  }
}
