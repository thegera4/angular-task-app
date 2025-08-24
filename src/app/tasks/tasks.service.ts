import { Injectable } from "@angular/core";
import { userTask } from "./task/userTask.model";

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks: userTask[] = [
    {id: 't1', userId: 'u1', title: 'Master Angular', summary: 'Learn all the basic and advanced features of Angular.', dueDate: '2025-12-25'},
    {id: 't2', userId: 'u3', title: 'Learn TypeScript', summary: 'Understand the basics of TypeScript and how to use it with Angular.', dueDate: '2025-12-26'},
    {id: 't3', userId: 'u3', title: 'Build a Todo App', summary: 'Create a simple todo app using Angular and TypeScript.', dueDate: '2025-12-27'}
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) { this.tasks = JSON.parse(tasks); }
  }

  /**
   * Method to get all tasks
   * @returns Array of tasks for all users
   */
  getAllTasks(): userTask[] { return this.tasks; }

  /** 
   * Method to get all tasks for a specific user
   * @param userId - The ID of the user
   * @returns An array of user tasks
  */
  getUserTasks(userId: string): userTask[] { return this.tasks.filter(task => task.userId === userId); }

  /**
   * Method to add a new task and save it to local storage
   * @param newTask - The new task to add
   */
  addTask(newTask: userTask): void { 
    this.tasks.push(newTask); 
    this.saveTasksToLocalStorage();
  }

  /**
   * Method to complete a task and remove it from the list as well as save changes to local storage
   * @param taskId - The ID of the task to complete
   */
  completeTask(taskId: string): void { 
    this.tasks = this.tasks.filter(task => task.id !== taskId); 
    this.saveTasksToLocalStorage();
  }

  /** Method to save tasks to local storage */
  private saveTasksToLocalStorage(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}