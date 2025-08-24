import { Component, Input } from '@angular/core';
import { Task } from "./task/task";
import { NewTask } from '../new-task/new-task';
import { TaskToAdd } from '../new-task/new-task.model';
import { TasksService } from './tasks.service';

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

  constructor(private tasksService: TasksService) {}

  /** Getter method to filter the tasks array by userId, in order to get all user tasks for the selected user*/
  get selectedUserTasks() { return this.tasksService.getUserTasks(this.userId); }

  /** Method called when a new task is being added (click on 'Add Task' button) */
  onAddingTask() { this.isAddingTask = true; }

  /** Method called when the 'close' event is received from the 'new-task' component in order to close the 'Add New Task' dialog */
  onCloseAddTask() { this.isAddingTask = false; }
}