import { AuthService } from "./../../login/auth.service";
import { Component, OnInit } from "@angular/core";
import { PageTitleSharedService } from "../services/page-title-shared.service";

@Component({
  selector: "app-page-title",
  templateUrl: "./page-title.component.html",
  styleUrls: ["./page-title.component.scss"],
})
export class PageTitleComponent implements OnInit {
  public pageTitle: string;

  constructor(
    private authService: AuthService,
    private pageTitleSharedService: PageTitleSharedService
  ) {}

  ngOnInit() {
    this.pageTitleSharedService.pageTitleSource$.subscribe((title) => {
      this.pageTitle = title;
    });
  }
}
