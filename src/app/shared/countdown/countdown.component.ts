import { Component, OnInit, ViewChild, Input, OnDestroy } from "@angular/core";

@Component({
  selector: "app-countdown",
  templateUrl: "./countdown.component.html",
  styleUrls: ["./countdown.component.scss"],
})
export class CountdownComponent implements OnInit, OnDestroy {
  // public countdownTimer: string = "";
  public remainingTime: number = null;
  public days: number = null;
  public hours: number = null;
  public minutes: number = null;
  private interval;

  @Input()
  public endDate: Date;

  @Input()
  public taskStatus: string;

  constructor() {}

  ngOnInit() {
    // console.log(this.taskStatus);
    // console.log(typeof this.endDate);
    this.interval = setInterval(() => {
      this.remainingTime =
        new Date(this.endDate).getTime() - new Date().getTime();
      this.days = Math.floor(this.remainingTime / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (this.remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor(
        (this.remainingTime % (1000 * 60 * 60)) / (1000 * 60)
      );

      // console.log(this.remainingTime);
      // this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // const m = minutes < 9 ? minutes : `0${minutes}`;
      // console.log(m);

      // this.countdownTimer = `${d}d ${h}g ${m}m`;
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  // public calculate(expiredDate) {
  //   const interval = setInterval(() => {
  //     const now = new Date().getTime();
  //     const distance = expiredDate - now;
  //     const d = Math.floor(distance / (1000 * 60 * 60 * 24));
  //     const h = Math.floor(
  //       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //     );
  //     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //     const m = minutes > 9 ? minutes : `0${minutes}`;
  //     const s = seconds > 9 ? seconds : `0${seconds}`;

  //     this.countdown = `${d}d ${h}h ${m}m ${s}s`;

  //     if (distance < 0) {
  //       clearInterval(interval);
  //       this.countdown = "Przeterminowane";
  //     }
  //   }, 1000);

  //   return this.countdown;
  // }
}
