import { PageTitleSharedService } from "./../../shared/services/page-title-shared.service";
import { TaskService } from "./../task.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Task } from "../task.model";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-task-edit",
  templateUrl: "./task-edit.component.html",
  styleUrls: ["./task-edit.component.scss"],
})
export class TaskEditComponent implements OnInit {
  public task: Task;
  public taskForm: FormGroup;
  public title: string = "Panel edycji zadania";

  constructor(
    private formBuider: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private taskService: TaskService,
    private router: Router,
    private pageTitleSharedService: PageTitleSharedService
  ) {}

  ngOnInit() {
    this.getOne();
    this.taskForm = this.buildTaskForm();
    this.pageTitleSharedService.sharePageTitle(this.title);
  }

  buildTaskForm(): FormGroup {
    // console.log(this.task.id);
    if (this.task.id) {
      return this.formBuider.group({
        summary: [this.task.summary, [Validators.required]],
        content: [this.task.content, [Validators.required]],
        taskType: [this.task.taskType, [Validators.required]],
        taskStatus: [this.task.taskStatus, [Validators.required]],
        createdDate: [this.task.createdDate, [Validators.required]],
        expiredDate: [this.task.expiredDate, [Validators.required]],
      });
    } else {
      return this.formBuider.group({
        summary: ["", [Validators.required]],
        content: ["", [Validators.required]],
        taskType: ["", [Validators.required]],
        taskStatus: ["", [Validators.required]],
        createdDate: ["", [Validators.required]],
        expiredDate: ["", [Validators.required]],
      });
    }
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
}
