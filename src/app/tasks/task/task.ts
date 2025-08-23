import { Component, EventEmitter, Input, Output } from '@angular/core';
import { userTask } from './userTask.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input({required: true}) task!: userTask;

  @Output() complete = new EventEmitter<string>();

  onCompleteTask(): void { this.complete.emit(this.task.id); }
}