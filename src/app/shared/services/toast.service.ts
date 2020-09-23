import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";

@Injectable({
  providedIn: "root",
})
export class ToastService {
  constructor(private matSnackBar: MatSnackBar) {}

  public success(text: string) {
    this.matSnackBar.open(text, "", { panelClass: "toast-success" });
  }

  public failure(text: string) {
    this.matSnackBar.open(text, "", { panelClass: "toast-error" });
  }
}
