import { UserService } from "./../user.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { User } from "../user.model";
import { PageTitleSharedService } from "src/app/shared/services/page-title-shared.service";

@Component({
  selector: "app-user-add",
  templateUrl: "./user-add.component.html",
  styleUrls: ["./user-add.component.scss"],
})
export class UserAddComponent implements OnInit {
  public user: User;
  public userForm: FormGroup;
  public title: string = "Dodawanie użytkownika";

  constructor(
    private activatedRoute: ActivatedRoute,
    private pageTitleSharedService: PageTitleSharedService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userForm = this.buildUserForm();
    this.pageTitleSharedService.sharePageTitle(this.title);
  }

  public buildUserForm() {
    return this.formBuilder.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      email: ["", [Validators.required]],
      password: ["", [Validators.required]],
      userRole: ["", [Validators.required]],
      active: ["", [Validators.required]],
    });
  }

  public addUser() {
    this.userService.addUser(this.userForm.value).subscribe(() => {
      this.router.navigateByUrl("/user");
    });
  }

  public back() {
    window.history.back();
  }
}
