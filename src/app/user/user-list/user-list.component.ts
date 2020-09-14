import { Router } from "@angular/router";
import { PageTitleSharedService } from "src/app/shared/services/page-title-shared.service";
import { UserService } from "./../user.service";
import { Component, OnInit } from "@angular/core";
import { User } from "../user.model";
import {
  faEdit,
  faCommentSlash,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"],
})
export class UserListComponent implements OnInit {
  public users: User[] = [];
  public title: string = "Lista użytkowników";
  public displayedHeaders = [
    "Imię",
    "Nazwisko",
    "Email",
    "Rola",
    "Aktywny",
    "Akcje",
  ];
  public faEdit = faEdit;
  public faCommentSlash = faCommentSlash;
  public faTrashAlt = faTrashAlt;

  constructor(
    private userService: UserService,
    private pageTitleSharedService: PageTitleSharedService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAll();
    this.pageTitleSharedService.sharePageTitle(this.title);
  }

  public getAll() {
    this.userService.getAll().subscribe((users) => {
      this.users = users;
      // console.log(this.users);
    });
  }

  public goToEdit(id: number) {
    console.log(id);
    this.router.navigate(["user", id]);
  }
}
