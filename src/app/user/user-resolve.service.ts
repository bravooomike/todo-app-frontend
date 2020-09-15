import { UserService } from "./user.service";
import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { User } from "./user.model";

@Injectable({
  providedIn: "root",
})
export class UserResolveService implements Resolve<User> {
  constructor(private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.userService.getOne(route.params["id"]);
  }
}
