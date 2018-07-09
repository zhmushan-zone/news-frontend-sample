import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, Response } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  prefix = '/api/user';

  private _user: User;
  get user() { return this._user; }
  set user(user: User) { this._user = user; }

  constructor(
    public http: HttpClient
  ) { }

  login(user: User) {
    return this.http.post<Response<User>>(`${this.prefix}/login`, user);
  }

  register(user: User) {
    return this.http.post<Response<User>>(`${this.prefix}/register`, user);
  }

  auth() {
    return this.http.get<Response<User>>(`${this.prefix}/auth`);
  }

  logout() {
    return this.http.get<Response<null>>(`${this.prefix}/logout`);
  }

  findAll() {
    return this.http.get<Response<User[]>>(`${this.prefix}`);
  }

  del(id: string) {
    return this.http.delete<Response<null>>(`${this.prefix}/${id}`);
  }

  update(user: User) {
    return this.http.put<Response<User>>(`${this.prefix}`, user);
  }

  findById(id: string) {
    return this.http.get<Response<User>>(`${this.prefix}/${id}`);
  }
}
