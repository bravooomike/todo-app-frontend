import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RemainingTimeSharedService {
  remainingTimeSource$ = new Subject<number>();

  constructor() {}

  public shareRemainingTime(time: number) {
    this.remainingTimeSource$.next(time);
  }
}
