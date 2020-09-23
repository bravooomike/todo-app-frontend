import { TaskListComponent } from "./task-list/task-list.component";
import { PageTitleSharedService } from "./../shared/services/page-title-shared.service";
import { Router } from "@angular/router";
import { Component, OnInit, ViewChild } from "@angular/core";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.scss"],
})
export class TaskComponent implements OnInit {
  public title: string = "Lista zadań";
  public faPlusSquare = faPlusSquare;

  @ViewChild("taskListRef", { static: false })
  public taskListRef: TaskListComponent;

  constructor(
    private router: Router,
    private pageTitleSharedService: PageTitleSharedService
  ) {}

  ngOnInit() {
    this.pageTitleSharedService.sharePageTitle(this.title);
  }

  public filter(value: string) {
    this.taskListRef.onFilterChanged(value);
  }

  public showAll(value: boolean) {
    this.taskListRef.onCheckedChange(value);
  }

  public goToAddTask() {
    this.router.navigateByUrl("/taskAdd");
  }
}
