import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "dateFormatter",
})
export class DateFormatterPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return "";
    } else {
      return value.slice(0, 10).split("-").reverse().join(".");
    }
  }
}
