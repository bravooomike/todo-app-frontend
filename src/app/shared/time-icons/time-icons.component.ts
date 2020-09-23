import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import {
  faHourglassStart,
  faHourglassHalf,
  faHourglassEnd,
} from "@fortawesome/free-solid-svg-icons";
import { Task } from "src/app/task/task.model";

@Component({
  selector: "app-time-icons",
  templateUrl: "./time-icons.component.html",
  styleUrls: ["./time-icons.component.scss"],
})
export class TimeIconsComponent implements OnInit, OnDestroy {
  public faHourglassStart = faHourglassStart;
  public faHourglassHalf = faHourglassHalf;
  public faHourglassEnd = faHourglassEnd;
  public interval;
  public remainingTime: number = null;

  @Input()
  public task: Task;

  constructor() {}

  ngOnInit() {
    this.interval = setInterval(() => {
      this.remainingTime =
        new Date(this.task.expiredDate).getTime() - new Date().getTime();
      // console.log(this.remainingTime);
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
