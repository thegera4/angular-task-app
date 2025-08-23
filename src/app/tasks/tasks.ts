import { Component, Input } from '@angular/core';
import { Task } from "./task/task";
import { userTask } from './task/userTask.model';

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input({required: true}) userId!: string;
  @Input({required: true}) userName!: string;

  tasks: userTask[] = [
    {id: 't1', userId: 'u1', title: 'Master Angular', summary: 'Learn all the basic and advanced features of Angular.', dueDate: '2025-12-25'},
    {id: 't2', userId: 'u3', title: 'Learn TypeScript', summary: 'Understand the basics of TypeScript and how to use it with Angular.', dueDate: '2025-12-26'},
    {id: 't3', userId: 'u3', title: 'Build a Todo App', summary: 'Create a simple todo app using Angular and TypeScript.', dueDate: '2025-12-27'}
  ];

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.userId);
  }

  taskCompleted(taskId: string): void {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

}
