import { AuthService } from "src/app/login/auth.service";
import { Component, OnInit } from "@angular/core";
import {
  faDesktop,
  faChartLine,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-info-page",
  templateUrl: "./info-page.component.html",
  styleUrls: ["./info-page.component.scss"],
})
export class InfoPageComponent implements OnInit {
  faDesktop = faDesktop;
  faChartLine = faChartLine;
  faCalendarAlt = faCalendarAlt;

  constructor(private authService: AuthService) {}

  ngOnInit() {}
}
