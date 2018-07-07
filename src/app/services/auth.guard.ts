import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate() {
    return this.userService.user ? true : false;
  }

  constructor(
    public userService: UserService
  ) { }
}
