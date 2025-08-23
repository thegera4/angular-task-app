import { Component } from '@angular/core';
import { Header } from './header/header';
import { User } from "./user/user";
import { DUMMY_USERS } from '../dummy-users';
import { Tasks } from './tasks/tasks';
import { NgFor, NgIf } from '@angular/common';
import { USER } from './user/user.model';

@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks, NgFor, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users: USER[] = DUMMY_USERS;
  selectedUser: USER | undefined;

  get selectedUserName(){ return this.selectedUser?.name; }

  get selectedUserId(){ return this.selectedUser?.id; }

  onUserSelected(id: string): USER | undefined {
    this.selectedUser = this.users.find(user => user.id === id);
    return this.selectedUser;
  }
}