import { Component, Input } from '@angular/core';
import { Task } from "./task/task";
import { userTask } from './task/userTask.model';
import { NewTask } from '../new-task/new-task';
import { TaskToAdd } from '../new-task/new-task.model';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input({required: true}) userId!: string;
  @Input({required: true}) userName!: string;

  isAddingTask: boolean = false;
  tasks: userTask[] = [
    {id: 't1', userId: 'u1', title: 'Master Angular', summary: 'Learn all the basic and advanced features of Angular.', dueDate: '2025-12-25'},
    {id: 't2', userId: 'u3', title: 'Learn TypeScript', summary: 'Understand the basics of TypeScript and how to use it with Angular.', dueDate: '2025-12-26'},
    {id: 't3', userId: 'u3', title: 'Build a Todo App', summary: 'Create a simple todo app using Angular and TypeScript.', dueDate: '2025-12-27'}
  ];

  /** Getter method to filter the tasks array by userId, in order to get all user tasks for the selected user*/
  get selectedUserTasks() { return this.tasks.filter(task => task.userId === this.userId); }

  /** Method called when a task is completed (click on 'Complete' button) */
  taskCompleted(taskId: string): void { this.tasks = this.tasks.filter(task => task.id !== taskId); }

  /** Method called when a new task is being added (click on 'Add Task' button) */
  onAddingTask() { this.isAddingTask = true; }

  /** Method called when the 'cancel' event is received from the 'new-task' component in order to close the 'Add New Task' dialog */
  onCancelAddTask() { this.isAddingTask = false; }

  /** Method called when the 'add' event is received from the 'new-task' component in order to create a new task */
  onAddTask(newTask: TaskToAdd) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.date
    });
    this.isAddingTask = false;
  }
}