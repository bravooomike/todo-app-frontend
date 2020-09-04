import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/login/auth.service";
import {
  faListAlt,
  faPlusSquare,
  faCog,
  faUserCog,
  // faTools,
} from "@fortawesome/free-solid-svg-icons";
import { Router } from "@angular/router";
import { AuthGuard } from "src/app/login/auth.guard";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {
  faListAlt = faListAlt;
  faPlusSquare = faPlusSquare;
  faCog = faCog;
  faUserCog = faUserCog;
  // faTools = faTools;

  constructor(
    private authService: AuthService,
    private router: Router,
    private authGuard: AuthGuard
  ) {}

  ngOnInit() {}

  public gotoAddTask() {
    this.router.navigateByUrl("/add");
  }
}
