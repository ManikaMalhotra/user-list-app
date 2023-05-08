import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  users: Array<User> = [];
  users$ = new Subject<Array<User>>();

  constructor() { }

  getUsers(): Array<User> {
    return this.users;
  }

  addUser(user: User): void {
    this.users.unshift(user);
    this.users$.next(this.users);
  }
}