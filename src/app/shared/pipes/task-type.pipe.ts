import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "taskType",
})
export class TaskTypePipe implements PipeTransform {
  transform(value: string): string {
    if (value === "zak") {
      return "Zakupy";
    } else if (value === "szk") {
      return "Szkoła";
    } else if (value === "pra") {
      return "Praca";
    } else if (value === "inn") {
      return "Inne";
    }
  }
}
