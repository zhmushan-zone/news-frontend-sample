import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, Response } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  prefix = '/api/user';

  constructor(
    public httpClient: HttpClient
  ) { }

  login(user: User) {
    return this.httpClient.post<Response<User>>(`${this.prefix}/login`, user);
  }

  register(user: User) {
    return this.httpClient.post<Response<User>>(`${this.prefix}/register`, user);
  }
}
