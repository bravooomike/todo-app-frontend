import { Component, OnInit, Input, OnDestroy } from "@angular/core";

@Component({
  selector: "app-time-exceeded-counter",
  templateUrl: "./time-exceeded-counter.component.html",
  styleUrls: ["./time-exceeded-counter.component.scss"],
})
export class TimeExceededCounterComponent implements OnInit, OnDestroy {
  public exceededTimer: string = "";
  public remainingTime: number = null;
  public exceededTime: number = null;

  public daysExceeded: number;
  public hoursExceeded: number;
  public minutesExceeded: number;

  private interval;

  @Input()
  public endDate: Date;

  constructor() {}

  ngOnInit() {
    this.interval = setInterval(() => {
      this.remainingTime =
        new Date(this.endDate).getTime() - new Date().getTime();

      const d = Math.floor(this.remainingTime / (1000 * 60 * 60 * 24));
      const h = Math.floor(
        (this.remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const m = Math.floor(
        (this.remainingTime % (1000 * 60 * 60)) / (1000 * 60)
      );

      if (this.remainingTime < 0) {
        this.exceededTime = Math.abs(this.remainingTime);
        this.daysExceeded = Math.floor(
          this.exceededTime / (1000 * 60 * 60 * 24)
        );
        this.hoursExceeded = Math.floor(
          (this.exceededTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        this.minutesExceeded = Math.floor(
          (this.exceededTime % (1000 * 60 * 60)) / (1000 * 60)
        );
        this.exceededTimer = `${this.daysExceeded}d ${this.hoursExceeded}g ${this.minutesExceeded}m`;
      } else {
        this.exceededTimer = "- - -";
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
