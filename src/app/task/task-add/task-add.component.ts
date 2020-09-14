import { Component, OnInit } from "@angular/core";
import { Task } from "../task.model";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { TaskService } from "../task.service";
import { PageTitleSharedService } from "src/app/shared/services/page-title-shared.service";

@Component({
  selector: "app-task-add",
  templateUrl: "./task-add.component.html",
  styleUrls: ["./task-add.component.scss"],
})
export class TaskAddComponent implements OnInit {
  public task: Task;
  public taskForm: FormGroup;
  public title: string = "Panel dodawania zadania";

  constructor(
    private formBuider: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private taskService: TaskService,
    private router: Router,
    private pageTitleSharedService: PageTitleSharedService
  ) {}

  ngOnInit() {
    this.taskForm = this.buildTaskForm();
    this.pageTitleSharedService.sharePageTitle(this.title);
  }

  private buildTaskForm(): FormGroup {
    return this.formBuider.group({
      summary: ["", [Validators.required]],
      content: ["", [Validators.required]],
      taskType: ["", [Validators.required]],
      taskStatus: ["", [Validators.required]],
      createdDate: ["", [Validators.required]],
      expiredDate: ["", [Validators.required]],
    });
  }

  public addTask() {
    this.taskService.addTask(this.taskForm.value).subscribe(() => {
      this.router.navigateByUrl("/task");
    });
  }

  public back() {
    window.history.back();
  }
}
