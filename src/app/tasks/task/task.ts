import { Component, EventEmitter, Input, Output } from '@angular/core';
import { userTask } from './userTask.model';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input({required: true}) task!: userTask;

  @Output() complete = new EventEmitter<string>();

  onCompleteTask(): void { this.complete.emit(this.task.id); }
}