import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  private email: string = "";
  private password: string = "";

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  public submit() {
    // console.log(this.email);
    // console.log(this.password);
    if (!this.email || !this.password) {
      return;
    }
    this.authService.login(this.email, this.password).subscribe((user) => {
      // console.log(user);
      this.router.navigateByUrl("/task");
    });
  }
}
