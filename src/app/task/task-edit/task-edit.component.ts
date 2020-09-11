import { TaskStatusService } from "./../task-status/task-status.service";
import { PageTitleSharedService } from "./../../shared/services/page-title-shared.service";
import { TaskService } from "./../task.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Task } from "../task.model";
import { ActivatedRoute, Router } from "@angular/router";
import { TaskTypeService } from "../task-type/task-type.service";
import { TaskType } from "../task-type/task-type.model";
import { TaskStatus } from "../task-status/task-status.model";

@Component({
  selector: "app-task-edit",
  templateUrl: "./task-edit.component.html",
  styleUrls: ["./task-edit.component.scss"],
})
export class TaskEditComponent implements OnInit {
  public task: Task;
  public taskForm: FormGroup;
  public title: string = "Panel edycji zadania";
  public minDate: Date;
  public maxDate: Date;
  public taskTypes: TaskType[] = [];
  public taskStatuses: TaskStatus[] = [];

  constructor(
    private formBuider: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private taskService: TaskService,
    private router: Router,
    private pageTitleSharedService: PageTitleSharedService,
    private taskTypeService: TaskTypeService,
    private taskStatusService: TaskStatusService
  ) {}

  ngOnInit() {
    this.getTaskTypes();
    this.getTaskStatuses();
    this.getOne();
    this.taskForm = this.buildTaskForm();
    this.pageTitleSharedService.sharePageTitle(this.title);
  }

  buildTaskForm(): FormGroup {
    return this.formBuider.group({
      // id: ["", []],
      summary: [this.task.summary, [Validators.required]],
      content: [this.task.content, [Validators.required]],
      taskType: [this.task.taskType, [Validators.required]],
      taskStatus: [this.task.taskStatus, [Validators.required]],
      createdDate: [this.task.createdDate, [Validators.required]],
      expiredDate: [this.task.expiredDate, [Validators.required]],
      // endedDate: [this.task.endedDate, [Validators.required]],
    });
  }

  public getOne() {
    const task = this.activatedRoute.snapshot.data["task"];
    this.task = task;
  }

  public editTask() {
    this.taskService
      .editTask(this.taskForm.value, this.task.id)
      .subscribe(() => {
        this.router.navigateByUrl("/task");
      });
  }

  public back() {
    window.history.back();
  }

  public getTaskTypes() {
    this.taskTypeService.getAll().subscribe((taskTypes) => {
      this.taskTypes = taskTypes;
    });
  }

  public getTaskStatuses() {
    this.taskStatusService.getAll().subscribe((taskStatuses) => {
      this.taskStatuses = taskStatuses;
    });
  }
}
