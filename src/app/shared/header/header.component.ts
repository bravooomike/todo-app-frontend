import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/login/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  public isVisible: boolean = true;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  public login() {
    this.isVisible = false;
    this.router.navigateByUrl("/login");
  }

  public logout() {
    this.authService.logout().subscribe();
  }

  public goToInfoPage() {
    if (!this.authService.userIdentity) {
      this.isVisible = true;
      this.router.navigateByUrl("/infoPage");
    } else {
      this.router.navigateByUrl("/task");
    }
  }
}
