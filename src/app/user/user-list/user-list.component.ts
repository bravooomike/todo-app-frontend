import { Router } from "@angular/router";
import { PageTitleSharedService } from "src/app/shared/services/page-title-shared.service";
import { UserService } from "./../user.service";
import { Component, OnInit } from "@angular/core";
import { User } from "../user.model";
import { faEdit, faPlusSquare } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"],
})
export class UserListComponent implements OnInit {
  public users: User[] = [];
  public filteredUsers: User[] = [];
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
  public faPlusSquare = faPlusSquare;

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
      this.onFilterChanged(null);
      this.onCheckedChange(false);
    });
  }

  public goToEdit(id: number) {
    this.router.navigate(["/user", id]);
  }

  public onFilterChanged(value: string) {
    if (!value || value === "") {
      this.filteredUsers = this.users;
    } else {
      this.filteredUsers = this.users.filter((task) => {
        const textToFilter =
          task.id +
          task.firstName +
          task.lastName +
          task.email +
          task.userRole +
          task.active;
        return textToFilter.toLowerCase().search(value.toLowerCase()) !== -1;
      });
    }
  }

  public onCheckedChange(value: boolean) {
    if (value) {
      this.filteredUsers = this.users;
    } else {
      this.filteredUsers = this.users.filter((el) => {
        return el.active !== false;
      });
    }
  }
}
