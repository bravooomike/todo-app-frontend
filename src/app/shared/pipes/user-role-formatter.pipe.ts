import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "userRoleFormatter",
})
export class UserRoleFormatterPipe implements PipeTransform {
  transform(value: string): string {
    if (value === "ADMIN") {
      return "Administrator";
    } else if (value === "USER") {
      return "Użytkownik";
    }
  }
}
