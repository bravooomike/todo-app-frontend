import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PageTitleSharedService {
  pageTitleSource$ = new Subject<string>();

  constructor() {}

  sharePageTitle(title: string) {
    this.pageTitleSource$.next(title);
  }
}
