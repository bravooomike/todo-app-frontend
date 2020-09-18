import { Component, OnInit, Input, OnDestroy } from "@angular/core";

@Component({
  selector: "app-countdown",
  templateUrl: "./countdown.component.html",
  styleUrls: ["./countdown.component.scss"],
})
export class CountdownComponent implements OnInit, OnDestroy {
  public countdownTimer: string = "";
  public remainingTime: number = null;
  public exceededTime: number = null;
  private interval;

  @Input()
  public endDate: Date;

  constructor() {}

  ngOnInit() {
    this.interval = setInterval(() => {
      this.remainingTime =
        new Date(this.endDate).getTime() - new Date().getTime();

      const signChar = this.remainingTime < 0 ? -1 : 1;

      const d =
        signChar *
        Math.floor(Math.abs(this.remainingTime) / (1000 * 60 * 60 * 24));
      const h =
        signChar *
        Math.floor(
          (Math.abs(this.remainingTime) % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );
      const m =
        signChar *
        Math.floor(
          (Math.abs(this.remainingTime) % (1000 * 60 * 60)) / (1000 * 60)
        );

      if (this.remainingTime < 0) {
        // this.countdownTimer = "Przekroczone";
        // return;
      } else {
      }

      // console.log(this.remainingTime);
      // console.log(d);
      // console.log(h);
      // console.log(m);
      this.countdownTimer = `${d}d ${h}g ${m}m`;
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
