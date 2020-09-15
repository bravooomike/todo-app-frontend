import { UserService } from "./../user.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { User } from "../user.model";
import { PageTitleSharedService } from "src/app/shared/services/page-title-shared.service";

@Component({
  selector: "app-user-edit",
  templateUrl: "./user-edit.component.html",
  styleUrls: ["./user-edit.component.scss"],
})
export class UserEditComponent implements OnInit {
  public user: User;
  public userForm: FormGroup;
  public title: string = "Edycja użytkownika";

  constructor(
    private activatedRoute: ActivatedRoute,
    private pageTitleSharedService: PageTitleSharedService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getOne();
    this.userForm = this.buildUserForm();
    this.pageTitleSharedService.sharePageTitle(this.title);
  }

  public buildUserForm() {
    return this.formBuilder.group({
      firstName: [this.user.firstName, [Validators.required]],
      lastName: [this.user.lastName, [Validators.required]],
      email: [this.user.email, [Validators.required]],
      password: [this.user.password, [Validators.required]],
      userRole: [this.user.userRole, [Validators.required]],
      active: [this.user.active, [Validators.required]],
    });
  }

  public getOne() {
    this.user = this.activatedRoute.snapshot.data["user"];
    console.log(this.user);
  }

  public editUser() {
    this.userService
      .editUser(this.userForm.value, this.user.id)
      .subscribe(() => {
        this.router.navigateByUrl("/user");
      });
  }

  public back() {
    window.history.back();
  }
}
