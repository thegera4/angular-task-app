import { Component, inject, Input } from '@angular/core';
import { userTask } from './userTask.model';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input({required: true}) task!: userTask;
  private tasksService: TasksService = inject(TasksService);

  /** Method to complete the task (remove it from the list) via service */
  onCompleteTask(): void { this.tasksService.completeTask(this.task.id); }
}